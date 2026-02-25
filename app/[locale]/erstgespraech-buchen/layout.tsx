import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { isSiteLocale } from "@/config/site";
import { getCanonical, getLanguageAlternates } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({ locale: safeLocale, namespace: "Erstgespraech" });
  const site = await getTranslations({ locale: safeLocale, namespace: "Metadata" });

  return {
    title: t("pageTitle"),
    description: site("description"),
    alternates: {
      canonical: getCanonical(safeLocale, "erstgespraech-buchen"),
      languages: getLanguageAlternates("erstgespraech-buchen"),
    },
  };
}

export default function BookingLayout({ children }: Props) {
  return children;
}
