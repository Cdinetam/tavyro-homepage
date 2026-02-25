import { siteConfig, type SiteLocale } from "@/config/site";

function normalizePath(path?: string): string {
  if (!path) return "";
  const trimmed = path.trim();
  if (!trimmed) return "";
  return `/${trimmed.replace(/^\/+/, "")}`;
}

export function getCanonical(locale: SiteLocale, path?: string): string {
  return `${siteConfig.siteUrl}/${locale}${normalizePath(path)}`;
}

export function getLanguageAlternates(path?: string): Record<string, string> {
  const normalizedPath = normalizePath(path);

  const alternates = Object.fromEntries(
    siteConfig.locales.map((locale) => [
      siteConfig.hreflang[locale],
      `${siteConfig.siteUrl}/${locale}${normalizedPath}`,
    ])
  );

  return {
    ...alternates,
    "x-default": `${siteConfig.siteUrl}/de${normalizedPath}`,
  };
}
