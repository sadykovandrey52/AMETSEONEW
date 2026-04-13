export type PriceRow = {
  thickness: string;
  m10: number;
  m50: number;
  m100: number;
  m500: number;
  m1000: number;
  m5000: number;
  piercing: number;
};

export type PriceMaterialKey =
  | "steel"
  | "stainless"
  | "stainlessNitrogen"
  | "aluminum"
  | "duralumin"
  | "brass"
  | "copper";

export type MaterialKey = PriceMaterialKey;

export const priceFootnote =
  "Цены рассчитаны при коэф. ×1,2. Точная стоимость — после анализа DXF-файла. Загрузите чертёж → пришлём КП за 2 часа.";

export const materialLabels: Record<PriceMaterialKey, string> = {
  steel: "Чёрная сталь",
  stainless: "Нержавейка без азота",
  stainlessNitrogen: "Нержавейка с азотом",
  aluminum: "Алюминий",
  duralumin: "Дюралюминий",
  brass: "Латунь",
  copper: "Медь",
};

export const priceData: Record<PriceMaterialKey, PriceRow[]> = {
  steel: [
    { thickness: "0.5", m10: 54, m50: 43, m100: 39, m500: 30, m1000: 28, m5000: 22, piercing: 0.9 },
    { thickness: "1.0", m10: 60, m50: 48, m100: 43, m500: 34, m1000: 31, m5000: 24, piercing: 1.0 },
    { thickness: "1.5", m10: 69, m50: 54, m100: 49, m500: 39, m1000: 35, m5000: 28, piercing: 1.1 },
    { thickness: "2.0", m10: 79, m50: 62, m100: 56, m500: 45, m1000: 40, m5000: 32, piercing: 1.2 },
    { thickness: "3.0", m10: 103, m50: 81, m100: 73, m500: 58, m1000: 52, m5000: 41, piercing: 1.6 },
    { thickness: "4.0", m10: 131, m50: 104, m100: 94, m500: 74, m1000: 67, m5000: 53, piercing: 2.1 },
    { thickness: "5.0", m10: 163, m50: 129, m100: 116, m500: 92, m1000: 83, m5000: 66, piercing: 2.6 },
    { thickness: "6.0", m10: 199, m50: 157, m100: 142, m500: 112, m1000: 101, m5000: 80, piercing: 3.1 },
    { thickness: "8.0", m10: 278, m50: 220, m100: 199, m500: 157, m1000: 142, m5000: 112, piercing: 4.4 },
    { thickness: "10", m10: 369, m50: 292, m100: 264, m500: 208, m1000: 188, m5000: 149, piercing: 5.8 },
    { thickness: "12", m10: 469, m50: 371, m100: 335, m500: 265, m1000: 239, m5000: 189, piercing: 7.4 },
    { thickness: "14", m10: 578, m50: 457, m100: 413, m500: 327, m1000: 295, m5000: 233, piercing: 9.1 },
    { thickness: "16", m10: 696, m50: 550, m100: 497, m500: 393, m1000: 355, m5000: 280, piercing: 11.0 },
    { thickness: "18", m10: 820, m50: 648, m100: 586, m500: 463, m1000: 418, m5000: 331, piercing: 13.0 },
    { thickness: "20", m10: 952, m50: 752, m100: 680, m500: 537, m1000: 486, m5000: 384, piercing: 15.0 },
    { thickness: "22", m10: 1091, m50: 862, m100: 779, m500: 616, m1000: 556, m5000: 440, piercing: 17.2 },
    { thickness: "25", m10: 1310, m50: 1036, m100: 936, m500: 740, m1000: 669, m5000: 528, piercing: 20.7 },
    { thickness: "30", m10: 1707, m50: 1349, m100: 1219, m500: 964, m1000: 871, m5000: 688, piercing: 27.0 },
    { thickness: "35", m10: 2138, m50: 1690, m100: 1527, m500: 1207, m1000: 1091, m5000: 862, piercing: 33.8 },
    { thickness: "40", m10: 2600, m50: 2055, m100: 1857, m500: 1468, m1000: 1327, m5000: 1049, piercing: 41.1 },
    { thickness: "45", m10: 3093, m50: 2445, m100: 2209, m500: 1746, m1000: 1578, m5000: 1247, piercing: 48.9 },
  ],
  stainless: [
    { thickness: "0.5", m10: 59, m50: 47, m100: 42, m500: 33, m1000: 30, m5000: 24, piercing: 0.9 },
    { thickness: "1.0", m10: 75, m50: 59, m100: 53, m500: 42, m1000: 38, m5000: 30, piercing: 1.2 },
    { thickness: "1.5", m10: 95, m50: 75, m100: 68, m500: 54, m1000: 49, m5000: 38, piercing: 1.5 },
    { thickness: "2.0", m10: 119, m50: 94, m100: 85, m500: 67, m1000: 61, m5000: 48, piercing: 1.9 },
    { thickness: "3.0", m10: 177, m50: 140, m100: 126, m500: 100, m1000: 90, m5000: 71, piercing: 2.8 },
    { thickness: "4.0", m10: 245, m50: 194, m100: 175, m500: 138, m1000: 125, m5000: 99, piercing: 3.9 },
    { thickness: "5.0", m10: 323, m50: 255, m100: 230, m500: 182, m1000: 165, m5000: 130, piercing: 5.1 },
    { thickness: "6.0", m10: 408, m50: 323, m100: 292, m500: 230, m1000: 208, m5000: 165, piercing: 6.5 },
    { thickness: "8.0", m10: 601, m50: 475, m100: 429, m500: 339, m1000: 307, m5000: 242, piercing: 9.5 },
    { thickness: "10", m10: 820, m50: 648, m100: 586, m500: 463, m1000: 418, m5000: 331, piercing: 13.0 },
    { thickness: "12", m10: 1062, m50: 840, m100: 759, m500: 600, m1000: 542, m5000: 428, piercing: 16.8 },
    { thickness: "16", m10: 1608, m50: 1271, m100: 1149, m500: 908, m1000: 821, m5000: 649, piercing: 25.4 },
    { thickness: "20", m10: 2228, m50: 1761, m100: 1591, m500: 1258, m1000: 1137, m5000: 898, piercing: 35.2 },
    { thickness: "25", m10: 3093, m50: 2445, m100: 2209, m500: 1746, m1000: 1578, m5000: 1247, piercing: 48.9 },
    { thickness: "30", m10: 4050, m50: 3201, m100: 2893, m500: 2287, m1000: 2066, m5000: 1633, piercing: 64.0 },
    { thickness: "40", m10: 6209, m50: 4907, m100: 4435, m500: 3505, m1000: 3168, m5000: 2504, piercing: 98.1 },
    { thickness: "45", m10: 7399, m50: 5848, m100: 5285, m500: 4177, m1000: 3775, m5000: 2984, piercing: 117.0 },
  ],
  stainlessNitrogen: [
    { thickness: "0.5", m10: 89, m50: 70, m100: 63, m500: 50, m1000: 45, m5000: 36, piercing: 1.4 },
    { thickness: "1.0", m10: 112, m50: 89, m100: 80, m500: 63, m1000: 57, m5000: 45, piercing: 1.8 },
    { thickness: "1.5", m10: 143, m50: 113, m100: 102, m500: 81, m1000: 73, m5000: 58, piercing: 2.3 },
    { thickness: "2.0", m10: 179, m50: 141, m100: 128, m500: 101, m1000: 91, m5000: 72, piercing: 2.8 },
    { thickness: "3.0", m10: 265, m50: 210, m100: 190, m500: 150, m1000: 135, m5000: 107, piercing: 4.2 },
    { thickness: "4.0", m10: 368, m50: 291, m100: 263, m500: 208, m1000: 188, m5000: 148, piercing: 5.8 },
    { thickness: "5.0", m10: 484, m50: 382, m100: 346, m500: 273, m1000: 247, m5000: 195, piercing: 7.6 },
    { thickness: "6.0", m10: 612, m50: 484, m100: 437, m500: 346, m1000: 312, m5000: 247, piercing: 9.7 },
    { thickness: "8.0", m10: 902, m50: 713, m100: 644, m500: 509, m1000: 460, m5000: 364, piercing: 14.3 },
    { thickness: "10", m10: 1230, m50: 972, m100: 879, m500: 695, m1000: 628, m5000: 496, piercing: 19.4 },
    { thickness: "12", m10: 1593, m50: 1260, m100: 1138, m500: 900, m1000: 813, m5000: 643, piercing: 25.2 },
    { thickness: "16", m10: 2413, m50: 1907, m100: 1723, m500: 1362, m1000: 1231, m5000: 973, piercing: 38.1 },
    { thickness: "20", m10: 3342, m50: 2641, m100: 2387, m500: 1887, m1000: 1705, m5000: 1348, piercing: 52.8 },
    { thickness: "25", m10: 4640, m50: 3667, m100: 3314, m500: 2620, m1000: 2367, m5000: 1871, piercing: 73.3 },
    { thickness: "30", m10: 6075, m50: 4802, m100: 4340, m500: 3430, m1000: 3100, m5000: 2450, piercing: 96.0 },
  ],
  aluminum: [
    { thickness: "1.0", m10: 112, m50: 89, m100: 80, m500: 63, m1000: 57, m5000: 45, piercing: 1.8 },
    { thickness: "2.0", m10: 179, m50: 141, m100: 128, m500: 101, m1000: 91, m5000: 72, piercing: 2.8 },
    { thickness: "3.0", m10: 265, m50: 210, m100: 190, m500: 150, m1000: 135, m5000: 107, piercing: 4.2 },
    { thickness: "4.0", m10: 368, m50: 291, m100: 263, m500: 208, m1000: 188, m5000: 148, piercing: 5.8 },
    { thickness: "5.0", m10: 484, m50: 382, m100: 346, m500: 273, m1000: 247, m5000: 195, piercing: 7.6 },
    { thickness: "6.0", m10: 612, m50: 484, m100: 437, m500: 346, m1000: 312, m5000: 247, piercing: 9.7 },
    { thickness: "8.0", m10: 902, m50: 713, m100: 644, m500: 509, m1000: 460, m5000: 364, piercing: 14.3 },
    { thickness: "10", m10: 1230, m50: 972, m100: 879, m500: 695, m1000: 628, m5000: 496, piercing: 19.4 },
    { thickness: "12", m10: 1593, m50: 1260, m100: 1138, m500: 900, m1000: 813, m5000: 643, piercing: 25.2 },
  ],
  duralumin: [
    { thickness: "1.0", m10: 79, m50: 62, m100: 56, m500: 45, m1000: 40, m5000: 32, piercing: 1.2 },
    { thickness: "2.0", m10: 131, m50: 104, m100: 94, m500: 74, m1000: 67, m5000: 53, piercing: 2.1 },
    { thickness: "3.0", m10: 199, m50: 157, m100: 142, m500: 112, m1000: 101, m5000: 80, piercing: 3.1 },
    { thickness: "4.0", m10: 278, m50: 220, m100: 199, m500: 157, m1000: 142, m5000: 112, piercing: 4.4 },
    { thickness: "5.0", m10: 369, m50: 292, m100: 264, m500: 208, m1000: 188, m5000: 149, piercing: 5.8 },
    { thickness: "6.0", m10: 469, m50: 371, m100: 335, m500: 265, m1000: 239, m5000: 189, piercing: 7.4 },
    { thickness: "8.0", m10: 696, m50: 550, m100: 497, m500: 393, m1000: 355, m5000: 280, piercing: 11.0 },
    { thickness: "10", m10: 952, m50: 752, m100: 680, m500: 537, m1000: 486, m5000: 384, piercing: 15.0 },
    { thickness: "12", m10: 1236, m50: 977, m100: 883, m500: 698, m1000: 630, m5000: 498, piercing: 19.5 },
    { thickness: "16", m10: 1875, m50: 1482, m100: 1339, m500: 1059, m1000: 957, m5000: 756, piercing: 29.6 },
    { thickness: "20", m10: 2600, m50: 2055, m100: 1857, m500: 1468, m1000: 1327, m5000: 1049, piercing: 41.1 },
    { thickness: "25", m10: 3614, m50: 2857, m100: 2582, m500: 2041, m1000: 1844, m5000: 1458, piercing: 57.1 },
    { thickness: "30", m10: 4735, m50: 3743, m100: 3382, m500: 2673, m1000: 2416, m5000: 1910, piercing: 74.9 },
  ],
  brass: [
    { thickness: "0.5", m10: 131, m50: 104, m100: 94, m500: 74, m1000: 67, m5000: 53, piercing: 2.1 },
    { thickness: "1.0", m10: 199, m50: 157, m100: 142, m500: 112, m1000: 101, m5000: 80, piercing: 3.1 },
    { thickness: "1.5", m10: 278, m50: 220, m100: 199, m500: 157, m1000: 142, m5000: 112, piercing: 4.4 },
    { thickness: "2.0", m10: 369, m50: 292, m100: 264, m500: 208, m1000: 188, m5000: 149, piercing: 5.8 },
    { thickness: "3.0", m10: 578, m50: 457, m100: 413, m500: 327, m1000: 295, m5000: 233, piercing: 9.1 },
    { thickness: "4.0", m10: 820, m50: 648, m100: 586, m500: 463, m1000: 418, m5000: 331, piercing: 13.0 },
    { thickness: "5.0", m10: 1091, m50: 862, m100: 779, m500: 616, m1000: 556, m5000: 440, piercing: 17.2 },
    { thickness: "6.0", m10: 1310, m50: 1036, m100: 936, m500: 740, m1000: 669, m5000: 528, piercing: 20.7 },
  ],
  copper: [
    { thickness: "0.5", m10: 163, m50: 129, m100: 116, m500: 92, m1000: 83, m5000: 66, piercing: 2.6 },
    { thickness: "1.0", m10: 278, m50: 220, m100: 199, m500: 157, m1000: 142, m5000: 112, piercing: 4.4 },
    { thickness: "1.5", m10: 369, m50: 292, m100: 264, m500: 208, m1000: 188, m5000: 149, piercing: 5.8 },
    { thickness: "2.0", m10: 469, m50: 371, m100: 335, m500: 265, m1000: 239, m5000: 189, piercing: 7.4 },
    { thickness: "3.0", m10: 696, m50: 550, m100: 497, m500: 393, m1000: 355, m5000: 280, piercing: 11.0 },
    { thickness: "4.0", m10: 952, m50: 752, m100: 680, m500: 537, m1000: 486, m5000: 384, piercing: 15.0 },
    { thickness: "5.0", m10: 1236, m50: 977, m100: 883, m500: 698, m1000: 630, m5000: 498, piercing: 19.5 },
    { thickness: "6.0", m10: 1544, m50: 1220, m100: 1103, m500: 872, m1000: 788, m5000: 623, piercing: 24.4 },
  ],
};

export function getMaterialMinPrice(material: PriceMaterialKey): number {
  return Math.min(...priceData[material].map((row) => row.m100));
}

export function getPriceForLengthByThickness(
  material: PriceMaterialKey,
  thickness: number | string,
  length: "10" | "50" | "100" | "500" | "1000" | "5000" = "100",
): number | null {
  const row = priceData[material].find((item) => item.thickness === String(thickness));
  if (!row) {
    return null;
  }

  switch (length) {
    case "10":
      return row.m10;
    case "50":
      return row.m50;
    case "100":
      return row.m100;
    case "500":
      return row.m500;
    case "1000":
      return row.m1000;
    case "5000":
      return row.m5000;
    default:
      return row.m100;
  }
}

export function getPriceByThickness(
  material: PriceMaterialKey,
  thickness: number | string,
): number | null {
  return getPriceForLengthByThickness(material, thickness, "100");
}
