import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const planKeys = ["0", "1", "2"] as const;

  return (
    <section id="angebote" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-4 text-center">
            {t("title")}
          </h2>
          
          <p className="text-center text-tavyro-text2 mb-2">
            {t("subtitle")}
          </p>
          <p className="text-center text-tavyro-text2 mb-12 font-medium">
            {t("minTerm")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {planKeys.map((key, index) => {
              const name = t(`plans.${key}.name`);
              const price = t(`plans.${key}.price`);
              const features = [
                t(`plans.${key}.features.0`),
                t(`plans.${key}.features.1`),
                t(`plans.${key}.features.2`),
              ];
              const highlighted = index === 1;

              return (
                <div
                  key={key}
                  className={`p-6 md:p-8 rounded-lg border-2 ${
                    highlighted
                      ? "border-tavyro-brand-500 bg-tavyro-surface shadow-lg"
                      : "border-tavyro-border bg-white hover:shadow-md transition-shadow"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-tavyro-text mb-4">
                    {name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-bold text-tavyro-brand-500">
                      {price}
                    </span>
                    <span className="text-tavyro-secondary-500 ml-2">{t("perMonth")}</span>
                  </div>
                  <ul className="space-y-3">
                    {features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-tavyro-brand-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-tavyro-text2 text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mb-12 bg-tavyro-surface border border-tavyro-border rounded-lg p-6 md:p-8 text-center">
            <p className="text-tavyro-text2 mb-2">
              <strong className="text-tavyro-text">{t("onboarding")}</strong>
            </p>
            <p className="text-tavyro-secondary-500 text-sm md:text-base">
              {t("onboardingDesc")}
            </p>
          </div>

          {/* Projektarbeit auf Stundenbasis */}
          <div className="p-6 md:p-8 bg-tavyro-tint rounded-xl border-2 border-tavyro-brand-400 shadow-md">
            <h3 className="text-2xl font-bold text-tavyro-brand-700 mb-4 text-center">
              {t("hourlyTitle")}
            </h3>
            <p className="text-tavyro-text2 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {t("hourlyDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
