import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: "#fbbf24",
        neutral: "#1f2937",
        background: "#ffffff",
        darkbg: "#0f172a",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        heading: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
