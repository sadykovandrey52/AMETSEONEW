import { MaterialKey, getPriceByThickness } from "@/data/priceData";

type FaqSectionProps = {
  material: MaterialKey;
  materialLabel: string;
  thicknessForQuestion: string;
};

const baseFaq = [
  {
    q: "Принимаете DXF и DWG?",
    a: "Да, принимаем DXF, DWG, PDF и STEP. Оптимальный формат для расчета и запуска в работу — DXF.",
  },
  {
    q: "Работаете субподрядчиком?",
    a: "Да, субподрядные заказы для строителей, монтажных компаний, НИИ и инжиниринговых организаций — приоритетное направление.",
  },
  {
    q: "Минимальный заказ?",
    a: "Работаем от 1 детали. Стоимость рассчитываем после анализа чертежа и объема партии.",
  },
  {
    q: "Доставка по Москве и МО?",
    a: "Да, организуем отгрузку и доставку по Москве и Московской области, включая регулярные поставки по графику.",
  },
  {
    q: "Можно заказать 1 деталь?",
    a: "Да, можно заказать единичную деталь по вашему чертежу, в том числе для прототипирования и тестовой сборки.",
  },
];

export default function FaqSection({
  material,
  materialLabel,
  thicknessForQuestion,
}: FaqSectionProps) {
  const price = getPriceByThickness(material, thicknessForQuestion);

  const faq = [
    ...baseFaq,
    {
      q: `Сколько стоит ${materialLabel} ${thicknessForQuestion}мм?`,
      a: price
        ? `Для ${thicknessForQuestion} мм по тарифу 100 м: ${price} руб/м. Точную стоимость рассчитаем по DXF-файлу с учетом врезаний и объема.`
        : "Для точного расчета загрузите DXF/DWG/STEP, и мы подготовим КП в течение 2 часов.",
    },
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-extrabold text-[#0f172a] md:text-3xl">FAQ</h2>
      <div className="grid gap-4">
        {faq.map((item) => (
          <details key={item.q} className="rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-[#1f2937]">
              {item.q}
            </summary>
            <p className="mt-3 leading-relaxed text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
