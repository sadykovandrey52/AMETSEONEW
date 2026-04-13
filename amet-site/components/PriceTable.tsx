import { MaterialKey, materialLabels, priceData } from "@/data/priceData";
import { priceFootnote } from "@/data/priceData";

type PriceTableProps = {
  material: MaterialKey;
  defaultLength?: "100";
};

export default function PriceTable({ material, defaultLength = "100" }: PriceTableProps) {
  const rows = priceData[material];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">Толщина, мм</th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">10м</th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">50м</th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">
                <span className={defaultLength === "100" ? "text-[#f97316]" : ""}>100м</span>
              </th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">500м</th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">1000м</th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">5000м</th>
              <th className="bg-[#1a2c4e] px-4 py-3 text-left text-white">Врезание</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${material}-${row.thickness}`} className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 py-3 font-semibold">{row.thickness}</td>
                <td className="px-4 py-3">{row.m10}</td>
                <td className="px-4 py-3">{row.m50}</td>
                <td className="px-4 py-3 font-semibold text-[#f97316]">{row.m100}</td>
                <td className="px-4 py-3">{row.m500}</td>
                <td className="px-4 py-3">{row.m1000}</td>
                <td className="px-4 py-3">{row.m5000}</td>
                <td className="px-4 py-3">{row.piercing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
        Материал: {materialLabels[material]}
      </div>
      <div className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600">
        {priceFootnote}
      </div>
    </div>
  );
}
