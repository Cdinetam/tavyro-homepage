"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

/** Path after locale prefix, e.g. "" or "/erstgespraech-buchen" (next-intl pathname is locale-agnostic). */
function pathSuffix(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized === "/" ? "" : normalized;
}

/**
 * Slugs that intentionally differ per locale (locale-specific landing pages).
 * Ensures the language switch never points to a non-existent route (e.g. /en/fractional-chro-schweiz).
 */
const CROSS_LOCALE_PATHS: Record<string, { de: string; en: string }> = {
  "/fractional-chro-schweiz": {
    de: "/fractional-chro-schweiz",
    en: "/fractional-chro-switzerland",
  },
  "/fractional-chro-switzerland": {
    de: "/fractional-chro-schweiz",
    en: "/fractional-chro-switzerland",
  },
};

function localeHref(locale: "de" | "en", pathname: string): string {
  const suffix = pathSuffix(pathname);
  const target = CROSS_LOCALE_PATHS[suffix]?.[locale] ?? suffix;
  return `/${locale}${target}`;
}

export default function Navigation() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const deHref = localeHref("de", pathname);
  const enHref = localeHref("en", pathname);

  const scrollToSection = (id: string) => {
    // If not on homepage, navigate to homepage with hash
    if (pathname !== "/") {
      window.location.href = `/${locale}/#${id}`;
      return;
    }

    // If on homepage, smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-tavyro-border bg-white/95 backdrop-blur-sm [color-scheme:light]">
      <div className="container-custom">
        <div className="flex h-24 items-center justify-between gap-4 py-4 md:h-28 md:gap-8 md:py-6">
          <Link
            href="/"
            className="flex shrink-0 items-center pl-2 sm:pl-4 md:pl-8 lg:pl-10 md:mr-12 lg:mr-16 xl:mr-20"
          >
            <Image
              src="/logo-tavyro.svg"
              alt="TaVyro Logo"
              width={240}
              height={64}
              className="h-12 w-auto max-w-[11.5rem] sm:max-w-[12.5rem] md:h-14 md:max-w-[13.5rem] lg:h-16 lg:max-w-[15rem]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden shrink-0 items-center space-x-6 lg:space-x-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
            >
              {t("home")}
            </Link>
            <a
              href="#leistungen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("leistungen");
              }}
              className="text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
            >
              {t("services")}
            </a>
            <a
              href="#ueber"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ueber");
              }}
              className="text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
            >
              {t("about")}
            </a>
            <a
              href="#angebote"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("angebote");
              }}
              className="text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
            >
              {t("offers")}
            </a>
            <Link
              href="/executive-intelligence"
              className="text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
            >
              {t("executiveIntelligence")}
            </Link>
            <Link
              href="/trust-room"
              className="text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
            >
              {t("trustRoom")}
            </Link>

            <div className="flex items-center gap-3 lg:gap-4">
              <Link
                href="/erstgespraech-buchen"
                className="btn-primary shrink-0 px-5 py-2.5 text-sm"
              >
                {t("cta")}
              </Link>

              {/* Language switch: right of CTA — native <a> for iOS Safari */}
              <div className="flex items-center gap-1 text-sm font-medium">
                {locale === "de" ? (
                  <span
                    className="touch-manipulation flex min-h-11 min-w-11 cursor-default items-center justify-center rounded-md px-2 font-bold text-tavyro-text"
                    aria-current="page"
                  >
                    DE
                  </span>
                ) : (
                  <a
                    href={deHref}
                    hrefLang="de"
                    lang="de"
                    className="touch-manipulation flex min-h-11 min-w-11 items-center justify-center rounded-md px-2 text-tavyro-text2 transition-colors hover:text-tavyro-text active:bg-tavyro-brand-100"
                    aria-label="Deutsch"
                  >
                    DE
                  </a>
                )}
                <span className="select-none text-tavyro-border" aria-hidden>
                  |
                </span>
                {locale === "en" ? (
                  <span
                    className="touch-manipulation flex min-h-11 min-w-11 cursor-default items-center justify-center rounded-md px-2 font-bold text-tavyro-text"
                    aria-current="page"
                  >
                    EN
                  </span>
                ) : (
                  <a
                    href={enHref}
                    hrefLang="en"
                    lang="en"
                    className="touch-manipulation flex min-h-11 min-w-11 items-center justify-center rounded-md px-2 text-tavyro-text2 transition-colors hover:text-tavyro-text active:bg-tavyro-brand-100"
                    aria-label="English"
                  >
                    EN
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Mobile: Sprachumschalter (sichtbar im Header) + Menü-Button */}
          <div className="flex items-center gap-1 md:hidden">
            <div className="flex items-center gap-0.5 text-sm font-medium">
              {locale === "de" ? (
                <span
                  className="flex min-h-11 min-w-9 items-center justify-center rounded-md px-1 font-bold text-tavyro-text"
                  aria-current="page"
                >
                  DE
                </span>
              ) : (
                <a
                  href={deHref}
                  hrefLang="de"
                  lang="de"
                  className="touch-manipulation flex min-h-11 min-w-9 items-center justify-center rounded-md px-1 text-tavyro-text2 transition-colors active:bg-tavyro-brand-100"
                  aria-label="Deutsch"
                >
                  DE
                </a>
              )}
              <span className="select-none text-tavyro-border" aria-hidden>
                |
              </span>
              {locale === "en" ? (
                <span
                  className="flex min-h-11 min-w-9 items-center justify-center rounded-md px-1 font-bold text-tavyro-text"
                  aria-current="page"
                >
                  EN
                </span>
              ) : (
                <a
                  href={enHref}
                  hrefLang="en"
                  lang="en"
                  className="touch-manipulation flex min-h-11 min-w-9 items-center justify-center rounded-md px-1 text-tavyro-text2 transition-colors active:bg-tavyro-brand-100"
                  aria-label="English"
                >
                  EN
                </a>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="touch-manipulation p-3 text-tavyro-text2 min-[480px]:p-2 [-webkit-tap-highlight-color:transparent]"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
              aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav-panel"
            className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto overflow-x-hidden border-t border-tavyro-border py-4 md:hidden [-webkit-overflow-scrolling:touch]"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="touch-manipulation py-2 text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
                onClick={() => setIsOpen(false)}
              >
                {t("home")}
              </Link>
              <a
                href="#leistungen"
                className="touch-manipulation py-2 text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("leistungen");
                }}
              >
                {t("services")}
              </a>
              <a
                href="#ueber"
                className="touch-manipulation py-2 text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ueber");
                }}
              >
                {t("about")}
              </a>
              <a
                href="#angebote"
                className="touch-manipulation py-2 text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("angebote");
                }}
              >
                {t("offers")}
              </a>
              <Link
                href="/executive-intelligence"
                className="touch-manipulation py-2 text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
                onClick={() => setIsOpen(false)}
              >
                {t("executiveIntelligence")}
              </Link>
              <Link
                href="/trust-room"
                className="touch-manipulation py-2 text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text"
                onClick={() => setIsOpen(false)}
              >
                {t("trustRoom")}
              </Link>

              <Link
                href="/erstgespraech-buchen"
                className="btn-primary py-2.5 text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
