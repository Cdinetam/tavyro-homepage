import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { isSiteLocale } from "@/config/site";
import { getCanonical, getLanguageAlternates } from "@/lib/seo";
import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({ locale: safeLocale, namespace: "Impressum" });
  const site = await getTranslations({ locale: safeLocale, namespace: "Metadata" });

  return {
    title: t("pageTitle"),
    description: site("description"),
    alternates: {
      canonical: getCanonical(safeLocale, "impressum"),
      languages: getLanguageAlternates("impressum"),
    },
  };
}

export default function Impressum() {
  const t = useTranslations("Impressum");

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-tavyro-surface to-white pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-tavyro-text text-center">
              {t("pageTitle")}
            </h1>
          </div>
        </section>

        {/* Impressum Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-tavyro-brand-700 mb-8">
                {t("subtitle")}
              </h2>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("publisherTitle")}
                </h3>
                <div className="p-6 bg-tavyro-surface rounded-lg border border-tavyro-border text-tavyro-text2 leading-relaxed">
                  <p className="font-semibold text-tavyro-text mb-2">
                    TaVyro GmbH
                  </p>
                  <p>Albisriederstrasse 248</p>
                  <p>CH-8047 Zürich</p>
                  <p>Schweiz</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("contactTitle")}
                </h3>
                <div className="space-y-2 text-tavyro-text2 leading-relaxed">
                  <p>
                    <strong className="text-tavyro-text">E-Mail:</strong>{" "}
                    <a
                      href="mailto:hello@tavyro.ch"
                      className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors"
                    >
                      hello@tavyro.ch
                    </a>
                  </p>
                  <p>
                    <strong className="text-tavyro-text">Telefon:</strong>{" "}
                    <a
                      href="tel:+41786868089"
                      className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors"
                    >
                      +41 78 686 80 89
                    </a>
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("representativeTitle")}
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  {t("representativeName")}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("registerTitle")}
                </h3>
                <div className="space-y-2 text-tavyro-text2 leading-relaxed">
                  <p>{t("registerCanton")}</p>
                  <p>{t("registerUid")}</p>
                  <p>{t("registerForm")}</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("purposeTitle")}
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  {t("purposeContent")}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("disclaimerTitle")}
                </h3>
                <div className="space-y-4 text-tavyro-text2 leading-relaxed">
                  <p>{t("disclaimerContent")}</p>
                  <p>{t("disclaimerLinks")}</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("copyrightTitle")}
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  {t("copyrightContent")}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("dataProtectionTitle")}
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  {t("dataProtectionContent")}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  {t("jurisdictionTitle")}
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  {t("jurisdictionContent")}
                </p>
              </div>

              <div className="mb-10 p-6 bg-tavyro-tint rounded-lg border border-tavyro-border">
                <p className="text-sm text-tavyro-text2 leading-relaxed">
                  <strong className="text-tavyro-text">{t("changeNote")}</strong>
                </p>
              </div>

              {/* Back to Home */}
              <div className="mt-12 pt-8 border-t border-tavyro-border text-center">
                <Link href="/" className="btn-primary inline-block">
                  {t("backHome")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
