import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import ExterneHrLeitungKmuLanding from "@/components/landing/ExterneHrLeitungKmuLanding";

const PATH = "/externe-hr-leitung-kmu";
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
      // DE-only page: no invented EN hreflang
      languages: {
        "de-CH": CANONICAL,
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

  return <ExterneHrLeitungKmuLanding />;
}
