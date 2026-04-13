import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, Manrope } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YandexMetrika from "@/components/YandexMetrika";

import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const StickyCallBar = dynamic(() => import("@/components/StickyCallBar"), {
  ssr: false,
});
const AiAssistant = dynamic(() => import("@/components/AiAssistant"), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amet-k.ru"),
  title: "Металлообработка в Москве на заказ — ООО АМЕТ",
  description:
    "Лазерная резка, гибка, сварка, покраска. Закладные, кронштейны, корпуса. Субподряд. Расчёт за 2 ч. ☎ 903 523-90-25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-bg pb-16 font-sans text-text antialiased lg:pb-0">
        <YandexMetrika />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
        <AiAssistant />
      </body>
    </html>
  );
}
