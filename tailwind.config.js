/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0ea5e9", dark: "#0284c7", light: "#38bdf8" },
        accent: "#f59e0b",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.10)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.22)",
      },
    },
  },
};
