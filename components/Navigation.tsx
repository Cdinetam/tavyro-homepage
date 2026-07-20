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

const navLinkClass =
  "whitespace-nowrap text-xs font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text xl:text-sm";

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
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden border-b border-tavyro-border bg-white/95 backdrop-blur-sm [color-scheme:light]">
      <div className="container-custom">
        <div className="flex h-24 items-center justify-between gap-3 py-4 md:h-28 md:py-6 lg:gap-4 xl:gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center pl-2 sm:pl-4 md:pl-6 lg:pl-8"
          >
            <Image
              src="/logo-tavyro.svg"
              alt="TaVyro Logo"
              width={240}
              height={64}
              className="h-11 w-auto max-w-[8.5rem] sm:h-12 sm:max-w-[12.5rem] md:h-14 md:max-w-[13.5rem] lg:h-12 lg:max-w-[11.5rem] xl:h-14 xl:max-w-[13.5rem] 2xl:h-16 2xl:max-w-[15rem]"
              priority
            />
          </Link>

          {/* Desktop Navigation — ab lg; kompakt bis xl, damit EN-Labels passen */}
          <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex xl:gap-5 2xl:gap-8">
            <div className="flex min-w-0 items-center justify-end gap-x-3 xl:gap-x-5 2xl:gap-x-7">
              <Link href="/" className={navLinkClass}>
                {t("home")}
              </Link>
              <a
                href="#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("leistungen");
                }}
                className={navLinkClass}
              >
                {t("services")}
              </a>
              <a
                href="#angebote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("angebote");
                }}
                className={navLinkClass}
              >
                {t("offers")}
              </a>
              <Link href="/executive-intelligence" className={navLinkClass}>
                {t("executiveIntelligence")}
              </Link>
              <Link href="/trust-room" className={navLinkClass}>
                {t("trustRoom")}
              </Link>
              <a
                href="#ueber"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ueber");
                }}
                className={navLinkClass}
              >
                {t("about")}
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-2 xl:gap-3">
              <Link
                href="/erstgespraech-buchen"
                className="btn-primary shrink-0 px-3 py-2 text-xs xl:px-5 xl:py-2.5 xl:text-sm"
              >
                {t("cta")}
              </Link>

              {/* Language switch: right of CTA — native <a> for iOS Safari */}
              <div className="flex items-center gap-0.5 text-xs font-medium xl:gap-1 xl:text-sm">
                {locale === "de" ? (
                  <span
                    className="touch-manipulation flex min-h-9 min-w-8 cursor-default items-center justify-center rounded-md px-1 font-bold text-tavyro-text xl:min-h-11 xl:min-w-11 xl:px-2"
                    aria-current="page"
                  >
                    DE
                  </span>
                ) : (
                  <a
                    href={deHref}
                    hrefLang="de"
                    lang="de"
                    className="touch-manipulation flex min-h-9 min-w-8 items-center justify-center rounded-md px-1 text-tavyro-text2 transition-colors hover:text-tavyro-text active:bg-tavyro-brand-100 xl:min-h-11 xl:min-w-11 xl:px-2"
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
                    className="touch-manipulation flex min-h-9 min-w-8 cursor-default items-center justify-center rounded-md px-1 font-bold text-tavyro-text xl:min-h-11 xl:min-w-11 xl:px-2"
                    aria-current="page"
                  >
                    EN
                  </span>
                ) : (
                  <a
                    href={enHref}
                    hrefLang="en"
                    lang="en"
                    className="touch-manipulation flex min-h-9 min-w-8 items-center justify-center rounded-md px-1 text-tavyro-text2 transition-colors hover:text-tavyro-text active:bg-tavyro-brand-100 xl:min-h-11 xl:min-w-11 xl:px-2"
                    aria-label="English"
                  >
                    EN
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Tablet/Mobile: Sprachumschalter (sichtbar im Header) + Menü-Button */}
          <div className="flex items-center gap-1 lg:hidden">
            <div className="flex items-center gap-0.5 text-sm font-medium">
              {locale === "de" ? (
                <span
                  className="flex min-h-11 min-w-8 items-center justify-center rounded-md px-1 font-bold text-tavyro-text"
                  aria-current="page"
                >
                  DE
                </span>
              ) : (
                <a
                  href={deHref}
                  hrefLang="de"
                  lang="de"
                  className="touch-manipulation flex min-h-11 min-w-8 items-center justify-center rounded-md px-1 text-tavyro-text2 transition-colors active:bg-tavyro-brand-100"
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
                  className="flex min-h-11 min-w-8 items-center justify-center rounded-md px-1 font-bold text-tavyro-text"
                  aria-current="page"
                >
                  EN
                </span>
              ) : (
                <a
                  href={enHref}
                  hrefLang="en"
                  lang="en"
                  className="touch-manipulation flex min-h-11 min-w-8 items-center justify-center rounded-md px-1 text-tavyro-text2 transition-colors active:bg-tavyro-brand-100"
                  aria-label="English"
                >
                  EN
                </a>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="touch-manipulation shrink-0 rounded-md border border-tavyro-border p-2 [-webkit-tap-highlight-color:transparent]"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
              aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  width: "26px",
                  height: "20px",
                }}
              >
                {[0, 8.5, 17].map((top, i) => (
                  <span
                    key={top}
                    style={{
                      position: "absolute",
                      left: 0,
                      width: "100%",
                      height: "3px",
                      borderRadius: "2px",
                      backgroundColor: "#132A32",
                      transition: "transform .2s ease, opacity .2s ease, top .2s ease",
                      top: isOpen ? "8.5px" : `${top}px`,
                      transform: isOpen
                        ? i === 0
                          ? "rotate(45deg)"
                          : i === 2
                          ? "rotate(-45deg)"
                          : "none"
                        : "none",
                      opacity: isOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav-panel"
            className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto overflow-x-hidden border-t border-tavyro-border py-4 lg:hidden [-webkit-overflow-scrolling:touch]"
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
