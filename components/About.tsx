import QuoteBanner from "@/components/QuoteBanner";

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

            <div className="bg-tavyro-surface rounded-lg border border-tavyro-border overflow-hidden">
              <h3 className="text-lg md:text-xl font-semibold text-white bg-tavyro-brand-500 px-6 py-3">
                Ausbildungen & Qualifikationen
              </h3>
              <ul className="space-y-3 list-disc list-inside text-tavyro-text2 p-6">
                {qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>

            <QuoteBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
