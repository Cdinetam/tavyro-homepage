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
            Echte Entwicklung beginnt innen.
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed drop-shadow-lg">
            TaVyro begleitet CEOs, Geschäftsleitungen und Verwaltungsräte als{" "}
            <strong className="text-white">Fractional CHRO / Strategic People Partner</strong> – unabhängig, umsetzungsnah und mit messbarer Wirkung.
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
              className="btn-secondary w-full sm:w-auto"
            >
              Leistungen ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
