import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const LOCALE_ROUTE_PATHS: Record<(typeof siteConfig.locales)[number], string[]> = {
  de: ["", "datenschutz", "impressum", "erstgespraech-buchen", "faq", "fractional-chro-schweiz"],
  en: ["", "datenschutz", "impressum", "erstgespraech-buchen", "faq", "fractional-chro-switzerland"],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedRoutes = siteConfig.locales.flatMap((locale) =>
    LOCALE_ROUTE_PATHS[locale].map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path ? `/${path}` : ""}`,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    }))
  );

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localizedRoutes,
  ];
}
