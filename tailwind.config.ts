import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#16264a",
          50: "#f3f5fa",
          100: "#e4e9f3",
          200: "#c4cee2",
          300: "#94a6c9",
          400: "#5d76aa",
          500: "#3c548d",
          600: "#2c3f72",
          700: "#22315a",
          800: "#1a2747",
          900: "#16264a",
          950: "#0c162e",
        },
        gold: {
          DEFAULT: "#f5a623",
          50: "#fff8eb",
          100: "#feecc7",
          200: "#fdd88a",
          300: "#fcc04d",
          400: "#f5a623",
          500: "#ef8c0c",
          600: "#d36c07",
          700: "#af4d0a",
          800: "#8e3d0f",
          900: "#753310",
        },
        cream: "#faf9f6",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(22, 38, 74, 0.12)",
        "card-hover": "0 12px 40px -12px rgba(22, 38, 74, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
