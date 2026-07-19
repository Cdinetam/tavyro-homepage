import { useTranslations } from "next-intl";

export default function FractionalChroIntro() {
  const t = useTranslations("FractionalChroIntro");

  return (
    <section id="fractional-chro-intro" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-tavyro-brand-600">
            {t("eyebrow")}
          </p>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold text-tavyro-text">
            {t("title")}
          </h2>
          <div className="space-y-5 text-left md:text-center">
            <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
              {t("p1")}
            </p>
            <p className="text-lg md:text-xl text-tavyro-text2 leading-relaxed">
              {t.rich("p2", {
                strong: (chunks) => (
                  <strong className="font-semibold text-tavyro-text">
                    {chunks}
                  </strong>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
