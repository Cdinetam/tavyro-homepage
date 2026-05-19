import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { isSiteLocale, siteConfig } from "@/config/site";
import { getCanonical, getLanguageAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({
    locale: safeLocale,
    namespace: "ExecutiveIntelligencePage",
  });
  const path = "/executive-intelligence";

  return {
    title: {
      absolute: t("meta.titleAbsolute"),
    },
    description: t("meta.description"),
    alternates: {
      canonical: getCanonical(safeLocale, path),
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: t("meta.titleAbsolute"),
      description: t("meta.description"),
      url: `${siteConfig.siteUrl}/${safeLocale}${path}`,
      siteName: siteConfig.brand,
      locale: safeLocale === "de" ? "de_CH" : "en_US",
      type: "website",
    },
  };
}

export default async function ExecutiveIntelligencePage({ params }: Props) {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";

  redirect(
    safeLocale === "en"
      ? "/en/tavyro-executive-intelligence.html"
      : "/tavyro-executive-intelligence.html"
  );
}
