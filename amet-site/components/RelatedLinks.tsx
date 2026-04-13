import Link from "next/link";

type RelatedLink = {
  title: string;
  href: string;
  description: string;
};

type RelatedLinksProps = {
  links: RelatedLink[];
};

export default function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-heading">Смотрите также</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-bold text-heading">{link.title}</h3>
            <p className="text-sm text-text">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
