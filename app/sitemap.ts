import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const LOCALE_ROUTE_PATHS: Record<(typeof siteConfig.locales)[number], string[]> = {
  de: [
    "",
    "datenschutz",
    "impressum",
    "erstgespraech-buchen",
    "faq",
    "fractional-chro-schweiz",
    "fractional-chro-zurich",
  ],
  en: [
    "",
    "datenschutz",
    "impressum",
    "erstgespraech-buchen",
    "faq",
    "fractional-chro-switzerland",
    "fractional-chro-zurich",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedRoutes = siteConfig.locales.flatMap((locale) =>
    LOCALE_ROUTE_PATHS[locale].map((path) => {
      const changeFrequency: "weekly" | "monthly" =
        path === "" ? "weekly" : "monthly";
      return {
        url: `${siteConfig.siteUrl}/${locale}${path ? `/${path}` : ""}`,
        lastModified: now,
        changeFrequency,
        priority: path === "" ? 1 : 0.7,
      };
    })
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
