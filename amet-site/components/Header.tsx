"use client";

import Link from "next/link";
import { useState } from "react";

import { company } from "@/data/company";
import { reachMetrikaGoal } from "@/lib/metrika";

const navGroups = [
  {
    title: "Услуги",
    items: [
      { href: "/lazernaya-rezka-metalla/", label: "Лазерная резка" },
      { href: "/gibka-metalla/", label: "Гибка" },
      { href: "/svarka-metalla/", label: "Сварка" },
      { href: "/poroshkovaya-pokraska/", label: "Порошковая покраска" },
    ],
  },
  {
    title: "Изделия",
    items: [
      { href: "/zakladnye-detali/", label: "Закладные детали" },
      { href: "/kronshteyny/", label: "Кронштейны" },
      { href: "/korpusa-kozhuhi-koroba/", label: "Корпуса и короба" },
      { href: "/plastiny-flantsy/", label: "Пластины и фланцы" },
    ],
  },
  {
    title: "Клиентам",
    items: [
      {
        href: "/metalloobrabotka-dlya-stroiteley/",
        label: "Строительным компаниям",
      },
      {
        href: "/metalloobrabotka-dlya-inzhiniringovih-kompaniy/",
        label: "Инжиниринговым компаниям",
      },
      { href: "/metalloobrabotka-dlya-nii-npo/", label: "НИИ и НПО" },
    ],
  },
];

function AmetLogo() {
  return (
    <svg
      width="118"
      height="28"
      viewBox="0 0 118 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.2 24 11.4 4h4.5l6.2 20h-3.9l-1.2-4H10.2L9 24H5.2Zm5.8-7h5.2l-2.6-8.8L11 17Zm16.2 7V4h4.4l4.6 11.4L40.8 4h4.4v20h-3.5V10.1l-4.5 11h-2.3l-4.5-11V24h-3.2Zm23.4 0V4h13.9v3.3h-10v4.8h9.3v3.2h-9.3v5.4h10.2V24H50.6Zm22.4 0V7.4h-6V4h15.9v3.4h-6V24H73Z"
        fill="white"
      />
      <path
        d="M95.5 24V4H99v8.1h8.1V4h3.5v20h-3.5v-8.6H99V24h-3.5Z"
        fill="#f97316"
      />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 bg-brand text-white shadow-sm">
      <div className="container-default flex h-full items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Главная ООО АМЕТ">
          <AmetLogo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navGroups.map((group) => (
            <details key={group.title} className="relative group">
              <summary className="list-none cursor-pointer text-sm font-semibold">
                {group.title}▾
              </summary>
              <div className="absolute left-0 top-8 w-64 rounded-xl border border-gray-200 bg-white p-3 text-text shadow-lg">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          <Link href="/blog/" className="text-sm">
            Блог
          </Link>
          <a href="#contacts" className="text-sm">
            Контакты
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-[#f97316]"
            onClick={() => reachMetrikaGoal("lead_phone")}
          >
            📞 +7(903)523-90-25
          </a>
          <a
            href="#form"
            className="min-h-[52px] rounded-lg bg-[#f97316] px-6 text-base font-semibold leading-[52px] text-white transition-colors hover:bg-[#ea6c0a]"
          >
            Оставить заявку
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-[#f97316]"
            onClick={() => reachMetrikaGoal("lead_phone")}
          >
            📞
          </a>
          <button
            type="button"
            className="rounded-lg border border-white/20 p-2"
            aria-label="Открыть меню"
            onClick={() => setMobileOpen((value) => !value)}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand px-4 py-4 lg:hidden">
          <div className="space-y-2">
            {navGroups.map((group) => (
              <details key={group.title} className="rounded-lg border border-white/20 p-3">
                <summary className="cursor-pointer text-sm font-semibold">
                  {group.title}
                </summary>
                <div className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-2 py-1 text-sm text-white/90"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link href="/blog/" className="block rounded-md px-2 py-1 text-sm" onClick={() => setMobileOpen(false)}>
              Блог
            </Link>
            <a href="#form" className="block rounded-md px-2 py-1 text-sm" onClick={() => setMobileOpen(false)}>
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
