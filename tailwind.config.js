/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07080a",
        surface: {
          darkest: "#0b0d11",
          dark: "#11141a",
          card: "#141720",
          border: "#1f2430",
          hover: "#1a1f2b",
        },
        brand: {
          emerald: "#10b981",
          neon: "#00f59b",
          cyan: "#00e5ff",
          violet: "#8b5cf6",
          anthropic: "#d97706",
          terracotta: "#cc785c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
