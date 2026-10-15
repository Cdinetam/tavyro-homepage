import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import ExterneHrLeitungKmuLanding, {
  EXTERNE_HR_PATHS,
} from "@/components/landing/ExterneHrLeitungKmuLanding";

const PATH = EXTERNE_HR_PATHS.en;
const DE_PATH = EXTERNE_HR_PATHS.de;
const CANONICAL = `${siteConfig.siteUrl}/en${PATH}`;
const DE_URL = `${siteConfig.siteUrl}/de${DE_PATH}`;

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
    namespace: "ExternalHrLeadershipSmePage",
  });

  const title = t("meta.titleAbsolute");
  const description = t("meta.description");

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "external HR leadership SME",
      "external HR leadership Zurich",
      "external head of HR",
      "HR leadership on a mandate basis",
      "strategic HR support",
      "Fractional CHRO Zurich",
      "HR sparring CEO",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: CANONICAL,
      languages: {
        "de-CH": DE_URL,
        en: CANONICAL,
        "x-default": DE_URL,
      },
    },
    openGraph: {
      title,
      description,
      url: CANONICAL,
      siteName: siteConfig.brand,
      locale: "en_CH",
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

export default async function ExternalHrLeadershipSmePage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") {
    redirect(`/de${DE_PATH}`);
  }

  return (
    <ExterneHrLeitungKmuLanding
      locale="en"
      namespace="ExternalHrLeadershipSmePage"
      path={PATH}
      alternateHref={`/de${DE_PATH}`}
      jsonLdIdPrefix="external-hr-leadership-sme"
      fractionalChroHref="/fractional-chro-switzerland"
    />
  );
}
