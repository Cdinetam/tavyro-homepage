import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import FractionalChroLanding from "@/components/landing/FractionalChroLanding";

const PATH = "/fractional-chro-suisse";
const CANONICAL = `${siteConfig.siteUrl}/fr${PATH}`;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "fr") {
    return {};
  }

  const t = await getTranslations({
    locale: "fr",
    namespace: "FractionalChroSuissePage",
  });

  return {
    title: {
      absolute: t("meta.titleAbsolute"),
    },
    description: t("meta.description"),
    keywords: [
      "fractional chro suisse",
      "fractional CHRO PME",
      "direction RH Suisse",
      "conseil CHRO Suisse",
      "leadership RH stratégique",
    ],
    alternates: {
      canonical: CANONICAL,
      languages: {
        "de-CH": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
        en: `${siteConfig.siteUrl}/en/fractional-chro-switzerland`,
        "fr-CH": CANONICAL,
        "x-default": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
      },
    },
    openGraph: {
      title: t("meta.titleAbsolute"),
      description: t("meta.description"),
      url: CANONICAL,
      siteName: siteConfig.brand,
      locale: "fr_CH",
      type: "website",
    },
  };
}

export default async function FractionalChroSuissePage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "fr") {
    notFound();
  }

  return (
    <FractionalChroLanding
      locale="fr"
      namespace="FractionalChroSuissePage"
      jsonLdId="fractional-chro-suisse-faq"
      relatedHref="/direction-rh-externe-pme"
    />
  );
}
