"use client";

import Link from "next/link";

import { company } from "@/data/company";
import { reachMetrikaGoal } from "@/lib/metrika";

const serviceLinks = [
  { href: "/lazernaya-rezka-metalla/", label: "Лазерная резка" },
  { href: "/gibka-metalla/", label: "Гибка металла" },
  { href: "/svarka-metalla/", label: "Сварка MIG/TIG" },
  { href: "/poroshkovaya-pokraska/", label: "Порошковая покраска" },
];

const productLinks = [
  { href: "/zakladnye-detali/", label: "Закладные детали" },
  { href: "/kronshteyny/", label: "Кронштейны" },
  { href: "/korpusa-kozhuhi-koroba/", label: "Корпуса/кожухи/короба" },
  { href: "/malye-metallokonstruktsii/", label: "Малые металлоконструкции" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="mt-20 bg-brand text-white">
      <div className="container-default py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">О компании</h3>
            <p className="mt-3 text-sm text-white/80">
              {company.name}
              <br />
              ИНН {company.inn}
              <br />
              ОГРН {company.ogrn}
            </p>
            <p className="mt-3 text-sm text-white/80">{company.okved}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Услуги</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Изделия</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Контакты</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href={company.phoneHref} onClick={() => reachMetrikaGoal("lead_phone")}>
                  📞 {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} onClick={() => reachMetrikaGoal("lead_email")}>
                  ✉ {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => reachMetrikaGoal("lead_telegram")}
                >
                  ✈ {company.telegram}
                </a>
              </li>
              <li>Офис: {company.officeAddress}</li>
              <li>Производство: {company.productionAddress}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-xs text-white/70">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
            <Link href="/politika/" className="underline underline-offset-4">
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
