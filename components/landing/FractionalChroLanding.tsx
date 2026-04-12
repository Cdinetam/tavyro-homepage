import { getTranslations } from "next-intl/server";
import type { SiteLocale } from "@/config/site";
import JsonLd from "@/components/seo/JsonLd";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

const FAQ_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7"] as const;
const SITUATION_KEYS = ["0", "1", "2", "3", "4", "5"] as const;
const WHAT_KEYS = ["0", "1", "2", "3", "4", "5"] as const;
const DIFF_BLOCKS = [
  "vsConsultants",
  "vsInterim",
  "vsFullTime",
  "vsLargeFirms",
] as const;

type Namespace =
  | "FractionalChroZurichPage"
  | "FractionalChroSchweizPage"
  | "FractionalChroSwitzerlandPage";

type Props = {
  locale: SiteLocale;
  namespace: Namespace;
  jsonLdId: string;
};

function LocalLink({
  label,
  path,
  linkLocale,
  pageLocale,
}: {
  label: string;
  path: string;
  linkLocale: string;
  pageLocale: SiteLocale;
}) {
  if (!label?.trim() || !path?.trim()) return null;
  const href = path.startsWith("/") ? path : `/${path}`;
  const useLocale: SiteLocale | undefined =
    linkLocale === "de" || linkLocale === "en"
      ? linkLocale !== pageLocale
        ? linkLocale
        : undefined
      : undefined;
  return (
    <Link
      href={href}
      {...(useLocale ? { locale: useLocale } : {})}
      className="text-tavyro-brand-700 font-medium underline underline-offset-4 hover:text-tavyro-brand-900"
    >
      {label}
    </Link>
  );
}

export default async function FractionalChroLanding({
  locale,
  namespace,
  jsonLdId,
}: Props) {
  const t = await getTranslations({ locale, namespace });

  const faqMainEntity = FAQ_KEYS.map((key) => ({
    "@type": "Question",
    name: t(`faq.items.${key}.q`),
    acceptedAnswer: {
      "@type": "Answer",
      text: t(`faq.items.${key}.a`),
    },
  }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqMainEntity,
  };

  const link1Label = t("local.link1Label");
  const link1Path = t("local.link1Path");
  const link1Locale = t("local.link1Locale");
  const link2Label = t("local.link2Label");
  const link2Path = t("local.link2Path");
  const link2Locale = t("local.link2Locale");

  return (
    <>
      <JsonLd data={faqJsonLd} id={jsonLdId} />
      <Navigation />
      <main className="min-h-screen bg-white">
        <section
          className="pt-32 md:pt-40 pb-14 md:pb-20 bg-gradient-to-b from-tavyro-brand-900/[0.06] to-white border-b border-tavyro-border"
          aria-labelledby="page-heading"
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-medium text-tavyro-brand-700 tracking-wide uppercase mb-3">
                TaVyro
              </p>
              <h1
                id="page-heading"
                className="text-4xl md:text-5xl font-bold text-tavyro-text mb-6 leading-tight"
              >
                {t("hero.h1")}
              </h1>
              <p className="text-lg md:text-xl text-tavyro-text2 mb-10 leading-relaxed max-w-3xl">
                {t("hero.supporting")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="/erstgespraech-buchen"
                  className="btn-primary w-full sm:w-auto text-center"
                >
                  {t("hero.ctaPrimary")}
                </Link>
                <Link
                  href="/#leistungen"
                  className="btn-secondary w-full sm:w-auto text-center"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container-custom py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
            <section aria-labelledby="why-heading">
              <h2
                id="why-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-6"
              >
                {t("why.title")}
              </h2>
              <div className="space-y-4 text-lg text-tavyro-text2 leading-relaxed">
                <p>{t("why.p1")}</p>
                <p>{t("why.p2")}</p>
              </div>
            </section>

            <section aria-labelledby="situations-heading">
              <h2
                id="situations-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-6"
              >
                {t("situations.title")}
              </h2>
              <ul className="space-y-3 text-tavyro-text2 text-base md:text-lg leading-relaxed">
                {SITUATION_KEYS.map((key) => (
                  <li key={key} className="flex gap-3">
                    <span
                      className="text-tavyro-brand-500 font-semibold shrink-0"
                      aria-hidden
                    >
                      •
                    </span>
                    <span>{t(`situations.items.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="what-heading">
              <h2
                id="what-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-6"
              >
                {t("what.title")}
              </h2>
              <p className="text-lg text-tavyro-text2 leading-relaxed mb-6">
                {t("what.intro")}
              </p>
              <ul className="space-y-3 text-tavyro-text2 text-base md:text-lg leading-relaxed mb-6">
                {WHAT_KEYS.map((key) => (
                  <li key={key} className="flex gap-3">
                    <span
                      className="text-tavyro-brand-500 font-semibold shrink-0"
                      aria-hidden
                    >
                      •
                    </span>
                    <span>{t(`what.items.${key}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-tavyro-text2 leading-relaxed">
                {t("what.outro")}
              </p>
            </section>

            <section aria-labelledby="different-heading">
              <h2
                id="different-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-6"
              >
                {t("different.title")}
              </h2>
              <p className="text-lg text-tavyro-text2 leading-relaxed mb-8">
                {t("different.intro")}
              </p>
              <div className="space-y-8">
                {DIFF_BLOCKS.map((block) => (
                  <div key={block}>
                    <h3 className="text-xl font-semibold text-tavyro-text mb-2">
                      {t(`different.${block}.title`)}
                    </h3>
                    <p className="text-tavyro-text2 leading-relaxed">
                      {t(`different.${block}.body`)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="mandate-heading">
              <h2
                id="mandate-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-6"
              >
                {t("mandate.title")}
              </h2>
              <div className="space-y-4 text-lg text-tavyro-text2 leading-relaxed">
                <p>{t("mandate.p1")}</p>
                <p>{t("mandate.p2")}</p>
              </div>
            </section>

            <section
              aria-labelledby="local-heading"
              className="bg-tavyro-surface border border-tavyro-border rounded-xl p-6 md:p-8"
            >
              <h2
                id="local-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-4"
              >
                {t("local.title")}
              </h2>
              <p className="text-tavyro-text2 leading-relaxed mb-4">
                {t("local.p1")}
              </p>
              <p className="text-tavyro-text2 leading-relaxed mb-4">
                {t("local.p2")}
              </p>
              {(link1Label?.trim() || link2Label?.trim()) && (
                <ul className="space-y-2 text-tavyro-text2">
                  {link1Label?.trim() && link1Path?.trim() && (
                    <li>
                      <LocalLink
                        label={link1Label}
                        path={link1Path}
                        linkLocale={link1Locale}
                        pageLocale={locale}
                      />
                    </li>
                  )}
                  {link2Label?.trim() && link2Path?.trim() && (
                    <li>
                      <LocalLink
                        label={link2Label}
                        path={link2Path}
                        linkLocale={link2Locale}
                        pageLocale={locale}
                      />
                    </li>
                  )}
                </ul>
              )}
            </section>

            <section aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="text-2xl md:text-3xl font-bold text-tavyro-text mb-6"
              >
                {t("faq.title")}
              </h2>
              <div className="border border-tavyro-border rounded-xl overflow-hidden divide-y divide-tavyro-border bg-white">
                {FAQ_KEYS.map((key) => (
                  <details
                    key={key}
                    className="group open:bg-tavyro-surface/50"
                  >
                    <summary className="cursor-pointer list-none flex justify-between gap-4 px-4 py-4 md:px-6 md:py-5 font-semibold text-tavyro-text hover:bg-tavyro-surface/80 [&::-webkit-details-marker]:hidden">
                      <span className="pr-2">{t(`faq.items.${key}.q`)}</span>
                      <span
                        className="text-tavyro-brand-500 shrink-0 group-open:rotate-180 transition-transform text-sm"
                        aria-hidden
                      >
                        ▼
                      </span>
                    </summary>
                    <p className="px-4 pb-4 md:px-6 md:pb-5 text-tavyro-text2 leading-relaxed">
                      {t(`faq.items.${key}.a`)}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="final-heading"
              className="bg-tavyro-brand-900 text-white rounded-xl p-8 md:p-10"
            >
              <h2
                id="final-heading"
                className="text-2xl md:text-3xl font-bold mb-4"
              >
                {t("final.title")}
              </h2>
              <p className="text-white/90 leading-relaxed mb-8 max-w-2xl">
                {t("final.body")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="/erstgespraech-buchen"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white text-tavyro-brand-900 font-semibold hover:bg-tavyro-surface transition-colors w-full sm:w-auto text-center"
                >
                  {t("final.cta")}
                </Link>
                <Link
                  href="/"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-white/40 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
                >
                  {t("final.homeLink")}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
