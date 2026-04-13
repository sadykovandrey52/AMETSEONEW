"use client";

import { company } from "@/data/company";
import { reachMetrikaGoal } from "@/lib/metrika";

export default function ContactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <a
        href={company.phoneHref}
        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        onClick={() => reachMetrikaGoal("lead_phone")}
      >
        <p className="text-2xl text-[#f97316]">📞</p>
        <p className="mt-2 text-lg font-bold text-heading">{company.phone}</p>
      </a>
      <a
        href={company.telegramUrl}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        onClick={() => reachMetrikaGoal("lead_telegram")}
      >
        <p className="text-2xl text-[#f97316]">✈</p>
        <p className="mt-2 text-lg font-bold text-heading">{company.telegram}</p>
      </a>
      <a
        href={company.emailHref}
        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        onClick={() => reachMetrikaGoal("lead_email")}
      >
        <p className="text-2xl text-[#f97316]">✉</p>
        <p className="mt-2 text-lg font-bold text-heading">{company.email}</p>
      </a>
    </div>
  );
}
