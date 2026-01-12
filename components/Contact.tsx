"use client";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="kontakt" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kontakt
          </h2>

          <p className="text-xl text-gray-700 mb-12">
            Lassen Sie uns in einem kurzen Erstgespräch klären, wo der grösste Hebel liegt.
          </p>

          <div className="space-y-6">
            <button
              onClick={scrollToTop}
              className="btn-primary text-lg px-8 py-4"
            >
              Erstgespräch buchen
            </button>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Alternativ: E-Mail | Telefon | LinkedIn
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <a href="mailto:kontakt@tavyro.ch" className="hover:text-gray-900 transition-colors">
                  E-Mail
                </a>
                <span className="text-gray-300">|</span>
                <a href="tel:+41XXXXXXXXX" className="hover:text-gray-900 transition-colors">
                  Telefon
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="https://linkedin.com/company/tavyro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
