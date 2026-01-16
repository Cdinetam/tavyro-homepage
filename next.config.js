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

module.exports = nextConfig;
