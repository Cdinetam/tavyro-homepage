"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig, type SiteLocale } from "@/config/site";
import {
  localeHref,
  LOCALE_SWITCH_LABELS,
} from "@/lib/locale-paths";

const navLinkClass =
  "whitespace-nowrap text-sm font-medium text-tavyro-text2 transition-colors hover:text-tavyro-text";

function LocaleSwitch({
  current,
  pathname,
  compact = false,
}: {
  current: string;
  pathname: string;
  compact?: boolean;
}) {
  const itemClass = compact
    ? "touch-manipulation flex min-h-11 min-w-8 items-center justify-center rounded-md px-1"
    : "touch-manipulation flex min-h-11 min-w-11 items-center justify-center rounded-md px-2";

  return (
    <div className={`flex items-center text-sm font-medium ${compact ? "gap-0.5" : "gap-1"}`}>
      {siteConfig.locales.map((loc, index) => {
        const meta = LOCALE_SWITCH_LABELS[loc];
        const active = current === loc;
        return (
          <span key={loc} className="contents">
            {index > 0 && (
              <span className="select-none text-tavyro-border" aria-hidden>
                |
              </span>
            )}
            {active ? (
              <span
                className={`${itemClass} cursor-default font-bold text-tavyro-text`}
                aria-current="page"
              >
                {meta.code}
              </span>
            ) : (
              <a
                href={localeHref(loc as SiteLocale, pathname)}
                hrefLang={meta.hrefLang}
                lang={meta.lang}
                className={`${itemClass} text-tavyro-text2 transition-colors hover:text-tavyro-text active:bg-tavyro-brand-100`}
                aria-label={meta.ariaLabel}
              >
                {meta.code}
              </a>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default function Navigation() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex h-24 items-center justify-between gap-4 py-4 md:h-28 md:gap-6 md:py-6 xl:gap-8">
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo-tavyro.svg"
              alt="TaVyro Logo"
              width={240}
              height={64}
              className="h-11 w-auto max-w-[8.5rem] sm:h-12 sm:max-w-[12.5rem] md:h-14 md:max-w-[13.5rem] xl:h-14 xl:max-w-[13.5rem] 2xl:h-16 2xl:max-w-[15rem]"
              priority
            />
          </Link>

          {/*
            Desktop ab xl: Logo | (Links + CTA + Sprache) als zwei Blöcke.
            Links+CTA in einer Gruppe, damit Overflow nicht nach links über das Logo läuft.
          */}
          <div className="hidden min-w-0 items-center justify-end gap-x-5 xl:flex 2xl:gap-x-8">
            <div className="flex min-w-0 items-center gap-x-3 2xl:gap-x-6">
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

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/erstgespraech-buchen"
                className="btn-primary shrink-0 px-5 py-2.5 text-sm"
              >
                {t("cta")}
              </Link>

              <LocaleSwitch current={locale} pathname={pathname} />
            </div>
          </div>

          {/* Unter xl: Sprachumschalter + Menü-Button */}
          <div className="flex shrink-0 items-center gap-1 xl:hidden">
            <LocaleSwitch current={locale} pathname={pathname} compact />
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
            className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto overflow-x-hidden border-t border-tavyro-border py-4 xl:hidden [-webkit-overflow-scrolling:touch]"
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
