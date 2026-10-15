import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { SiteLocale } from "@/config/site";

type Props = {
  homeLabel: string;
  ctaLabel: string;
  locale: SiteLocale;
  /** Absolute path for the other language, e.g. /en/external-hr-leadership-sme */
  alternateHref: string;
};

export default function LandingMinimalHeader({
  homeLabel,
  ctaLabel,
  locale,
  alternateHref,
}: Props) {
  const deActive = locale === "de";
  const enActive = locale === "en";

  return (
    <header className="sticky top-0 z-50 border-b border-tavyro-border bg-white/95 backdrop-blur-sm [color-scheme:light]">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between gap-3 py-3 md:h-24 md:gap-4 md:py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2 rounded-sm"
          >
            <Image
              src="/logo-tavyro.svg"
              alt="TaVyro Logo"
              width={240}
              height={64}
              className="h-10 w-auto max-w-[9rem] sm:h-11 sm:max-w-[11rem] md:h-12 md:max-w-[13rem]"
              priority
            />
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5">
            <nav
              aria-label={locale === "de" ? "Sprache" : "Language"}
              className="flex items-center gap-1.5 text-sm font-medium"
            >
              {deActive ? (
                <span className="text-tavyro-brand-800" aria-current="page">
                  DE
                </span>
              ) : (
                <a
                  href={alternateHref}
                  className="text-tavyro-text2 transition-colors hover:text-tavyro-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2 rounded-sm"
                  lang="de"
                  hrefLang="de-CH"
                >
                  DE
                </a>
              )}
              <span className="text-tavyro-border select-none" aria-hidden>
                |
              </span>
              {enActive ? (
                <span className="text-tavyro-brand-800" aria-current="page">
                  EN
                </span>
              ) : (
                <a
                  href={alternateHref}
                  className="text-tavyro-text2 transition-colors hover:text-tavyro-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2 rounded-sm"
                  lang="en"
                  hrefLang="en"
                >
                  EN
                </a>
              )}
            </nav>

            <Link
              href="/"
              className="hidden text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2 rounded-sm"
            >
              {homeLabel}
            </Link>
            <Link
              href="/erstgespraech-buchen"
              className="inline-flex items-center justify-center rounded-lg bg-[#F5C518] px-3.5 py-2.5 text-sm font-semibold text-tavyro-brand-900 shadow-sm transition-colors hover:bg-[#e6b60f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 sm:px-5"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
