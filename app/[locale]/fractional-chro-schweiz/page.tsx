import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import FractionalChroLanding from "@/components/landing/FractionalChroLanding";

const PATH = "/fractional-chro-schweiz";
const CANONICAL = `${siteConfig.siteUrl}/de${PATH}`;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") {
    return {};
  }

  const t = await getTranslations({
    locale: "de",
    namespace: "FractionalChroSchweizPage",
  });

  return {
    title: {
      absolute: t("meta.titleAbsolute"),
    },
    description: t("meta.description"),
    keywords: [
      "fractional chro schweiz",
      "fractional CHRO KMU",
      "HR Führung Schweiz",
      "CHRO Beratung Schweiz",
      "strategische HR Führung",
    ],
    alternates: {
      canonical: CANONICAL,
      languages: {
        "de-CH": CANONICAL,
        en: `${siteConfig.siteUrl}/en/fractional-chro-switzerland`,
        "x-default": CANONICAL,
      },
    },
    openGraph: {
      title: t("meta.titleAbsolute"),
      description: t("meta.description"),
      url: CANONICAL,
      siteName: siteConfig.brand,
      locale: "de_CH",
      type: "website",
    },
  };
}

export default async function FractionalChroSchweizPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "de") {
    notFound();
  }

  return (
    <FractionalChroLanding
      locale="de"
      namespace="FractionalChroSchweizPage"
      jsonLdId="fractional-chro-schweiz-faq"
    />
  );
}
