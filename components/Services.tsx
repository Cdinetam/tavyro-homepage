export default function Services() {
  const services = [
    {
      title: "A) Fractional CHRO / Strategic People Partner",
      description:
        "Externe HR-Führungsrolle für GL und VR: People-Strategie, Governance, Leadership, Kultur, komplexe Fälle, Aufbau/Weiterentwicklung von HR-Strukturen und HR-Systemen.",
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
    <section id="leistungen" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Leistungen
          </h2>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.items && (
                  <ul className="list-none space-y-2 mt-4">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-700"
                      >
                        <span className="mr-3 text-gray-900 font-semibold">
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
