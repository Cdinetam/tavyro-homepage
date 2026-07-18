/**
 * Tailwind config used to precompile the CSS for the static Trust Room pages
 * (public/tavyro-trust-room.html and public/en/tavyro-trust-room.html).
 *
 * These pages are served as standalone static HTML via
 * app/[locale]/trust-room/route.ts and are NOT part of the Next.js/Tailwind
 * build. To avoid the (dev-only) Tailwind CDN in production, the required
 * utility classes are compiled once into an inline <style> block.
 *
 * The theme below mirrors the palette that previously lived inline in the HTML.
 * Run scripts/build/build-trust-room-css.sh to (re)generate and re-embed the CSS.
 */
module.exports = {
  content: [
    "public/tavyro-trust-room.html",
    "public/en/tavyro-trust-room.html",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          900: "#0c2b33",
          800: "#16323f",
          700: "#1e4451",
          600: "#265464",
          500: "#3d7284",
          100: "#e1f0ec",
          50: "#f4f8f7",
        },
        coral: "#d85a30",
        ink: "#12262b",
        muted: "#5c6664",
        paper: "#fbfcfc",
        hline: "#dfe7e4",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "Menlo", "monospace"],
      },
    },
  },
};
