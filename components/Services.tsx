import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  const serviceKeys = ["0", "1", "2", "3"] as const;

  return (
    <section id="leistungen" className="section-padding bg-gradient-to-b from-white to-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-brand-700 mb-12 text-center">
            {t("title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {serviceKeys.map((key) => {
              const title = t(`items.${key}.title`);
              const description = t(`items.${key}.description`);
              // Build features list – items.3 has no features
              const features: string[] = [];
              if (key !== "3") {
                const featureKeys = key === "2" ? ["0", "1", "2", "3", "4"] : ["0", "1", "2", "3"];
                for (const fk of featureKeys) {
                  features.push(t(`items.${key}.features.${fk}`));
                }
              }

              return (
                <div
                  key={key}
                  className="bg-white rounded-xl border-2 border-tavyro-border hover:border-tavyro-brand-400 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="bg-tavyro-brand-900 px-6 md:px-8 py-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <p className="text-tavyro-text2 mb-4 leading-relaxed text-sm md:text-base">
                      {description}
                    </p>
                    {features.length > 0 && (
                      <ul className="list-none space-y-2 mt-auto">
                        {features.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-tavyro-text2 text-sm md:text-base"
                          >
                            <span className="mr-2 text-tavyro-brand-500 font-semibold text-base">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
