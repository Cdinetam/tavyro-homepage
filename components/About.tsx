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

export default function About() {
  const t = useTranslations("About");

  const experience = listFromRaw(t.raw("experience") as Record<string, string>);
  const qualifications = listFromRaw(
    t.raw("qualifications") as Record<string, string>
  );

  return (
    <section id="ueber" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-6 text-center">{t("title")}</h2>

          <div className="space-y-8">
            <div className="text-center">
              <div className="max-w-3xl mx-auto space-y-4 md:space-y-5">
                <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
                  {t("description")}
                </p>

                <div className="flex flex-col items-center gap-3 pt-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-tavyro-text">
                    {t("founderTitle")}
                  </h3>
                  <a
                    href={siteConfig.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("linkedinAriaLabel")}
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
                </div>

                <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
                  {t("bio1")}
                </p>
                <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
                  {t("bio2")}
                </p>

                <ul className="space-y-3 text-left max-w-2xl mx-auto">
                  {experience.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-tavyro-text text-base md:text-lg"
                    >
                      <span className="mr-3 text-tavyro-brand-500 font-bold text-lg flex-shrink-0">
                        •
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
                  {t("bio3")}
                </p>
                <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
                  {t("bio4")}
                </p>
              </div>
            </div>

            <div className="bg-tavyro-surface rounded-lg border border-tavyro-border overflow-hidden">
              <h3 className="text-lg md:text-xl font-semibold text-white bg-tavyro-brand-500 px-6 py-3">
                {t("qualificationsTitle")}
              </h3>
              <ul className="space-y-3 list-disc list-inside text-tavyro-text2 p-6">
                {qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>

            <QuoteBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
