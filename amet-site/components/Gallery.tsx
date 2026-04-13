"use client";

import Image from "next/image";

type GalleryProps = {
  productName: string;
  materialName: string;
};

const thicknesses = [2, 3, 4, 5, 6, 8, 10, 12];

export default function Gallery({ productName, materialName }: GalleryProps) {
  return (
    <div>
      <h2 className="mb-8 font-heading text-3xl font-extrabold text-heading">
        Фото изделий и резки
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {thicknesses.map((thickness, index) => (
          <div key={thickness} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <Image
              src={`https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80&ixid=${index + 11}`}
              alt={`${productName} из ${materialName} ${thickness}мм — ООО АМЕТ, Москва`}
              width={480}
              height={320}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
