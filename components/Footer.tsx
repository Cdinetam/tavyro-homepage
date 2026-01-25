"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-tavyro-brand-900 text-tavyro-secondary-200 py-12 md:py-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          
          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white font-medium">TaVyro GmbH</p>
              <p>Albisriederstrasse 247</p>
              <p>8047 Zürich</p>
              <p className="mt-4">
                <a 
                  href="mailto:hello@tavyro.ch" 
                  className="hover:text-white transition-colors"
                >
                  hello@tavyro.ch
                </a>
              </p>
              <p>
                <a 
                  href="tel:+41786868089" 
                  className="hover:text-white transition-colors"
                >
                  +41 78 686 80 89
                </a>
              </p>
            </div>
          </div>

          {/* Sitemap / Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/" 
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#leistungen"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("leistungen");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a 
                  href="#angebote"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("angebote");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Angebote
                </a>
              </li>
              <li>
                <a 
                  href="#ueber"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("ueber");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Über TaVyro
                </a>
              </li>
              <li>
                <a 
                  href="/erstgespraech-buchen" 
                  className="hover:text-white transition-colors"
                >
                  Erstgespräch buchen
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/impressum" 
                  className="hover:text-white transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a 
                  href="/datenschutz" 
                  className="hover:text-white transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom - Copyright */}
        <div className="pt-8 border-t border-tavyro-brand-700 text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} TaVyro GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
