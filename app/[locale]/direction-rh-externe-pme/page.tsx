import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import ExterneHrLeitungKmuLanding, {
  EXTERNE_HR_PATHS,
} from "@/components/landing/ExterneHrLeitungKmuLanding";

const PATH = EXTERNE_HR_PATHS.fr;
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
    namespace: "DirectionRhExternePmePage",
  });

  const title = t("meta.titleAbsolute");
  const description = t("meta.description");

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "Direction RH externe PME",
      "direction RH externe Zurich",
      "direction du personnel externe",
      "direction RH sur mandat",
      "soutien RH stratégique",
      "Fractional CHRO Zurich",
      "sparring RH CEO",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: CANONICAL,
      languages: {
        "de-CH": `${siteConfig.siteUrl}/de${EXTERNE_HR_PATHS.de}`,
        en: `${siteConfig.siteUrl}/en${EXTERNE_HR_PATHS.en}`,
        "fr-CH": CANONICAL,
        "x-default": `${siteConfig.siteUrl}/de${EXTERNE_HR_PATHS.de}`,
      },
    },
    openGraph: {
      title,
      description,
      url: CANONICAL,
      siteName: siteConfig.brand,
      locale: "fr_CH",
      type: "website",
      images: [
        {
          url: "/og-fractional-chro.jpg",
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-fractional-chro.jpg"],
    },
  };
}

export default async function DirectionRhExternePmePage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "fr") {
    notFound();
  }

  return (
    <ExterneHrLeitungKmuLanding
      locale="fr"
      namespace="DirectionRhExternePmePage"
      path={PATH}
      localeHrefs={{
        de: `/de${EXTERNE_HR_PATHS.de}`,
        en: `/en${EXTERNE_HR_PATHS.en}`,
        fr: `/fr${EXTERNE_HR_PATHS.fr}`,
      }}
      jsonLdIdPrefix="direction-rh-externe-pme"
      fractionalChroHref="/fractional-chro-suisse"
    />
  );
}
