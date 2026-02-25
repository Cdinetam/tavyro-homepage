export const siteConfig = {
  brand: "TaVyro",
  legalName: "TaVyro GmbH",
  siteUrl: "https://tavyro.ch",
  locales: ["de", "en"] as const,
  hreflang: {
    de: "de-CH",
    en: "en",
  } as const,
  description: {
    de: "Boutique Advisory in Zürich für CEOs, Geschäftsleitungen und Verwaltungsräte. Fractional CHRO, HR Governance, Organisation und KI im HR.",
    en: "Boutique advisory in Zurich for CEOs, executive teams, and boards. Fractional CHRO, HR governance, organization design, and AI in HR.",
  } as const,
  social: {
    linkedin: "https://www.linkedin.com/company/REPLACE_WITH_TAVYRO_LINKEDIN",
  },
  contact: {
    email: "hello@tavyro.ch",
    phone: "+41XXXXXXXXX",
  },
  address: {
    addressLocality: "Zürich",
    addressRegion: "ZH",
    addressCountry: "CH",
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];

export function isSiteLocale(value: string): value is SiteLocale {
  return (siteConfig.locales as readonly string[]).includes(value);
}
