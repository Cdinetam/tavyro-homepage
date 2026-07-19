import { useTranslations } from "next-intl";

export default function FractionalChroIntro() {
  const t = useTranslations("FractionalChroIntro");

  return (
    <section id="fractional-chro-intro" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-6">
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
