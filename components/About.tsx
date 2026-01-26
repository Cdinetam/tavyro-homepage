export default function About() {
  const qualifications = [
    "Arbeits- und Organisationspsychologie (lic. phil./MSc)",
    "CAS Executive Management",
    "CAS Digitalisierung & Künstliche Intelligenz im HRM",
    "Arbeitssprache: D/E/F",
  ];

  return (
    <section id="ueber" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6 text-center">
            Über TaVyro
          </h2>

          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl text-tavyro-text2 mb-4">
                TaVyro ist ein <strong className="text-tavyro-text">Boutique Advisory mit Sitz in Zürich</strong> für CEOs, Geschäftsleitungen und Verwaltungsräte. Der Fokus liegt auf Führung, Organisation und HR-Governance sowie auf der pragmatischen Weiterentwicklung von People- und HR-Strukturen – von der Standortbestimmung über die Priorisierung bis zur Umsetzung in klaren, wirksamen Schritten.
              </p>
              <p className="text-lg text-tavyro-secondary-500">
                Lead Advisor: <strong className="text-tavyro-text">Tam Nguyen</strong> mit über 20 Jahren Erfahrung als CHRO und HR-Führungskraft in internationalen und Schweizer Unternehmen.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-tavyro-surface rounded-lg border border-tavyro-border">
              <h3 className="text-lg md:text-xl font-semibold text-tavyro-text mb-4">
                Ausbildungen & Qualifikationen
              </h3>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start text-tavyro-text2">
                    <svg
                      className="w-5 h-5 text-tavyro-brand-500 mr-3 mt-0.5 flex-shrink-0"
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
          </div>
        </div>
      </div>
    </section>
  );
}
