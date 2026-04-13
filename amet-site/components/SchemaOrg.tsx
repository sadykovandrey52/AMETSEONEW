type BreadcrumbItem = {
  name: string;
  item: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

type SchemaOrgProps = {
  pageUrl: string;
  pageTitle: string;
  serviceName: string;
  breadcrumbs: BreadcrumbItem[];
  faq: FaqItem[];
};

export default function SchemaOrg({
  pageUrl,
  pageTitle,
  serviceName,
  breadcrumbs,
  faq,
}: SchemaOrgProps) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://amet-k.ru/#organization",
    name: "ООО АМЕТ",
    telephone: "+7-903-523-90-25",
    email: "info@amet-k.ru",
    url: "https://amet-k.ru",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Радио, д.24, к.1, офис 606-10",
      addressLocality: "Москва",
      postalCode: "105005",
      addressCountry: "RU",
    },
    areaServed: ["Москва", "Московская область"],
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: ["https://t.me/sadykovandrey"],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: pageTitle,
    provider: { "@id": "https://amet-k.ru/#organization" },
    areaServed: ["Москва", "Московская область"],
    url: pageUrl,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
