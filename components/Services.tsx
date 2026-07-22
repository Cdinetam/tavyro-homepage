"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import EmployeeCareLineQuoteModal from "@/components/EmployeeCareLineQuoteModal";

const SERVICE_KEYS = ["0", "1"] as const;
const FRACTIONAL_CHRO_FEATURE_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7"] as const;

export default function Services() {
  const t = useTranslations("Services");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section id="leistungen" className="section-padding bg-gradient-to-b from-white to-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading mb-12 text-center">
            {t("title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {SERVICE_KEYS.map((key) => {
              const title = t(`items.${key}.title`);
              const subtitle = t(`items.${key}.subtitle`);
              const description = t(`items.${key}.description`);
              const cta = t(`items.${key}.cta`);
              const ctaHref = key === "0" ? "#angebote" : "#kontakt";
              const features =
                key === "0"
                  ? FRACTIONAL_CHRO_FEATURE_KEYS.map((fk) =>
                      t(`items.${key}.features.${fk}`)
                    )
                  : [];

              return (
                <div
                  key={key}
                  className="bg-white rounded-xl border-2 border-tavyro-border hover:border-tavyro-brand-400 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="bg-tavyro-brand-900 px-6 md:px-8 py-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <p className="text-tavyro-brand-900 font-medium mb-4 leading-relaxed text-sm md:text-base">
                      {subtitle}
                    </p>
                    {description.trim().length > 0 && (
                      <p className="text-tavyro-text2 mb-4 leading-relaxed text-sm md:text-base whitespace-pre-line">
                        {description}
                      </p>
                    )}
                    {features.length > 0 && (
                      <ul className="list-none space-y-2 mb-6">
                        {features.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-tavyro-text2 text-sm md:text-base"
                          >
                            <span className="mr-2 text-tavyro-brand-500 font-semibold text-base">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto pt-2">
                      {key === "1" ? (
                        <button
                          type="button"
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="btn-primary text-sm md:text-base"
                        >
                          {cta}
                        </button>
                      ) : (
                        <a href={ctaHref} className="btn-primary text-sm md:text-base">
                          {cta}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl mx-auto bg-tavyro-surface border border-tavyro-border rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-base md:text-lg font-semibold text-tavyro-brand-900 mb-3">
              {t("executiveIntelligenceNote.title")}
            </h3>
            <p className="text-tavyro-text2 text-sm md:text-base leading-relaxed mb-5 whitespace-pre-line">
              {t("executiveIntelligenceNote.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
              <Link
                href="/executive-intelligence"
                className="text-tavyro-brand-700 font-medium underline underline-offset-4 hover:text-tavyro-brand-900 text-sm md:text-base"
              >
                {t("executiveIntelligenceNote.executiveIntelligenceLink")}
              </Link>
              <Link
                href="/trust-room"
                className="text-tavyro-brand-700 font-medium underline underline-offset-4 hover:text-tavyro-brand-900 text-sm md:text-base"
              >
                {t("executiveIntelligenceNote.trustRoomLink")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <EmployeeCareLineQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </section>
  );
}
