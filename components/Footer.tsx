export default function Footer() {
  return (
    <footer className="bg-tavyro-brand-900 text-tavyro-secondary-200 py-8 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-sm md:text-base">
              © TaVyro – Zürich, Schweiz
            </div>
            <div className="flex items-center gap-3 text-sm">
              <a 
                href="mailto:hello@tavyro.ch" 
                className="hover:text-white transition-colors"
              >
                E-Mail
              </a>
              <span className="text-tavyro-secondary-700">|</span>
              <a 
                href="tel:+41786868089" 
                className="hover:text-white transition-colors"
              >
                Telefon
              </a>
            </div>
          </div>
          <div className="flex space-x-6 text-sm md:text-base">
            <a
              href="#impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </a>
            <span className="text-tavyro-secondary-700">|</span>
            <a
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
