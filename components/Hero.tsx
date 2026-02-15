"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Hintergrundbild ohne Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t("headline")}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 leading-relaxed drop-shadow-lg">
            {t.rich("subheadline", {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>,
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/erstgespraech-buchen"
              className="btn-primary w-full sm:w-auto text-center"
            >
              {t("ctaPrimary")}
            </Link>
            <button
              onClick={() => scrollToSection("leistungen")}
              className="btn-secondary w-full sm:w-auto"
            >
              {t("ctaSecondary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
