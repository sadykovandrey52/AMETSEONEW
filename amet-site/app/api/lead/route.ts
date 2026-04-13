import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { company } from "@/data/company";
import { getSupabaseClient } from "@/lib/supabase";

const FILE_SIZE_LIMIT_BYTES = 50 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["dxf", "dwg", "pdf", "step", "stp"];

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  company?: string;
  comment?: string;
  page_title: string;
  page_url: string;
  file_url?: string;
  is_subcontract: boolean;
};

function getFileExtension(filename: string) {
  return filename.split(".").pop()?.toLowerCase() ?? "";
}

function readRequiredText(data: FormData, key: string) {
  const value = data.get(key);
  if (!value || typeof value !== "string") {
    throw new Error(`Поле ${key} обязательно`);
  }
  return value.trim();
}

async function uploadFile(file?: File): Promise<string | undefined> {
  if (!file || file.size === 0) {
    return undefined;
  }

  if (file.size > FILE_SIZE_LIMIT_BYTES) {
    throw new Error("Файл превышает ограничение 50 МБ");
  }

  const ext = getFileExtension(file.name);
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    throw new Error("Неподдерживаемый формат файла");
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return undefined;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const cleanName = file.name.replace(/[^a-zA-Z0-9_.-]/g, "_");
  const path = `leads/${Date.now()}-${cleanName}`;
  const { error } = await supabase.storage.from("drawings").upload(path, buffer, {
    contentType: file.type || "application/octet-stream",
    upsert: false,
  });

  if (error) {
    throw new Error(`Ошибка загрузки в storage: ${error.message}`);
  }

  const { data } = supabase.storage.from("drawings").getPublicUrl(path);
  return data.publicUrl;
}

async function sendAmoLead(payload: LeadPayload) {
  const webhookUrl = process.env.AMOCRM_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function sendTelegram(payload: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return;
  }

  const message = [
    `🔔 ${payload.page_title}`,
    `👤 ${payload.name}${payload.company ? ` / ${payload.company}` : ""}`,
    `📞 ${payload.phone}  ✉ ${payload.email}`,
    `📎 ${payload.file_url || "Файл не приложен"}`,
    `💬 ${payload.comment || "Без комментария"}`,
    `🏗 Субподряд: ${payload.is_subcontract ? "Да" : "Нет"}`,
    `🌐 ${payload.page_url}`,
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });
}

async function sendAutoReply(payload: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return;
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "АМЕТ <noreply@amet-k.ru>",
    to: payload.email,
    subject: "Заявка принята — АМЕТ",
    text: `Заявка принята — АМЕТ.\nСвяжемся за 2 часа. Срочно: ${company.phone}`,
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    if (formData.get("consent") === null) {
      throw new Error("Требуется согласие с политикой обработки данных");
    }

    const fileField = formData.get("file");
    const file = fileField instanceof File ? fileField : undefined;

    const payload: LeadPayload = {
      name: readRequiredText(formData, "name"),
      phone: readRequiredText(formData, "phone"),
      email: readRequiredText(formData, "email"),
      company: (formData.get("company") as string | null)?.trim() || undefined,
      comment: (formData.get("comment") as string | null)?.trim() || undefined,
      page_title: readRequiredText(formData, "page_title"),
      page_url: readRequiredText(formData, "page_url"),
      is_subcontract: formData.get("is_subcontract") !== null,
    };

    payload.file_url = await uploadFile(file);

    await Promise.allSettled([
      sendAmoLead(payload),
      sendTelegram(payload),
      sendAutoReply(payload),
    ]);

    return NextResponse.redirect(new URL("/spasibo/", request.url), {
      status: 303,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Ошибка отправки заявки",
      },
      { status: 400 },
    );
  }
}
