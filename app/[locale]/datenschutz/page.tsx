import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

export default function Datenschutz() {
  const t = useTranslations("Datenschutz");

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

        {/* Datenschutz Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-tavyro-text2 mb-12 text-center italic">
                {t("subtitle")}
              </p>

              <div className="space-y-10">
                {/* 1. Verantwortlicher */}
                <div>
                  <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                    {t("section1Title")}
                  </h2>
                  <div className="p-4 bg-tavyro-surface rounded-lg border border-tavyro-border">
                    <p className="text-tavyro-text2 leading-relaxed">
                      <strong className="text-tavyro-text">TaVyro GmbH</strong>
                      <br />
                      Albisriederstrasse 248, CH-8047 Zürich, Schweiz
                      <br />
                      E-Mail:{" "}
                      <a
                        href="mailto:hello@tavyro.ch"
                        className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors"
                      >
                        hello@tavyro.ch
                      </a>
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                    {t("section2Title")}
                  </h2>
                  <div className="text-tavyro-text2 leading-relaxed space-y-4">
                    <p>{t("section2Intro")}</p>
                    <ul className="list-none space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="mr-3 text-tavyro-brand-500 font-semibold">
                          •
                        </span>
                        <span>{t("section2TechData")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-tavyro-brand-500 font-semibold">
                          •
                        </span>
                        <span>{t("section2CommData")}</span>
                      </li>
                    </ul>
                    <p>{t("section2NoProfiling")}</p>
                  </div>
                </div>

                {/* 3-8 */}
                {(
                  [
                    "section3",
                    "section4",
                    "section5",
                    "section6",
                    "section7",
                    "section8",
                  ] as const
                ).map((key) => (
                  <div key={key}>
                    <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                      {t(`${key}Title`)}
                    </h2>
                    <p className="text-tavyro-text2 leading-relaxed">
                      {t(`${key}Content`)}
                    </p>
                  </div>
                ))}

                {/* Stand */}
                <div className="pt-8 border-t border-tavyro-border">
                  <p className="text-tavyro-text2 text-sm italic">
                    {t("lastUpdated")}
                  </p>
                </div>
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
