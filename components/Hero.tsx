"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Hintergrundbild ohne Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t("headline")}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 leading-relaxed drop-shadow-lg">
            {t.rich("subheadline", {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>,
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-start">
            <Link
              href="/erstgespraech-buchen"
              className="btn-primary w-full sm:w-auto text-center"
            >
              {t("ctaPrimary")}
            </Link>
            {(locale === "en" || locale === "de") && (
              <div className="group relative w-full sm:w-auto">
                <a
                  href={
                    locale === "en"
                      ? "/en/tavyro-hr-health-check.html"
                      : "/tavyro-hr-health-check.html"
                  }
                  className="btn-primary block w-full text-center sm:w-auto"
                >
                  {locale === "de"
                    ? "CEO/GL Selbstcheck"
                    : "CEO/Executive Team Self-Check"}
                </a>
                <div
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg bg-white/95 p-4 text-left opacity-0 shadow-xl ring-1 ring-black/5 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  <p className="mb-1.5 font-semibold text-tavyro-text">
                    {locale === "de"
                      ? "Fokus auf das, was nur Sie tun können."
                      : "Focus on what only you can do."}
                  </p>
                  <p className="text-sm leading-relaxed text-tavyro-text2">
                    {locale === "de"
                      ? "Schätzen Sie die Opportunitätskosten von Führungszeit, die in operative HR- und Organisationsthemen fliesst. Ein Fractional CHRO ermöglicht Ihrer Geschäftsleitung, sich auf Kunden, Wachstum und strategische Entscheidungen zu konzentrieren."
                      : "Estimate the opportunity costs of executive time spent on operational HR and organisational matters. A Fractional CHRO enables your leadership team to focus on customers, growth and strategic decisions."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
