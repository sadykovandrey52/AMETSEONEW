import type { Metadata } from "next";
import Link from "next/link";

import { blogPosts } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Блог по металлообработке — ООО АМЕТ",
  description:
    "Практические материалы по подготовке DXF, выбору материалов и организации субподряда по металлообработке.",
};

export default function BlogPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-default space-y-8">
        <h1 className="font-heading text-3xl font-extrabold text-heading md:text-5xl">
          Блог ООО АМЕТ
        </h1>
        <p className="max-w-3xl text-lg text-slate-700">
          Публикуем практические материалы для инженеров, строителей и
          субподрядчиков: как подготовить чертежи, выбрать материал и сократить
          сроки запуска производства.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">{post.publishedAt}</p>
              <h2 className="mt-2 text-xl font-bold text-heading">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="mt-5 inline-flex text-sm font-semibold text-[#f97316]"
              >
                Читать статью →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
