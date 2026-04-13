import type { Metadata } from "next";
import Link from "next/link";

import ThanksGoal from "@/components/ThanksGoal";

export const metadata: Metadata = {
  title: "Спасибо за заявку — ООО АМЕТ",
  description:
    "Заявка принята, менеджер ООО АМЕТ свяжется с вами в течение 2 часов.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="py-16 lg:py-24">
      <ThanksGoal />
      <div className="container-default max-w-3xl rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="font-heading text-3xl font-extrabold text-heading md:text-4xl">
          Спасибо! Заявка принята
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Мы свяжемся с вами в течение 2 часов для уточнения деталей и отправки
          коммерческого предложения.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[52px] rounded-lg bg-[#f97316] px-6 text-base font-semibold leading-[52px] text-white transition-colors hover:bg-[#ea6c0a]"
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
