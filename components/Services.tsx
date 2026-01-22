export default function Services() {
  const services = [
    {
      title: "A) Fractional CHRO / Strategic People Partner",
      description:
        "Externe HR-Führungsrolle für Geschäftsleitung und Verwaltungsrat:",
      items: [
        "Die Geschäftsleitung Personal und Organisationsfragen entlastet und berät",
        "HR-Strategien entwickelt und umsetzt",
        "Komplexe Fälle begleitet (Kündigungen, Konflikte, Umstrukturierungen)",
        "Sicherstellt, dass Sie arbeitsrechtlich sauber unterwegs sind",
      ],
    },
    {
      title: "B) Organisation & Transformation (Projekt)",
      description:
        "Analyse bis Umsetzung – pragmatisch, messbar, passend zur Organisation:",
      items: [
        "Operating Model, Rollen/RACI, HR-Prozess-Blueprint",
        "Reorganisationen, Change- und Kommunikationspakete",
        "Policies/Reglemente, arbeitsrechtlich saubere Umsetzung",
        "HRIS, People Analytics und KI-Use-Cases im HR",
      ],
    },
    {
      title: "C) Executive Coaching",
      description:
        "1:1 Sparring für GL und Führungskräfte: Entscheide, Wirkung, Rollenwechsel, Konflikte.",
    },
    {
      title: "D) Employee Care Line (Add-on oder separat)",
      description:
        "Diskrete Sprechstunde für Mitarbeitende. Aggregiertes Feedback stärkt Kultur und psychologische Sicherheit – ohne Vertraulichkeit zu verletzen.",
    },
  ];

  return (
    <section id="leistungen" className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-12 text-center">
            Leistungen
          </h2>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-white rounded-xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-secondary-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-accent-700 mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.items && (
                  <ul className="list-none space-y-2 mt-4">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-accent-700"
                      >
                        <span className="mr-3 text-primary-500 font-semibold text-lg">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
