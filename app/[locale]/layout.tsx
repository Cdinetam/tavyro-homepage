import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#265464",
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://tavyro.ch"),
    title: {
      default: t("title"),
      template: `%s | TaVyro`,
    },
    description: t("description"),
    alternates: {
      canonical: `https://tavyro.ch/${locale}`,
      languages: {
        de: "https://tavyro.ch/de",
        en: "https://tavyro.ch/en",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://tavyro.ch/${locale}`,
      siteName: "TaVyro",
      locale: locale === "de" ? "de_CH" : "en_US",
      type: "website",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: t("ogTitle"),
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/og.jpg"],
    },
    manifest: "/site.webmanifest?v=20260201",
    icons: {
      icon: [
        { url: "/favicon.ico?v=20260201", sizes: "any" },
        {
          url: "/favicon-16x16.png?v=20260201",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/favicon-32x32.png?v=20260201",
          type: "image/png",
          sizes: "32x32",
        },
      ],
      apple: [
        {
          url: "/apple-touch-icon.png?v=20260201",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [{ rel: "manifest", url: "/site.webmanifest?v=20260201" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="light" style={{ colorScheme: "light" }}>
      <body className="antialiased bg-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
