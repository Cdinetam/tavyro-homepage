import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tavyro: {
          bg: "var(--tavyro-bg)",
          surface: "var(--tavyro-surface)",
          muted: "var(--tavyro-muted)",
          border: "var(--tavyro-border)",
          tint: "var(--tavyro-tint)",
          text: "var(--tavyro-text)",
          text2: "var(--tavyro-text-2)",
          brand: {
            50: "var(--tavyro-brand-50)",
            100: "var(--tavyro-brand-100)",
            200: "var(--tavyro-brand-200)",
            300: "var(--tavyro-brand-300)",
            400: "var(--tavyro-brand-400)",
            500: "var(--tavyro-brand-500)",
            600: "var(--tavyro-brand-600)",
            700: "var(--tavyro-brand-700)",
            800: "var(--tavyro-brand-800)",
            900: "var(--tavyro-brand-900)",
          },
          secondary: {
            50: "var(--tavyro-secondary-50)",
            100: "var(--tavyro-secondary-100)",
            200: "var(--tavyro-secondary-200)",
            300: "var(--tavyro-secondary-300)",
            400: "var(--tavyro-secondary-400)",
            500: "var(--tavyro-secondary-500)",
            600: "var(--tavyro-secondary-600)",
            700: "var(--tavyro-secondary-700)",
            800: "var(--tavyro-secondary-800)",
            900: "var(--tavyro-secondary-900)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
