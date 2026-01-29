export default function Services() {
  const services = [
    {
      title: "Fractional CHRO / Strategic People Partner",
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
      title: "Organisation & Transformation (Projekt)",
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
      title: "Executive Coaching",
      description:
        "1:1 Sparring für Geschäftsleitung und Führungskräfte zu Führung, Organisation, Management und Kommunikation. Fokus: klare Entscheidungen, Priorisierung, Rollenklarheit und souveräner Umgang mit anspruchsvollen Situationen.",
      items: [
        "Rollenwechsel und neue Erwartungen (Führung, Stakeholder, Verantwortung)",
        "Veränderung führen: Alignment, Umsetzung, Umgang mit Widerständen",
        "Schwierige Gespräche und Konfliktklärung (klar, deeskalierend, wirksam)",
        "Performance & Führung: Ziele, Delegation, Feedback, Routinen",
        "Team- und Schnittstellenführung: Verantwortung, Zusammenarbeit, Performance",
      ],
    },
    {
      title: "Add-ons: Employee Care Line",
      description:
        "Die Employee Care Line ist ein vertrauliches Gesprächsangebot für Mitarbeitende im Unternehmen. Sie dient als neutrale Anlaufstelle zur Orientierung und Entlastung und wird durch TaVyro durchgeführt. Es werden keine Individualfälle an das Unternehmen zurückgemeldet; Rückmeldungen erfolgen ausschliesslich in anonymisierter und aggregierter Form. Bereits als eigenständiges Angebot entfaltet die Employee Care Line Wirkung, weil Mitarbeitende ein diskretes, professionelles Gesprächsfenster erhalten, als Signal von Wertschätzung, psychologischer Sicherheit und aktiver Fürsorge.",
    },
  ];

  return (
    <section id="leistungen" className="section-padding bg-gradient-to-b from-white to-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-brand-700 mb-12 text-center">
            Leistungen
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-tavyro-border hover:border-tavyro-brand-400 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="bg-tavyro-brand-900 px-6 md:px-8 py-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-tavyro-text2 mb-4 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  {service.items && (
                    <ul className="list-none space-y-2 mt-auto">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-tavyro-text2 text-sm md:text-base"
                        >
                          <span className="mr-2 text-tavyro-brand-500 font-semibold text-base">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
