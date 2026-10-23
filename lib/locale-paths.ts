import type { SiteLocale } from "@/config/site";
import { siteConfig } from "@/config/site";

/** Path after locale prefix, e.g. "" or "/erstgespraech-buchen". */
export function pathSuffix(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized === "/" ? "" : normalized;
}

/**
 * Slugs that intentionally differ per locale (locale-specific landing pages).
 * Ensures the language switch never points to a non-existent route.
 */
export const CROSS_LOCALE_PATHS: Record<
  string,
  Record<SiteLocale, string>
> = {
  "/fractional-chro-schweiz": {
    de: "/fractional-chro-schweiz",
    en: "/fractional-chro-switzerland",
    fr: "/fractional-chro-suisse",
  },
  "/fractional-chro-switzerland": {
    de: "/fractional-chro-schweiz",
    en: "/fractional-chro-switzerland",
    fr: "/fractional-chro-suisse",
  },
  "/fractional-chro-suisse": {
    de: "/fractional-chro-schweiz",
    en: "/fractional-chro-switzerland",
    fr: "/fractional-chro-suisse",
  },
  "/externe-hr-leitung-kmu": {
    de: "/externe-hr-leitung-kmu",
    en: "/external-hr-leadership-sme",
    fr: "/direction-rh-externe-pme",
  },
  "/external-hr-leadership-sme": {
    de: "/externe-hr-leitung-kmu",
    en: "/external-hr-leadership-sme",
    fr: "/direction-rh-externe-pme",
  },
  "/direction-rh-externe-pme": {
    de: "/externe-hr-leitung-kmu",
    en: "/external-hr-leadership-sme",
    fr: "/direction-rh-externe-pme",
  },
};

export function localeHref(locale: SiteLocale, pathname: string): string {
  const suffix = pathSuffix(pathname);
  const target = CROSS_LOCALE_PATHS[suffix]?.[locale] ?? suffix;
  return `/${locale}${target}`;
}

export function localeHrefsForPath(
  pathname: string
): Record<SiteLocale, string> {
  return Object.fromEntries(
    siteConfig.locales.map((locale) => [locale, localeHref(locale, pathname)])
  ) as Record<SiteLocale, string>;
}

export const LOCALE_SWITCH_LABELS: Record<
  SiteLocale,
  { code: string; ariaLabel: string; hrefLang: string; lang: string }
> = {
  de: { code: "DE", ariaLabel: "Deutsch", hrefLang: "de-CH", lang: "de" },
  en: { code: "EN", ariaLabel: "English", hrefLang: "en", lang: "en" },
  fr: { code: "FR", ariaLabel: "Français", hrefLang: "fr-CH", lang: "fr" },
};
