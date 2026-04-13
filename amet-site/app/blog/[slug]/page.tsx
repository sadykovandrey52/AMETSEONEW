import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts } from "@/data/siteData";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | Блог АМЕТ`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 lg:py-24">
      <div className="container-default max-w-4xl space-y-6">
        <p className="text-sm text-slate-500">{post.publishedAt}</p>
        <h1 className="font-heading text-3xl font-extrabold text-heading md:text-5xl">
          {post.title}
        </h1>
        <p className="text-lg text-slate-700">{post.excerpt}</p>
        <div className="space-y-4 text-slate-700">
          <p>
            Эта статья подготовлена командой ООО «АМЕТ» для заказчиков, которые
            работают по КД и хотят ускорить цикл от заявки до отгрузки.
          </p>
          <p>
            Для точного расчёта отправьте DXF/DWG/PDF/STEP через форму на сайте.
            Мы анализируем геометрию, количество врезаний и срок, после чего
            отправляем КП в течение 2 часов.
          </p>
          <p>
            Если проект срочный, продублируйте запрос по телефону
            {" "}
            <a className="font-semibold text-[#f97316]" href="tel:+79035239025">
              +7 (903) 523-90-25
            </a>
            {" "}
            или в Telegram @sadykovandrey.
          </p>
        </div>
      </div>
    </article>
  );
}
