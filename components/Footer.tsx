export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm md:text-base">
            © TaVyro – Zürich, Schweiz
          </div>
          <div className="flex space-x-6 text-sm md:text-base">
            <a
              href="#impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#datenschutz"
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
