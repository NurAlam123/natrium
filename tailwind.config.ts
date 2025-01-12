import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "bebas-neue": ["var(--font-bebas-neue)"],
      },
      container: {
        center: true,
      },
      colors: {
        dark: "#0a0a0a",
        primary: "#fbfcf8",
        secondary: "#fbfcfa",
        daisy: "#fafafa",
        blue: "#6090e8",
        "dark-1": "rgba(255, 255, 255, 0.1)",
        "dark-2": "rgba(255, 255, 255, 0.2)",
        "dark-3": "rgba(255, 255, 255, 0.3)",
        "soft-white": "#dedede",
      },
      animation: {
        spin: "spin 2s linear infinite",
        "spin-3s": "spin 3s linear infinite",
        "spin-4s": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
