export const siteConfig = {
  brand: "TaVyro",
  legalName: "TaVyro GmbH",
  siteUrl: "https://tavyro.ch",
  locales: ["de", "en", "fr"] as const,
  hreflang: {
    de: "de-CH",
    en: "en",
    fr: "fr-CH",
  } as const,
  description: {
    de: "Boutique Advisory in Zürich für CEOs, Geschäftsleitungen und Verwaltungsräte. Fractional CHRO, HR Governance, Organisation und KI im HR.",
    en: "Boutique advisory in Zurich for CEOs, executive teams, and boards. Fractional CHRO Zurich, HR governance, organization design, and AI in HR.",
    fr: "Boutique advisory à Zurich pour CEOs, directions générales et conseils d’administration. Fractional CHRO, gouvernance RH, organisation et IA dans les RH.",
  } as const,
  social: {
    linkedin: "https://www.linkedin.com/company/REPLACE_WITH_TAVYRO_LINKEDIN",
  },
  founder: {
    linkedin: "https://www.linkedin.com/in/dung-tam-nguyen",
  },
  advisors: {
    ingridDohme: {
      linkedin: "https://www.linkedin.com/in/ingrid-dohme",
    },
  },
  contact: {
    email: "hello@tavyro.ch",
    phone: "+41XXXXXXXXX",
  },
  /** Related sites/pages for unobtrusive cross-linking (SSOT). */
  relatedSites: {
    fractionalChro: {
      de: "https://fractional-chro.ch/",
      en: "https://fractional-chro.ch/index-en.html",
      fr: "https://fractional-chro.ch/",
    },
    tamNguyen: {
      de: "https://tam-nguyen.ch/",
      en: "https://tam-nguyen.ch/en",
      fr: "https://tam-nguyen.ch/fr",
    },
    externeHrLeitung: {
      de: "/externe-hr-leitung-kmu#leistungen",
      en: "/external-hr-leadership-sme#leistungen",
      fr: "/direction-rh-externe-pme#leistungen",
    },
  },
  address: {
    addressLocality: {
      de: "Zürich",
      en: "Zurich",
      fr: "Zurich",
    },
    addressRegion: "ZH",
    addressCountry: "CH",
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];

export function isSiteLocale(value: string): value is SiteLocale {
  return (siteConfig.locales as readonly string[]).includes(value);
}

/** City/country labels for impressum-style blocks */
export function localityLabel(locale: SiteLocale): string {
  return siteConfig.address.addressLocality[locale];
}

export function countryLabel(locale: SiteLocale): string {
  if (locale === "de") return "Schweiz";
  if (locale === "fr") return "Suisse";
  return "Switzerland";
}

export function openGraphLocale(locale: SiteLocale): string {
  if (locale === "de") return "de_CH";
  if (locale === "fr") return "fr_CH";
  return "en_CH";
}
