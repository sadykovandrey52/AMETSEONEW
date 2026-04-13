import Image from "next/image";

import { company } from "@/data/company";
import {
  getMaterialMinPrice,
  getPriceByThickness,
  materialLabels,
  MaterialKey,
} from "@/data/priceData";
import { buildSeoText } from "@/lib/seoText";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCards from "@/components/ContactCards";
import FaqSection from "@/components/FaqSection";
import Gallery from "@/components/Gallery";
import LeadForm from "@/components/LeadForm";
import PriceDownloadModal from "@/components/PriceDownloadModal";
import PriceTable from "@/components/PriceTable";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaOrg from "@/components/SchemaOrg";

type LinkItem = { href: string; title: string; description: string };

export type ServicePageProps = {
  pageTitle: string;
  pageDescription: string;
  h1: string;
  slug: string;
  serviceName: string;
  material: MaterialKey;
  heroAlt: string;
  heroImage: string;
  relatedLinks: LinkItem[];
  breadcrumbSection: string;
  galleryProduct: string;
  faqThickness: string;
};

export default function ServicePage({
  pageTitle,
  pageDescription,
  h1,
  slug,
  serviceName,
  material,
  heroAlt,
  heroImage,
  relatedLinks,
  breadcrumbSection,
  galleryProduct,
  faqThickness,
}: ServicePageProps) {
  const basePrice = getMaterialMinPrice(material);
  const materialLabel = materialLabels[material];
  const faqPrice = getPriceByThickness(material, faqThickness);
  const pageUrl = `${company.site}/${slug}/`;
  const sectionUrl =
    breadcrumbSection === "Услуги"
      ? `${company.site}/lazernaya-rezka-metalla/`
      : breadcrumbSection === "Изделия"
        ? `${company.site}/zakladnye-detali/`
        : `${company.site}/metalloobrabotka-dlya-stroiteley/`;

  const faqItems = [
    {
      question: "Принимаете DXF и DWG?",
      answer:
        "Да, принимаем DXF, DWG, PDF и STEP. Для точного расчёта загрузите файл в форму на странице, КП отправим в течение 2 часов.",
    },
    {
      question: "Работаете субподрядчиком?",
      answer:
        "Да, субподрядные заказы для строителей, инжиниринговых компаний и НИИ/НПО в приоритете. Можно отмечать это в заявке.",
    },
    {
      question: "Минимальный заказ?",
      answer:
        "Работаем от 1 детали. Для серий и долгосрочных заказов фиксируем условия и график поставок.",
    },
    {
      question: "Доставка по Москве и МО?",
      answer:
        "Да, организуем отгрузку и доставку по Москве и Московской области. Условия обсуждаем при подтверждении заявки.",
    },
    {
      question: "Можно заказать 1 деталь?",
      answer:
        "Да, выполняем единичные детали по КД и чертежам. Для расчёта приложите DXF, DWG, PDF или STEP.",
    },
    {
      question: `Сколько стоит ${materialLabel.toLowerCase()} ${faqThickness}мм?`,
      answer: faqPrice
        ? `Для ${faqThickness} мм по тарифу 100 м: ${faqPrice} руб/м. Точную стоимость рассчитаем по DXF-файлу с учетом врезаний и объема.`
        : "Для точного расчета загрузите DXF/DWG/STEP, и мы подготовим КП в течение 2 часов.",
    },
  ];

  const seo = buildSeoText({
    serviceName,
    materialName: materialLabel.toLowerCase(),
  });

  return (
    <>
      <SchemaOrg
        pageUrl={pageUrl}
        pageTitle={pageTitle}
        serviceName={serviceName}
        breadcrumbs={[
          { name: "Главная", item: company.site },
          { name: breadcrumbSection, item: sectionUrl },
          { name: serviceName, item: pageUrl },
        ]}
        faq={faqItems}
      />

      <section className="py-16 lg:py-24">
        <div className="container-default">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Breadcrumbs
                items={[
                  { label: "Главная", href: "/" },
                  { label: breadcrumbSection },
                  { label: serviceName },
                ]}
              />
              <h1 className="text-3xl font-extrabold text-heading md:text-5xl">{h1}</h1>
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
                src={heroImage}
                alt={heroAlt}
                width={900}
                height={650}
                priority
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default space-y-6">
          <h2 className="text-2xl font-extrabold text-heading md:text-3xl">
            Цены на {serviceName.toLowerCase()} — от{" "}
            <span className="font-bold text-[#f97316]">{basePrice} руб/м</span>
          </h2>
          <PriceTable material={material} />
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
          <LeadForm pageName={pageTitle} material={material} />
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
          <Gallery
            productName={galleryProduct}
            materialName={materialLabel.toLowerCase()}
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default max-w-4xl">
          <article className="space-y-10 text-slate-700">
            <h2 className="text-2xl font-extrabold text-heading md:text-3xl">
              {seo.heading}
            </h2>
            <p className="leading-8">{pageDescription}</p>
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
          <FaqSection
            material={material}
            materialLabel={materialLabel}
            thicknessForQuestion={faqThickness}
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-default">
          <RelatedLinks links={relatedLinks} />
        </div>
      </section>
    </>
  );
}
