import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import {
  isSiteLocale,
  openGraphLocale,
  siteConfig,
  type SiteLocale,
} from "@/config/site";
import FractionalChroLanding from "@/components/landing/FractionalChroLanding";

const PATH = "/fractional-chro-zurich";

type Props = {
  params: Promise<{ locale: string }>;
};

const ZURICH_LOCALES: readonly SiteLocale[] = ["de", "en", "fr"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isSiteLocale(raw) || !ZURICH_LOCALES.includes(raw)) {
    return {};
  }
  const locale = raw;
  const t = await getTranslations({ locale, namespace: "FractionalChroZurichPage" });
  const canonical = `${siteConfig.siteUrl}/${locale}${PATH}`;

  const keywords =
    locale === "de"
      ? [
          "fractional chro schweiz",
          "fractional chro zürich",
          "fractional CHRO KMU",
          "HR Führung Zürich",
          "CHRO Beratung Schweiz",
        ]
      : locale === "fr"
        ? [
            "fractional chro suisse",
            "fractional chro zurich",
            "fractional CHRO PME",
            "direction RH Zurich",
            "conseil CHRO Suisse",
          ]
        : [
            "fractional chro zurich",
            "fractional chro switzerland",
            "fractional CHRO SME",
            "HR leadership Zurich",
            "CHRO advisory Switzerland",
          ];

  return {
    title: {
      absolute: t("meta.titleAbsolute"),
    },
    description: t("meta.description"),
    keywords,
    alternates: {
      canonical,
      languages: {
        [siteConfig.hreflang.de]: `${siteConfig.siteUrl}/de${PATH}`,
        en: `${siteConfig.siteUrl}/en${PATH}`,
        [siteConfig.hreflang.fr]: `${siteConfig.siteUrl}/fr${PATH}`,
        "x-default": `${siteConfig.siteUrl}/de${PATH}`,
      },
    },
    openGraph: {
      title: t("meta.titleAbsolute"),
      description: t("meta.description"),
      url: canonical,
      siteName: siteConfig.brand,
      locale: openGraphLocale(locale),
      type: "website",
    },
  };
}

export default async function FractionalChroZurichPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isSiteLocale(raw) || !ZURICH_LOCALES.includes(raw)) {
    notFound();
  }

  return (
    <FractionalChroLanding
      locale={raw}
      namespace="FractionalChroZurichPage"
      jsonLdId={`fractional-chro-zurich-faq-${raw}`}
    />
  );
}
