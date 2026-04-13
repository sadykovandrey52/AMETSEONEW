import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-default max-w-2xl rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="font-heading text-3xl font-extrabold text-heading md:text-4xl">
          Страница не найдена
        </h1>
        <p className="mt-4 text-slate-700">
          Проверьте адрес или перейдите на главную страницу сайта.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-[52px] rounded-lg bg-[#f97316] px-6 text-base font-semibold leading-[52px] text-white transition-colors hover:bg-[#ea6c0a]"
        >
          На главную
        </Link>
      </div>
    </section>
  );
}
