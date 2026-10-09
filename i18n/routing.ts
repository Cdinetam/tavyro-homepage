import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const routing = defineRouting({
  locales: [...siteConfig.locales],
  defaultLocale: "de",
  localePrefix: "always",
  // Always resolve locale from the URL only — ignore Accept-Language and cookies.
  localeDetection: false,
  localeCookie: false,
  // Alternate/hreflang links are provided via the Metadata API (lib/seo.ts)
  // so x-default can point to /de instead of the unprefixed root.
  alternateLinks: false,
});
