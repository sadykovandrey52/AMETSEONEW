"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { reachMetrikaGoal } from "@/lib/metrika";

type LeadFormProps = {
  pageName: string;
  material: string;
};

type LeadFormValues = {
  name: string;
  phone: string;
  email: string;
  company?: string;
  file?: FileList;
  comment?: string;
  is_subcontract?: boolean;
  consent: boolean;
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const source = digits.startsWith("7") ? digits : `7${digits.slice(1)}`;
  const clean = source.padEnd(11, "_");
  return `+7 (${clean.slice(1, 4)}) ${clean.slice(4, 7)}-${clean.slice(7, 9)}-${clean.slice(9, 11)}`.replace(
    /[_-]+$/g,
    "",
  );
}

export default function LeadForm({ pageName, material }: LeadFormProps) {
  const pathname = usePathname();
  const actionUrl = useMemo(() => "/api/lead", []);
  const fullPageUrl = useMemo(() => `https://amet-k.ru${pathname || "/"}`, [pathname]);
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<LeadFormValues>();

  return (
    <form
      id="form"
      action={actionUrl}
      method="POST"
      encType="multipart/form-data"
      className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
      noValidate
      onSubmit={async (event) => {
        const valid = await trigger();
        if (!valid) {
          event.preventDefault();
          return;
        }
        reachMetrikaGoal("lead_form");
      }}
    >
      <input type="hidden" name="page_title" value={pageName} />
      <input type="hidden" name="page_url" value={fullPageUrl} />
      <input type="hidden" name="material" value={material} />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-heading">Имя*</label>
          <input
            type="text"
            {...register("name", { required: "Укажите имя" })}
            className="min-h-[52px] w-full rounded-lg border-2 border-gray-200 px-3 focus:border-[#f97316] focus:outline-none"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-heading">Телефон*</label>
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            {...register("phone", {
              required: "Укажите телефон",
              validate: (value) =>
                value.replace(/\D/g, "").length === 11 || "Введите корректный телефон",
            })}
            onChange={(event) => {
              const formatted = formatPhone(event.target.value);
              setValue("phone", formatted, { shouldValidate: true });
            }}
            className="min-h-[52px] w-full rounded-lg border-2 border-gray-200 px-3 focus:border-[#f97316] focus:outline-none"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-heading">Email*</label>
          <input
            type="email"
            {...register("email", { required: "Укажите email" })}
            className="min-h-[52px] w-full rounded-lg border-2 border-gray-200 px-3 focus:border-[#f97316] focus:outline-none"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-heading">Компания</label>
          <input
            type="text"
            {...register("company")}
            className="min-h-[52px] w-full rounded-lg border-2 border-gray-200 px-3 focus:border-[#f97316] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-heading">
          Файл (DXF/DWG/PDF/STEP до 50 МБ)
        </label>
        <input
          type="file"
          name="file"
          accept=".dxf,.dwg,.pdf,.step,.stp"
          className="w-full rounded-lg border-2 border-dashed border-gray-200 px-3 py-3 text-sm file:mr-3 file:rounded file:border-0 file:bg-[#f97316] file:px-3 file:py-2 file:text-white"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-heading">Комментарий</label>
        <textarea
          rows={4}
          {...register("comment")}
          className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-[#f97316] focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register("is_subcontract")} />
          Нужен субподряд
        </label>
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" {...register("consent", { required: true })} />
          <span>
            Согласен с{" "}
            <Link href="/politika/" className="underline text-[#f97316]">
              /politika/
            </Link>
            *
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600">Необходимо согласие на обработку данных.</p>}
      </div>

      <button
        type="submit"
        className="min-h-[52px] w-full rounded-lg bg-[#f97316] px-6 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a]"
      >
        Отправить и получить расчёт
      </button>
    </form>
  );
}
