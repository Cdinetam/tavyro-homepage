import Image from "next/image";
import { useTranslations } from "next-intl";
import forWhomImage from "@/images/TaVyro Für wen.jpg";

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-4 text-center">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-tavyro-text2 mb-8 max-w-3xl mx-auto text-center">
            {t.rich("subtitle", {
              strong: (chunks) => <strong className="text-tavyro-text">{chunks}</strong>,
            })}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <ul className="space-y-4 text-left">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-start text-tavyro-text text-base md:text-lg">
                  <span className="mr-3 text-tavyro-brand-500 font-bold text-lg flex-shrink-0">•</span>
                  <span className="font-medium">{audience}</span>
                </li>
              ))}
            </ul>
            <div className="relative w-full h-64 md:h-80 lg:h-full lg:min-h-[300px] rounded-lg overflow-hidden border border-tavyro-border shadow-sm">
              <Image
                src={forWhomImage}
                alt="TaVyro Für wen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
