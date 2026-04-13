import type { Metadata } from "next";

import ServicePage from "@/components/ServicePage";
import { type ServicePage as ServicePageData, servicePagesBySlug } from "@/data/siteData";
import { createMetadata } from "@/lib/meta";

function buildRelatedLinks(currentSlug: string) {
  return [
    {
      title: "Лазерная резка металла",
      href: "/lazernaya-rezka-metalla/",
      description: "Прайс по материалам, формы DXF и сроки запуска партий.",
    },
    {
      title: "Закладные детали",
      href: "/zakladnye-detali/",
      description: "Изготовление закладных по КД для строительных и фасадных проектов.",
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
  ].filter((item) => item.href !== `/${currentSlug}/`);
}

export function getServicePage(slug: string): ServicePageData {
  const page = servicePagesBySlug[slug];
  if (!page) {
    throw new Error(`Unknown page slug: ${slug}`);
  }
  return page;
}

export function getServiceMetadata(slug: string): Metadata {
  const page = getServicePage(slug);
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}/`,
  });
}

export function renderServicePage(slug: string) {
  const page = getServicePage(slug);

  return (
    <ServicePage
      pageTitle={page.title}
      pageDescription={page.description}
      h1={page.h1}
      slug={page.slug}
      serviceName={page.shortName}
      material={page.material}
      heroAlt={page.heroAlt}
      heroImage={page.heroImage}
      relatedLinks={buildRelatedLinks(page.slug)}
      breadcrumbSection={page.section}
      faqThickness={page.priceThicknessForFaq}
      galleryProduct={page.shortName}
    />
  );
}
