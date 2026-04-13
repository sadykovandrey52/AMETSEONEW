import OpenAI from "openai";
import { NextResponse } from "next/server";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const SYSTEM_PROMPT = `Ты — менеджер-консультант ООО АМЕТ (металлообработка, Москва).
Отвечай кратко, по-деловому, на русском. Помогаешь строителям,
субподрядчикам, инженерам НИИ/ОПК.

КОМПАНИЯ:
- Тел: +7 (903) 523-90-25 (Пн–Пт 09:00–18:00)
- Telegram: @sadykovandrey (24/7)
- Email: info@amet-k.ru
- Офис: Москва, ул. Радио, 24к1, оф. 606-10
- Производство: Подольск, ул. Шамотная, 6

УСЛУГИ: лазерная резка (сталь до 45мм, нержавейка б/азота и с азотом,
алюминий, дюраль, медь М1/М2, латунь Л63/Л68, бронза БрАЖ/ОФ,
оцинковка, художественная), гибка, сварка MIG/TIG, порошковая покраска RAL.

ИЗДЕЛИЯ: закладные, кронштейны (вентфасады), стойки, пластины, фланцы,
корпуса приборов, кожухи, короба, малые МК.

ПАРАМЕТРЫ: допуск ±0,1мм (лазер), ±0,5° (гибка), от 1 детали,
срок от 1 дня, субподряд — ПРИОРИТЕТ, форматы: DXF/DWG/PDF/STEP.

ЦЕНЫ (100м контура): сталь 2мм=56р, 3мм=73р, 6мм=142р.
Нерж(б/N₂) 2мм=85р, 3мм=126р. Нерж(с N₂) 2мм=128р.
Алюминий 2мм=128р. Дюраль 2мм=94р.
Латунь 2мм=264р. Медь 2мм=335р.

ПРАВИЛА: 1. Не придумывать цены — только из базы выше.
2. Неизвестная цена → предложи загрузить DXF для расчёта.
3. Готов к заказу → направь к форме или контактам.
4. Только темы металлообработки.
5. Максимум 3–4 предложения.`;

export async function POST(request: Request) {
  try {
    const { messages }: { messages: Message[] } = await request.json();
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      max_tokens: 400,
      stream: true,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((message) => ({
          role: message.role,
          content: message.text,
        })),
      ],
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content ?? "";
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("AI chat error", error);
    return NextResponse.json(
      { error: "Не удалось получить ответ от AI-помощника." },
      { status: 500 },
    );
  }
}
