import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      colors: {
        bg: "#f8f9fa",
        text: "#1f2937",
        heading: "#0f172a",
        brand: "#1a2c4e",
        accent: "#f97316",
        "accent-h": "#ea6c0a",
        border: "#e5e7eb",
        card: "#ffffff",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
