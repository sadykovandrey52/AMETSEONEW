import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { servicePages, servicePagesBySlug } from "@/data/siteData";
import { getServiceMetadata, renderServicePage } from "@/lib/pageFactory";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!servicePagesBySlug[params.slug]) {
    return {};
  }
  return getServiceMetadata(params.slug);
}

export default function ServiceSlugPage({ params }: PageProps) {
  if (!servicePagesBySlug[params.slug]) {
    notFound();
  }

  return renderServicePage(params.slug);
}
