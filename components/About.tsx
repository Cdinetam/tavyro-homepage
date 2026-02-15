import { useTranslations } from "next-intl";
import QuoteBanner from "@/components/QuoteBanner";

export default function About() {
  const t = useTranslations("About");

  const qualifications = [
    t("qualifications.0"),
    t("qualifications.1"),
    t("qualifications.2"),
    t("qualifications.3"),
  ];

  return (
    <section id="ueber" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6 text-center">
            {t("title")}
          </h2>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl text-tavyro-text2 mb-4">
                {t.rich("description", {
                  strong: (chunks) => <strong className="text-tavyro-text">{chunks}</strong>,
                })}
              </p>
              <p className="text-lg text-tavyro-secondary-500">
                {t.rich("leadAdvisor", {
                  strong: (chunks) => <strong className="text-tavyro-text">{chunks}</strong>,
                })}
              </p>
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
