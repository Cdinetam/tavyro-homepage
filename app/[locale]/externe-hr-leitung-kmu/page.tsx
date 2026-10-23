import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import ExterneHrLeitungKmuLanding, {
  EXTERNE_HR_PATHS,
} from "@/components/landing/ExterneHrLeitungKmuLanding";

const PATH = EXTERNE_HR_PATHS.de;
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
    namespace: "ExterneHrLeitungKmuPage",
  });

  const title = t("meta.titleAbsolute");
  const description = t("meta.description");

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "Externe HR-Leitung KMU",
      "externe HR-Leitung Zürich",
      "externe Personalleitung",
      "HR-Leitung auf Mandatsbasis",
      "strategische HR Unterstützung",
      "Fractional CHRO Zürich",
      "HR Sparring CEO",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: CANONICAL,
      languages: {
        "de-CH": CANONICAL,
        en: `${siteConfig.siteUrl}/en${EXTERNE_HR_PATHS.en}`,
        "fr-CH": `${siteConfig.siteUrl}/fr${EXTERNE_HR_PATHS.fr}`,
        "x-default": CANONICAL,
      },
    },
    openGraph: {
      title,
      description,
      url: CANONICAL,
      siteName: siteConfig.brand,
      locale: "de_CH",
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

export default async function ExterneHrLeitungKmuPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "de") {
    notFound();
  }

  return (
    <ExterneHrLeitungKmuLanding
      locale="de"
      namespace="ExterneHrLeitungKmuPage"
      path={PATH}
      localeHrefs={{
        de: `/de${EXTERNE_HR_PATHS.de}`,
        en: `/en${EXTERNE_HR_PATHS.en}`,
        fr: `/fr${EXTERNE_HR_PATHS.fr}`,
      }}
      jsonLdIdPrefix="externe-hr-leitung-kmu"
      fractionalChroHref="/fractional-chro-schweiz"
    />
  );
}
