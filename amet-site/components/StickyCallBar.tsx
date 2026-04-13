"use client";

import { company } from "@/data/company";
import { reachMetrikaGoal } from "@/lib/metrika";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-4">
        <a
          href={company.phoneHref}
          className="flex flex-col items-center justify-center py-3 text-xs font-semibold text-text"
          onClick={() => reachMetrikaGoal("lead_phone")}
        >
          <span className="text-base text-[#f97316]">📞</span>
          Позвонить
        </a>
        <a
          href={company.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-3 text-xs font-semibold text-text"
          onClick={() => reachMetrikaGoal("lead_telegram")}
        >
          <span className="text-base text-[#f97316]">✈</span>
          Telegram
        </a>
        <a
          href={company.emailHref}
          className="flex flex-col items-center justify-center py-3 text-xs font-semibold text-text"
          onClick={() => reachMetrikaGoal("lead_email")}
        >
          <span className="text-base text-[#f97316]">✉</span>
          Email
        </a>
        <a href="#form" className="flex flex-col items-center justify-center py-3 text-xs font-semibold text-text">
          <span className="text-base text-[#f97316]">📋</span>
          Заявка
        </a>
      </div>
    </div>
  );
}
