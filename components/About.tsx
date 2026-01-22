export default function About() {
  const qualifications = [
    "Mehrjährige CHRO-Erfahrung (GL/Board-Nähe, multi-site)",
    "Arbeits- und Organisationspsychologie (lic. phil.)",
    "Digitalisierung & KI im HRM (Praxisfokus)",
  ];

  const languages = [
    "Schweizerdeutsch",
    "Deutsch",
    "Englisch",
    "Französisch",
  ];

  return (
    <section id="ueber" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Über TaVyro
          </h2>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-4">
                TaVyro ist ein <strong className="text-gray-900">Zürcher Advisory</strong> für Geschäftsleitungen und Verwaltungsräte.
              </p>
              <p className="text-lg text-gray-600">
                Lead Advisor: <strong className="text-gray-900">Tam Nguyen</strong> – HR-Führung, Transformation und Executive Coaching (international & Schweiz).
              </p>
            </div>

            <div className="p-6 md:p-8 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                Qualifikationen
              </h3>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-3">
                <strong className="text-gray-900">Sprachen:</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
