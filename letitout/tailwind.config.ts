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
        deep: "rgb(9 45 56 / <alpha-value>)",
        dark: "rgb(22 71 84 / <alpha-value>)",
        bar: "rgb(37 107 122 / <alpha-value>)",
        ocean: "rgb(8 127 145 / <alpha-value>)",
        glass: "rgb(167 218 212 / <alpha-value>)",
        aqua: "rgb(184 217 216 / <alpha-value>)",
        pearl: "rgb(241 247 245 / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        soft: "1rem",
        pill: "9999px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(9, 45, 56, 0.35)",
        soft: "0 4px 24px rgba(9, 45, 56, 0.2)",
      },
      keyframes: {
        "light-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.45" },
          "50%": { transform: "translate(2%, -3%) scale(1.05)", opacity: "0.65" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "message-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "light-drift": "light-drift 18s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        "message-in": "message-in 0.35s ease-out both",
        "pulse-soft": "pulseSoft 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
