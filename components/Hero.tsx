"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="top" className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Echte Entwicklung beginnt innen.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            TaVyro begleitet Geschäftsleitungen und Verwaltungsräte als{" "}
            <strong className="text-gray-900">Fractional CHRO / Strategic People Partner</strong> – unabhängig, umsetzungsnah und mit messbarer Wirkung.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 font-medium">
            Fractional CHRO & People Advisory für nachhaltigen Impact.
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
