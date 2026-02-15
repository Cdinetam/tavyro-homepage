"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="kontakt" className="section-padding bg-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            {t("title")}
          </h2>

          <p className="text-xl text-tavyro-text2 mb-12">
            {t("subtitle")}
          </p>

          <div className="space-y-6">
            <Link
              href="/erstgespraech-buchen"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              {t("cta")}
            </Link>

            <div className="pt-6 border-t border-tavyro-border">
              <p className="text-tavyro-secondary-500 mb-4">
                {t("alternative")}{" "}
                <a href="mailto:hello@tavyro.ch" className="hover:text-tavyro-text transition-colors">
                  {t("email")}
                </a>
                {" | "}
                <a href="tel:+41786868089" className="hover:text-tavyro-text transition-colors">
                  {t("phone")}
                </a>
                {" | "}
                <a
                  href="https://www.linkedin.com/company/tavyro/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tavyro-text transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
