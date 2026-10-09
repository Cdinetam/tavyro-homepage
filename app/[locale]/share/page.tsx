import type { Metadata } from "next";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { isSiteLocale, siteConfig } from "@/config/site";
import { getCanonical } from "@/lib/seo";

/**
 * Dedicated WhatsApp/social share landing.
 *
 * WhatsApp/Facebook cache previews by canonical identity (usually og:url).
 * Busting with /de?v=… fails because the HTML still emits og:url=/de, so the
 * old /de description stays cached even when the title refreshes.
 *
 * This path is a new URL with matching og:url → forced fresh scrape.
 * Social crawlers receive 200 + OG tags; humans are 308-redirected home.
 */

const SHARE_OG_IMAGE = "/og-wa-share-landing-d.jpg";

const SOCIAL_CRAWLER_UA =
  /facebookexternalhit|Facebot|WhatsApp|Twitterbot|LinkedInBot|Slackbot|Discordbot|TelegramBot|Pinterest|Googlebot/i;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({ locale: safeLocale, namespace: "Metadata" });
  // Unique og:url identity so WhatsApp refreshes when description text changes.
  const shareUrl = `${getCanonical(safeLocale, "/share")}?og=20261009d`;

  return {
    title: {
      absolute: t("ogTitle"),
    },
    description: t("ogDescription"),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      // Share path is for previews only; SEO stays on the homepage.
      canonical: getCanonical(safeLocale),
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: shareUrl,
      siteName: siteConfig.brand,
      locale: safeLocale === "de" ? "de_CH" : "en_US",
      type: "website",
      images: [
        {
          url: SHARE_OG_IMAGE,
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
      images: [SHARE_OG_IMAGE],
    },
  };
}

export default async function ShareLandingPage({ params }: Props) {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const homePath = `/${safeLocale}`;

  const headerStore = await headers();
  const userAgent = headerStore.get("user-agent") ?? "";
  const isSocialCrawler = SOCIAL_CRAWLER_UA.test(userAgent);

  if (!isSocialCrawler) {
    permanentRedirect(homePath);
  }

  const t = await getTranslations({ locale: safeLocale, namespace: "Metadata" });

  // Minimal body for crawlers that also parse visible text as a fallback.
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-[#265464]">
      <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-light">
        {t("ogTitle")}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed">
        {t("ogDescription")}
      </p>
      <p className="mt-8">
        <a href={homePath}>{siteConfig.brand}</a>
      </p>
    </main>
  );
}
