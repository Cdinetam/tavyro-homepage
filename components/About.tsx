"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import QuoteBanner from "@/components/QuoteBanner";
import { siteConfig } from "@/config/site";

function listFromRaw(raw: Record<string, string>): string[] {
  return Object.keys(raw)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => raw[key]);
}

function LinkedInIconLink({
  href,
  ariaLabel,
}: {
  href: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="inline-flex rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tavyro-brand-500 focus-visible:ring-offset-2"
    >
      <Image
        src="/linkedin-logo.svg"
        alt=""
        width={28}
        height={28}
        className="h-7 w-7"
      />
    </a>
  );
}

export default function About() {
  const t = useTranslations("About");

  const experience = listFromRaw(t.raw("experience") as Record<string, string>);
  const qualifications = listFromRaw(
    t.raw("qualifications") as Record<string, string>
  );

  return (
    <section id="ueber" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-heading mb-6 text-center">{t("title")}</h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-tavyro-text2 md:mb-16 md:text-xl">
            {t("description")}
          </p>

          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
            {/* Tam Nguyen – Lead Advisor */}
            <article className="mx-auto flex w-full max-w-md flex-col items-center text-center">
              <div className="relative mb-6 aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-xl border-2 border-tavyro-brand-500 shadow-md md:max-w-[220px]">
                <Image
                  src="/tam-nguyen-portrait.jpg"
                  alt={t("founderImageAlt")}
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="mb-5 flex flex-col items-center gap-3">
                <h3 className="text-xl font-semibold text-tavyro-text md:text-2xl">
                  {t("founderTitle")}
                </h3>
                <LinkedInIconLink
                  href={siteConfig.founder.linkedin}
                  ariaLabel={t("linkedinAriaLabel")}
                />
              </div>

              <div className="w-full space-y-4 text-left md:space-y-5">
                <p className="text-base leading-relaxed text-tavyro-text2 md:text-lg">
                  {t("bio1")}
                </p>
                <p className="text-base leading-relaxed text-tavyro-text2 md:text-lg">
                  {t("bio2")}
                </p>

                <ul className="space-y-3">
                  {experience.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-base text-tavyro-text md:text-lg"
                    >
                      <span className="mr-3 flex-shrink-0 text-lg font-bold text-tavyro-brand-500">
                        •
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base leading-relaxed text-tavyro-text2 md:text-lg">
                  {t("bio3")}
                </p>
                <p className="text-base leading-relaxed text-tavyro-text2 md:text-lg">
                  {t("bio4")}
                </p>

                <div className="overflow-hidden rounded-lg border border-tavyro-border bg-tavyro-surface">
                  <h4 className="bg-tavyro-brand-500 px-5 py-3 text-base font-semibold text-white md:text-lg">
                    {t("qualificationsTitle")}
                  </h4>
                  <ul className="list-inside list-disc space-y-2 p-5 text-tavyro-text2">
                    {qualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* Ingrid Dohme – ergänzendes Teammitglied */}
            <article className="mx-auto flex w-full max-w-md flex-col items-center text-center">
              <div className="relative mb-6 aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-xl border border-tavyro-border shadow-md md:max-w-[220px]">
                <Image
                  src="/ingrid-dohme-portrait.jpg"
                  alt={t("advisorImageAlt")}
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                />
              </div>

              <div className="mb-5 flex flex-col items-center gap-3">
                <h3 className="text-xl font-semibold text-tavyro-text md:text-2xl">
                  {t("advisorTitle")}
                </h3>
                <LinkedInIconLink
                  href={siteConfig.advisors.ingridDohme.linkedin}
                  ariaLabel={t("advisorLinkedinAriaLabel")}
                />
              </div>

              <p className="w-full text-left text-base leading-relaxed text-tavyro-text2 md:text-lg">
                {t("advisorBio")}
              </p>
            </article>
          </div>

          <div className="mt-12 md:mt-16">
            <QuoteBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
