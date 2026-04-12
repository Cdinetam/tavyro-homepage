import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import FractionalChroLanding from "@/components/landing/FractionalChroLanding";

const PATH = "/fractional-chro-switzerland";
const CANONICAL = `${siteConfig.siteUrl}/en${PATH}`;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") {
    return {};
  }

  const t = await getTranslations({
    locale: "en",
    namespace: "FractionalChroSwitzerlandPage",
  });

  return {
    title: {
      absolute: t("meta.titleAbsolute"),
    },
    description: t("meta.description"),
    keywords: [
      "fractional chro switzerland",
      "fractional chro zurich",
      "fractional CHRO SME",
      "HR leadership Switzerland",
      "CHRO advisory Switzerland",
    ],
    alternates: {
      canonical: CANONICAL,
      languages: {
        "de-CH": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
        en: CANONICAL,
        "x-default": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
      },
    },
    openGraph: {
      title: t("meta.titleAbsolute"),
      description: t("meta.description"),
      url: CANONICAL,
      siteName: siteConfig.brand,
      locale: "en_CH",
      type: "website",
    },
  };
}

export default async function FractionalChroSwitzerlandPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <FractionalChroLanding
      locale="en"
      namespace="FractionalChroSwitzerlandPage"
      jsonLdId="fractional-chro-switzerland-faq"
    />
  );
}
