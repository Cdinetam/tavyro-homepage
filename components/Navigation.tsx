"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

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

  /**
   * Full page navigation (not client router.replace) so iOS Safari reliably
   * applies locale, middleware cookie, and fresh RSC payload — fixes broken EN toggle on mobile.
   */
  const switchLocale = (newLocale: "de" | "en") => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    const normalized =
      pathname.startsWith("/") ? pathname : `/${pathname}`;
    const pathOnly = normalized === "/" ? "" : normalized;
    window.location.assign(
      `/${newLocale}${pathOnly}${window.location.search}${window.location.hash}`
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-tavyro-border z-50 [color-scheme:light]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28 py-4 md:py-6">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo-tavyro.svg"
              alt="TaVyro Logo"
              width={240}
              height={64}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              {t("home")}
            </Link>
            <a
              href="#leistungen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("leistungen");
              }}
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              {t("services")}
            </a>
            <a
              href="#ueber"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ueber");
              }}
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              {t("about")}
            </a>
            <a
              href="#angebote"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("angebote");
              }}
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              {t("offers")}
            </a>
            <Link
              href="/executive-intelligence"
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              {t("executiveIntelligence")}
            </Link>

            {/* Language Switch */}
            <div className="flex items-center gap-1 text-sm font-medium">
              <button
                type="button"
                onClick={() => switchLocale("de")}
                aria-label="Deutsch"
                aria-current={locale === "de" ? "true" : undefined}
                className={`touch-manipulation min-h-11 min-w-11 rounded-md px-2 transition-colors ${
                  locale === "de"
                    ? "text-tavyro-text font-bold"
                    : "text-tavyro-text2 hover:text-tavyro-text active:bg-tavyro-brand-100"
                }`}
              >
                DE
              </button>
              <span className="text-tavyro-border select-none" aria-hidden>
                |
              </span>
              <button
                type="button"
                onClick={() => switchLocale("en")}
                aria-label="English"
                aria-current={locale === "en" ? "true" : undefined}
                className={`touch-manipulation min-h-11 min-w-11 rounded-md px-2 transition-colors ${
                  locale === "en"
                    ? "text-tavyro-text font-bold"
                    : "text-tavyro-text2 hover:text-tavyro-text active:bg-tavyro-brand-100"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/erstgespraech-buchen"
              className="btn-primary text-sm px-5 py-2.5"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-tavyro-text2 hover:text-tavyro-text"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-tavyro-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                {t("home")}
              </Link>
              <a
                href="#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("leistungen");
                }}
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                {t("services")}
              </a>
              <a
                href="#ueber"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ueber");
                }}
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                {t("about")}
              </a>
              <a
                href="#angebote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("angebote");
                }}
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                {t("offers")}
              </a>
              <Link
                href="/executive-intelligence"
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("executiveIntelligence")}
              </Link>

              {/* Mobile Language Switch */}
              <div className="flex flex-col gap-2 text-sm font-medium py-2">
                <button
                  type="button"
                  onClick={() => switchLocale("de")}
                  aria-label="Deutsch"
                  aria-current={locale === "de" ? "true" : undefined}
                  className={`touch-manipulation min-h-12 w-full rounded-md border border-tavyro-border px-4 py-3 text-left transition-colors ${
                    locale === "de"
                      ? "border-tavyro-text bg-tavyro-brand-50 text-tavyro-text font-bold"
                      : "text-tavyro-text2 active:bg-tavyro-brand-100"
                  }`}
                >
                  DE — Deutsch
                </button>
                <button
                  type="button"
                  onClick={() => switchLocale("en")}
                  aria-label="English"
                  aria-current={locale === "en" ? "true" : undefined}
                  className={`touch-manipulation min-h-12 w-full rounded-md border border-tavyro-border px-4 py-3 text-left transition-colors ${
                    locale === "en"
                      ? "border-tavyro-text bg-tavyro-brand-50 text-tavyro-text font-bold"
                      : "text-tavyro-text2 active:bg-tavyro-brand-100"
                  }`}
                >
                  EN — English
                </button>
              </div>

              <Link
                href="/erstgespraech-buchen"
                className="btn-primary text-sm px-5 py-2.5 text-center"
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
