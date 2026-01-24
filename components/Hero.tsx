"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Hintergrundbild */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-secondary-50/90"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-700 mb-6 leading-tight drop-shadow-sm">
            Echte Entwicklung beginnt innen.
          </h1>
          
          <p className="text-xl md:text-2xl text-accent-800 mb-12 leading-relaxed drop-shadow-sm">
            TaVyro begleitet CEOs, Geschäftsleitungen und Verwaltungsräte als{" "}
            <strong className="text-secondary-700">Fractional CHRO / Strategic People Partner</strong> – unabhängig, umsetzungsnah und mit messbarer Wirkung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/erstgespraech-buchen"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Erstgespräch buchen
            </a>
            <button
              onClick={() => scrollToSection("leistungen")}
              className="btn-secondary w-full sm:w-auto bg-white/95"
            >
              Leistungen ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
