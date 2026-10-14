import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07080A",
        surface: {
          darkest: "#0B0D11",
          dark: "#11141A",
          card: "#141720",
          border: "#1F2430",
          hover: "#1A1F2B",
        },
        brand: {
          emerald: "#10B981",
          neon: "#00F59B",
          cyan: "#00E5FF",
          violet: "#8B5CF6",
          anthropic: "#D97706", // Anthropic warmth
          terracotta: "#CC785C",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(0, 245, 155, 0.12) 0%, transparent 60%)",
        "radial-anthropic": "radial-gradient(circle at 80% 20%, rgba(204, 120, 92, 0.15) 0%, transparent 50%)",
        "radial-cyan": "radial-gradient(circle at 20% 40%, rgba(0, 229, 255, 0.08) 0%, transparent 50%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(0, 245, 155, 0.25)",
        "glow-md": "0 0 30px -5px rgba(0, 245, 155, 0.3)",
        "glow-cyan": "0 0 25px -3px rgba(0, 229, 255, 0.3)",
        "glow-anthropic": "0 0 25px -3px rgba(204, 120, 92, 0.25)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar": "radar 4s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
