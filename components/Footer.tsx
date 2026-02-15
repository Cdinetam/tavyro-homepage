"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8"] as const;

  return (
    <footer className="bg-tavyro-brand-900 text-tavyro-secondary-200 py-12 md:py-16">
      <div className="container-custom">
        {/* Q&A Section */}
        <div className="mb-12 pb-12 border-b border-tavyro-brand-700">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {t("qaSectionTitle")}
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqKeys.map((key, index) => (
              <div key={key} className="bg-tavyro-brand-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-tavyro-brand-700 transition-colors"
                >
                  <h4 className="text-white font-semibold text-base md:text-lg pr-4">
                    {t(`faqs.${key}.question`)}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-tavyro-secondary-200 text-sm md:text-base leading-relaxed">
                      {t(`faqs.${key}.answer`)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t("contactTitle")}</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white font-medium">TaVyro GmbH</p>
              <p>Albisriederstrasse 248</p>
              <p>CH-8047 Zürich</p>
              <p className="mt-4">
                <a 
                  href="mailto:hello@tavyro.ch" 
                  className="hover:text-white transition-colors"
                >
                  hello@tavyro.ch
                </a>
              </p>
              <p>
                <a 
                  href="tel:+41786868089" 
                  className="hover:text-white transition-colors"
                >
                  +41 78 686 80 89
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t("navigationTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <a 
                  href="#leistungen"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("leistungen");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a 
                  href="#ueber"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("ueber");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("aboutTavyro")}
                </a>
              </li>
              <li>
                <a 
                  href="#angebote"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("angebote");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("offers")}
                </a>
              </li>
              <li>
                <Link 
                  href="/erstgespraech-buchen" 
                  className="hover:text-white transition-colors"
                >
                  {t("bookCall")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t("legalTitle")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/impressum" 
                  className="hover:text-white transition-colors"
                >
                  {t("impressum")}
                </Link>
              </li>
              <li>
                <Link 
                  href="/datenschutz" 
                  className="hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="pt-8 border-t border-tavyro-brand-700 text-center md:text-left">
          <p className="text-sm">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
