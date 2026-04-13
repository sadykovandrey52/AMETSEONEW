import type { Metadata } from "next";
import Image from "next/image";

import ContactCards from "@/components/ContactCards";
import FaqSection from "@/components/FaqSection";
import Gallery from "@/components/Gallery";
import LeadForm from "@/components/LeadForm";
import PriceDownloadModal from "@/components/PriceDownloadModal";
import PriceTable from "@/components/PriceTable";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";
import { buildSeoText } from "@/lib/seoText";

export const metadata: Metadata = {
  title: "Металлообработка в Москве на заказ — ООО АМЕТ",
  description:
    "Лазерная резка, гибка, сварка, покраска. Закладные, кронштейны, корпуса. Субподряд. Расчёт за 2 ч. ☎ 903 523-90-25",
};

export default function Home() {
  const seo = buildSeoText({
    serviceName: "Металлообработка на заказ",
    materialName: "листовой металл",
  });

  return (
    <>
      <SchemaOrg
        pageUrl="https://amet-k.ru/"
        pageTitle="Металлообработка в Москве на заказ — ООО АМЕТ"
        serviceName="Металлообработка на заказ"
        breadcrumbs={[
          { name: "Главная", item: "https://amet-k.ru/" },
          { name: "Металлообработка", item: "https://amet-k.ru/" },
        ]}
        faq={[
          {
            question: "Принимаете DXF и DWG?",
            answer:
              "Да, принимаем DXF, DWG, PDF и STEP. Загрузите файл через форму и пришлём расчёт за 2 часа.",
          },
          {
            question: "Работаете субподрядчиком?",
            answer:
              "Да, субподряд для строительных, монтажных и инжиниринговых компаний — приоритетное направление.",
          },
          {
            question: "Минимальный заказ?",
            answer: "Работаем от 1 детали по чертежам и КД.",
          },
          {
            question: "Доставка по Москве и МО?",
            answer: "Да, организуем отгрузку и доставку по Москве и Московской области.",
          },
          {
            question: "Можно заказать 1 деталь?",
            answer: "Да, выполняем единичные детали и пилотные партии.",
          },
          {
            question: "Сколько стоит сталь 3мм?",
            answer: "По тарифу 100 м для стали 3.0 мм: 73 руб/м.",
          },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="container-default grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="font-heading text-3xl font-extrabold text-heading md:text-5xl">
              Металлообработка на заказ в Москве
            </h1>
            <p className="text-lg text-slate-700">
              Fiber-лазер, допуск ±0,1 мм, от 1 детали, КП за 2 часа. Работаем с
              субподрядчиками, строителями, НИИ/НПО.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#form"
                className="min-h-[52px] rounded-lg bg-[#f97316] px-6 text-center text-base font-semibold leading-[52px] text-white transition-colors hover:bg-[#ea6c0a]"
              >
                Загрузить чертёж и получить расчёт
              </a>
              <PriceDownloadModal />
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-white px-3 py-2">✓ Fiber-станок</span>
              <span className="rounded-full bg-white px-3 py-2">✓ ±0,1 мм</span>
              <span className="rounded-full bg-white px-3 py-2">✓ от 1 дня</span>
              <span className="rounded-full bg-white px-3 py-2">✓ Москва/МО</span>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1565120130293-4f1de3a5f508?auto=format&fit=crop&w=1400&q=80&fm=webp"
              alt="Металлообработка на заказ в Москве — ООО АМЕТ"
              width={900}
              height={650}
              priority
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default space-y-6">
          <h2 className="text-2xl font-extrabold text-heading md:text-3xl">
            Цены на лазерную резку металла — от{" "}
            <span className="font-bold text-[#f97316]">39 руб/м</span>
          </h2>
          <PriceTable material="steel" />
          <a
            href="#form"
            className="inline-flex min-h-[52px] rounded-lg bg-[#f97316] px-6 text-base font-semibold leading-[52px] text-white transition-colors hover:bg-[#ea6c0a]"
          >
            Рассчитать точную стоимость
          </a>
        </div>
      </section>

      <section id="form" className="py-16 lg:py-24">
        <div className="container-default space-y-6">
          <h2 className="text-2xl font-extrabold text-heading md:text-3xl">
            Загрузите чертёж — пришлём расчёт за 2 часа
          </h2>
          <LeadForm pageName="Главная" material="steel" />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default space-y-6">
          <h2 className="text-2xl font-extrabold text-heading md:text-3xl">
            Альтернативные контакты
          </h2>
          <ContactCards />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-default">
          <Gallery productName="металлоизделие" materialName="сталь" />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default max-w-4xl">
          <article className="space-y-10 text-slate-700">
            <h2 className="text-2xl font-extrabold text-heading md:text-3xl">
              {seo.heading}
            </h2>
            {seo.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h3 className="text-xl font-bold text-heading">{section.title}</h3>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`} className="leading-8">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-default">
          <FaqSection material="steel" materialLabel="Сталь" thicknessForQuestion="3.0" />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default">
          <RelatedLinks
            links={[
              {
                title: "Лазерная резка металла",
                href: "/lazernaya-rezka-metalla/",
                description: "Прайс по материалам, формы DXF и сроки запуска партий.",
              },
              {
                title: "Закладные детали",
                href: "/zakladnye-detali/",
                description: "Изготовление закладных по КД для строительных объектов.",
              },
              {
                title: "Кронштейны",
                href: "/kronshteyny/",
                description: "Кронштейны для вентфасадов и инженерных систем, от 1 детали.",
              },
              {
                title: "Металлообработка для строителей",
                href: "/metalloobrabotka-dlya-stroiteley/",
                description: "Субподряд и партии по графику стройки с отгрузкой по Москве и МО.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
