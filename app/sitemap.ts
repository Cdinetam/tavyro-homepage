import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const ROUTE_PATHS = ["", "datenschutz", "impressum", "erstgespraech-buchen"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedRoutes = siteConfig.locales.flatMap((locale) =>
    ROUTE_PATHS.map((path) => ({
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
