import { useTranslations } from "next-intl";

export default function TargetAudience() {
  const t = useTranslations("TargetAudience");

  const audiences = [
    t("items.0"),
    t("items.1"),
    t("items.2"),
    t("items.3"),
    t("items.4"),
  ];

  return (
    <section id="zielgruppe" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            {t("title")}
          </h2>
          
          <p className="text-xl text-tavyro-text2 mb-12">
            {t.rich("subtitle", {
              strong: (chunks) => <strong className="text-tavyro-text">{chunks}</strong>,
            })}
          </p>

          <div className="p-8 md:p-10 bg-tavyro-tint rounded-xl border-2 border-tavyro-border shadow-md">
            <ul className="space-y-4 text-left">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-start text-tavyro-text text-lg">
                  <span className="mr-4 text-tavyro-brand-500 font-bold text-xl flex-shrink-0">•</span>
                  <span className="font-medium">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
