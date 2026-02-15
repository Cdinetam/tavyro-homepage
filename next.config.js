const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warnung: Dies erlaubt den Build trotz ESLint-Fehlern
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warnung: Dies erlaubt den Build trotz TypeScript-Fehlern
    ignoreBuildErrors: true,
  },
};

module.exports = withNextIntl(nextConfig);
