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
        primary: {
          50: "#f0fafd",
          100: "#e0f4fb",
          200: "#c1e9f7",
          300: "#a2def3",
          400: "#7ec1dd", // Logo-Türkis
          500: "#5aabcc",
          600: "#4a8fad",
          700: "#3a738a",
          800: "#2a5767",
          900: "#1a3b44",
        },
        secondary: {
          50: "#f4f6f3",
          100: "#e9ede7",
          200: "#d3dbcf",
          300: "#bdc9b7",
          400: "#8fa085",
          500: "#4e663f", // Logo-Dunkelgrün
          600: "#3f5233",
          700: "#2f3e27",
          800: "#202a1a",
          900: "#10150d",
        },
        accent: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#6c757d", // Logo-Grau
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#181b1e",
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
