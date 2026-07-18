import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { isSiteLocale } from "@/config/site";
import { getCanonical, getLanguageAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({
    locale: safeLocale,
    namespace: "TrustRoomPage",
  });
  const path = "/trust-room";

  return {
    title: {
      absolute: t("meta.titleAbsolute"),
    },
    description: t("meta.description"),
    alternates: {
      canonical: getCanonical(safeLocale, path),
      languages: getLanguageAlternates(path),
    },
  };
}

export default function TrustRoomLayout({ children }: Props) {
  return children;
}
