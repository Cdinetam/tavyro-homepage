import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { siteConfig, type SiteLocale } from "@/config/site";
import JsonLd from "@/components/seo/JsonLd";
import LandingMinimalHeader from "@/components/landing/LandingMinimalHeader";
import LandingCompactFooter from "@/components/landing/LandingCompactFooter";
import { Link } from "@/i18n/navigation";

const SITUATION_KEYS = ["0", "1", "2", "3", "4", "5"] as const;
const SERVICE_KEYS = ["0", "1", "2", "3", "4", "5"] as const;
const SERVICE_BULLET_KEYS = ["0", "1", "2", "3", "4", "5"] as const;
const STEP_KEYS = ["0", "1", "2"] as const;
const TRUST_KEYS = ["0", "1", "2"] as const;
const FAQ_KEYS = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21",
] as const;

const GOLD = "#F5C518";

export const EXTERNE_HR_PATHS = {
  de: "/externe-hr-leitung-kmu",
  en: "/external-hr-leadership-sme",
} as const;

type Namespace = "ExterneHrLeitungKmuPage" | "ExternalHrLeadershipSmePage";

type Props = {
  locale: SiteLocale;
  namespace: Namespace;
  path: string;
  alternateHref: string;
  jsonLdIdPrefix: string;
  fractionalChroHref: string;
};

export default async function ExterneHrLeitungKmuLanding({
  locale,
  namespace,
  path,
  alternateHref,
  jsonLdIdPrefix,
  fractionalChroHref,
}: Props) {
  const t = await getTranslations({ locale, namespace });

  const year = new Date().getFullYear();
  const canonical = `${siteConfig.siteUrl}/${locale}${path}`;
  const inLanguage = locale === "de" ? "de-CH" : "en";
  const cityName = locale === "de" ? "Zürich" : "Zurich";

  const faqMainEntity = FAQ_KEYS.map((key) => ({
    "@type": "Question",
    name: t(`faq.items.${key}.q`),
    acceptedAnswer: {
      "@type": "Answer",
      text: t(`faq.items.${key}.a`),
    },
  }));

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: t("meta.titleAbsolute"),
    description: t("meta.description"),
    inLanguage,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}#website`,
      name: siteConfig.brand,
      url: siteConfig.siteUrl,
    },
    about: {
      "@id": `${canonical}#service`,
    },
    breadcrumb: {
      "@id": `${canonical}#breadcrumb`,
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: t("jsonLd.serviceName"),
    description: t("meta.description"),
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}#organization`,
      name: siteConfig.brand,
      legalName: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/logo-tavyro.svg`,
      email: siteConfig.contact.email,
      telephone: "+41786868089",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Albisriederstrasse 248",
        postalCode: "8047",
        addressLocality: cityName,
        addressCountry: "CH",
      },
    },
    areaServed: [
      { "@type": "City", name: cityName },
      { "@type": "Country", name: "Switzerland" },
    ],
    serviceType: [
      t("jsonLd.serviceType0"),
      "Fractional CHRO",
      t("jsonLd.serviceType2"),
      "Executive Sparring",
    ],
    url: canonical,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("jsonLd.breadcrumbCurrent"),
        item: canonical,
      },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}#tam-nguyen`,
    name: "Tam Nguyen",
    jobTitle: t("jsonLd.personJobTitle"),
    worksFor: {
      "@id": `${siteConfig.siteUrl}#organization`,
    },
    url: "https://www.tam-nguyen.ch",
    sameAs: [siteConfig.founder.linkedin],
    image: `${siteConfig.siteUrl}/tam-nguyen.jpg`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: faqMainEntity,
  };

  return (
    <>
      <JsonLd data={webPageJsonLd} id={`${jsonLdIdPrefix}-webpage`} />
      <JsonLd data={serviceJsonLd} id={`${jsonLdIdPrefix}-service`} />
      <JsonLd data={breadcrumbJsonLd} id={`${jsonLdIdPrefix}-breadcrumb`} />
      <JsonLd data={personJsonLd} id={`${jsonLdIdPrefix}-person`} />
      <JsonLd data={faqJsonLd} id={`${jsonLdIdPrefix}-faq`} />

      <LandingMinimalHeader
        homeLabel={t("header.home")}
        ctaLabel={t("header.cta")}
        locale={locale}
        alternateHref={alternateHref}
      />

      <main className="min-h-screen bg-white">
        {/* HERO */}
        <section
          className="relative overflow-hidden bg-tavyro-brand-900 text-white"
          aria-labelledby="page-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 20%, #F5C518 0%, transparent 42%), radial-gradient(circle at 85% 10%, #6B8B96 0%, transparent 35%)",
            }}
            aria-hidden
          />
          <div className="container-custom relative py-14 md:py-20 lg:py-24">
            <div className="max-w-3xl">
              <p
                className="mb-4 text-xs font-semibold tracking-[0.14em] uppercase md:text-sm"
                style={{ color: GOLD }}
              >
                {t("hero.eyebrow")}
              </p>
              <h1
                id="page-heading"
                className="display-heading mb-5 text-white"
              >
                {t("hero.h1")}
              </h1>
              <p className="mb-6 text-lg font-medium text-white/95 md:text-xl">
                {t("hero.subheadline")}
              </p>
              <div className="mb-8 space-y-4 text-base leading-relaxed text-white/85 md:text-lg">
                <p>{t("hero.p1")}</p>
                <p>{t("hero.p2")}</p>
                <p>{t("hero.p3")}</p>
                <p>{t("hero.p4")}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/erstgespraech-buchen"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-tavyro-brand-900 shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900"
                  style={{ backgroundColor: GOLD }}
                >
                  {t("hero.ctaPrimary")}
                </Link>
                <a
                  href="#leistungen"
                  className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900"
                >
                  {t("hero.ctaSecondary")}
                </a>
              </div>
              <ul className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
                {TRUST_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-2 text-sm text-white/90 md:text-base"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: GOLD }}
                      aria-hidden
                    />
                    {t(`hero.trust.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SITUATIONS */}
        <section
          className="section-padding bg-white"
          aria-labelledby="situations-heading"
        >
          <div className="container-custom">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <h2 id="situations-heading" className="section-heading mb-5">
                {t("situations.title")}
              </h2>
              <p className="text-lg leading-relaxed text-tavyro-text2">
                {t("situations.intro")}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SITUATION_KEYS.map((key, index) => (
                <article
                  key={key}
                  className="rounded-xl border border-tavyro-border bg-tavyro-surface/60 p-6"
                >
                  <p
                    className="mb-3 text-xs font-semibold tracking-wider uppercase"
                    style={{ color: GOLD }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-tavyro-text">
                    {t(`situations.items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-tavyro-text2 md:text-base">
                    {t(`situations.items.${key}.body`)}
                  </p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium text-tavyro-brand-800 md:mt-12 md:text-lg">
              {t("situations.outro")}
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="leistungen"
          className="section-padding scroll-mt-28 bg-tavyro-surface"
          aria-labelledby="services-heading"
        >
          <div className="container-custom">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <h2 id="services-heading" className="section-heading mb-5">
                {t("services.title")}
              </h2>
              <p className="text-lg leading-relaxed text-tavyro-text2">
                {t("services.intro")}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {SERVICE_KEYS.map((key) => (
                <article
                  key={key}
                  className="rounded-xl border border-tavyro-border bg-white p-6 md:p-8"
                >
                  <h3 className="mb-4 text-xl font-semibold text-tavyro-brand-800">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <ul className="mb-5 space-y-2">
                    {SERVICE_BULLET_KEYS.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-sm leading-relaxed text-tavyro-text2 md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: GOLD }}
                          aria-hidden
                        />
                        <span>{t(`services.items.${key}.bullets.${b}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="border-t border-tavyro-border pt-4 text-sm leading-relaxed text-tavyro-text2 md:text-base">
                    {t(`services.items.${key}.desc`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENCE */}
        <section
          className="section-padding bg-white"
          aria-labelledby="difference-heading"
        >
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <h2 id="difference-heading" className="section-heading mb-6">
                {t("difference.title")}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-tavyro-text2 md:text-lg">
                <p>{t("difference.p1")}</p>
                <p>{t("difference.p2")}</p>
                <p>{t("difference.p3")}</p>
                <p>{t("difference.p4")}</p>
              </div>
              <blockquote className="mt-8 border-l-4 pl-5 py-1" style={{ borderColor: GOLD }}>
                <p className="text-lg font-semibold text-tavyro-brand-800 md:text-xl">
                  {t("difference.highlight")}
                </p>
              </blockquote>
              <p className="mt-8">
                <Link
                  href={fractionalChroHref}
                  className="font-medium text-tavyro-brand-600 underline underline-offset-4 transition-colors hover:text-tavyro-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2 rounded-sm"
                >
                  {t("difference.linkLabel")}
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          className="section-padding bg-tavyro-surface"
          aria-labelledby="process-heading"
        >
          <div className="container-custom">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <h2 id="process-heading" className="section-heading mb-5">
                {t("process.title")}
              </h2>
              <p className="text-lg leading-relaxed text-tavyro-text2">
                {t("process.intro")}
              </p>
            </div>
            <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {STEP_KEYS.map((key, index) => (
                <li
                  key={key}
                  className="relative rounded-xl border border-tavyro-border bg-white p-6 md:p-7"
                >
                  <span
                    className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-tavyro-brand-900"
                    style={{ backgroundColor: GOLD }}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold text-tavyro-text">
                    {t(`process.steps.${key}.title`)}
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed text-tavyro-text2 md:text-base">
                    <p>{t(`process.steps.${key}.body`)}</p>
                    {t.has(`process.steps.${key}.body2`) ? (
                      <p>{t(`process.steps.${key}.body2`)}</p>
                    ) : null}
                    {t.has(`process.steps.${key}.body3`) ? (
                      <p>{t(`process.steps.${key}.body3`)}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mx-auto mt-10 max-w-3xl text-center text-base text-tavyro-text2 md:mt-12">
              {t("process.outro")}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/erstgespraech-buchen"
                className="btn-primary"
              >
                {t("process.cta")}
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT TAM */}
        <section
          className="section-padding bg-white"
          aria-labelledby="about-heading"
        >
          <div className="container-custom">
            <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[220px_1fr] md:gap-12">
              <div className="mx-auto w-full max-w-[220px]">
                <Image
                  src="/tam-nguyen.jpg"
                  alt={t("about.imageAlt")}
                  width={440}
                  height={440}
                  className="aspect-square w-full rounded-xl object-cover shadow-md"
                  sizes="(max-width: 768px) 220px, 220px"
                />
              </div>
              <div>
                <h2 id="about-heading" className="section-heading mb-6">
                  {t("about.title")}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-tavyro-text2 md:text-lg">
                  <p>{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p>{t("about.p3")}</p>
                  <p>{t("about.p4")}</p>
                  <p>{t("about.p5")}</p>
                </div>
                <p className="mt-6">
                  <a
                    href="https://www.tam-nguyen.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-tavyro-brand-600 underline underline-offset-4 transition-colors hover:text-tavyro-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2 rounded-sm"
                  >
                    {t("about.linkLabel")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section-padding bg-tavyro-surface"
          aria-labelledby="faq-heading"
        >
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <h2 id="faq-heading" className="section-heading mb-8 text-center md:mb-10">
                {t("faq.title")}
              </h2>
              <div className="overflow-hidden divide-y divide-tavyro-border rounded-xl border border-tavyro-border bg-white">
                {FAQ_KEYS.map((key) => (
                  <details key={key} className="group open:bg-tavyro-surface/40">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-4 font-semibold text-tavyro-text transition-colors hover:bg-tavyro-surface/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tavyro-brand-500 md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                      <span className="pr-2 text-left text-base md:text-lg">
                        {t(`faq.items.${key}.q`)}
                      </span>
                      <span
                        className="mt-1 shrink-0 text-sm transition-transform group-open:rotate-180"
                        style={{ color: GOLD }}
                        aria-hidden
                      >
                        ▼
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-tavyro-text2 leading-relaxed md:px-6 md:pb-5">
                      {key === "18" ? (
                        <p>
                          {t("faq.items.18.aBefore")}{" "}
                          <Link
                            href="/#angebote"
                            className="font-medium text-tavyro-brand-600 underline underline-offset-4 hover:text-tavyro-brand-800"
                          >
                            {t("faq.items.18.aLink")}
                          </Link>
                          {t("faq.items.18.aAfter")}
                        </p>
                      ) : (
                        <p>{t(`faq.items.${key}.a`)}</p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="bg-tavyro-brand-900 text-white"
          aria-labelledby="final-heading"
        >
          <div className="container-custom py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="final-heading" className="section-heading mb-5 text-white">
                {t("final.title")}
              </h2>
              <div className="mx-auto mb-8 max-w-2xl space-y-4 text-base leading-relaxed text-white/90 md:text-lg">
                <p>{t("final.p1")}</p>
                <p>{t("final.p2")}</p>
              </div>
              <Link
                href="/erstgespraech-buchen"
                className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-semibold text-tavyro-brand-900 shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900"
                style={{ backgroundColor: GOLD }}
              >
                {t("final.cta")}
              </Link>
              <div className="mt-8 flex flex-col items-center gap-2 text-sm text-white/80 sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href="mailto:hello@tavyro.ch"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                >
                  hello@tavyro.ch
                </a>
                <a
                  href="tel:+41786868089"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                >
                  +41 78 686 80 89
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingCompactFooter
        homeLabel={t("footer.home")}
        impressumLabel={t("footer.impressum")}
        privacyLabel={t("footer.privacy")}
        copyright={t("footer.copyright", { year })}
      />
    </>
  );
}
