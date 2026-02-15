import { useTranslations } from "next-intl";

export default function Impact() {
  const t = useTranslations("Impact");

  const impacts = [
    t("items.0"),
    t("items.1"),
    t("items.2"),
    t("items.3"),
    t("items.4"),
  ];

  return (
    <section id="impact" className="section-padding bg-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            {t("title")}
          </h2>
          
          <p className="text-xl text-tavyro-text2 mb-12">
            {t("subtitle")}
          </p>

          <div className="p-8 md:p-10 bg-white rounded-xl border-2 border-tavyro-border shadow-md">
            <ul className="space-y-4 text-left">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-start text-tavyro-text text-lg">
                  <span className="mr-4 text-tavyro-brand-500 font-bold text-xl flex-shrink-0">•</span>
                  <span className="font-medium">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
