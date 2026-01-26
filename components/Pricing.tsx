export default function Pricing() {
  const pricingPlans = [
    {
      name: "TaVyro Basic",
      price: "CHF 2'000",
      period: "/ Monat",
      features: [
        "GL-Sparring (z. B. 2h/Monat)",
        "Hotline für Führungskräfte",
        "Vorlagen, Reviews, kurze Impulse",
      ],
      highlighted: false,
    },
    {
      name: "TaVyro Pro",
      price: "CHF 4'000",
      period: "/ Monat",
      features: [
        "GL-Sparring 1:1 + Teilnahme an ausgewählten GL-Sitzungen",
        "Priorisierung & Steuerung zentraler HR-Themen",
        "Quartals-Roadmap + monatliches Kurzreporting",
      ],
      highlighted: true,
    },
    {
      name: "TaVyro Premium",
      price: "ab CHF 7'000",
      period: "/ Monat",
      features: [
        "Nahezu CHRO-Ersatz (fair-use, bis 4 Tage/Monat)",
        "Programmsteuerung, KPI/Pulse-Checks, Moderation",
        "Governance, heikle Fälle (Konflikte, Performance, Reorg)",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="angebote" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-4 text-center">
            Angebote (Fractional CHRO)
          </h2>
          
          <p className="text-center text-tavyro-text2 mb-2">
            Alle Modelle inkl. klarer Zusammenarbeit, Vertraulichkeit und kalkulierbarer Monatskosten.
          </p>
          <p className="text-center text-tavyro-text2 mb-12 font-medium">
            Mindestlaufzeit: 3 Monate.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 rounded-lg border-2 ${
                  plan.highlighted
                    ? "border-tavyro-brand-500 bg-tavyro-surface shadow-lg"
                    : "border-tavyro-border bg-white hover:shadow-md transition-shadow"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-tavyro-text mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-tavyro-brand-500">
                    {plan.price}
                  </span>
                  <span className="text-tavyro-secondary-500 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
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
                      <span className="text-tavyro-text2 text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projektarbeit auf Stundenbasis */}
          <div className="mb-12 p-6 md:p-8 bg-tavyro-tint rounded-xl border-2 border-tavyro-brand-400 shadow-md">
            <h3 className="text-2xl font-bold text-tavyro-brand-700 mb-4 text-center">
              Projektarbeit auf Stundenbasis
            </h3>
            <p className="text-tavyro-text2 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Für klar abgegrenzte Vorhaben ist eine Zusammenarbeit auf Stundenbasis möglich. 
              Voraussetzung ist ein definierter Umfang (Ziel, Ergebnis, Zeitfenster). Aufwand und 
              Wirkung bleiben transparent; Entscheidungen werden faktenbasiert vorbereitet.
            </p>
          </div>

          <div className="bg-tavyro-surface border border-tavyro-border rounded-lg p-6 md:p-8 text-center">
            <p className="text-tavyro-text2 mb-2">
              <strong className="text-tavyro-text">Onboarding (einmalig): CHF 4&apos;000</strong>
            </p>
            <p className="text-tavyro-secondary-500 text-sm md:text-base">
              HR Health Check inkl. priorisiertem Massnahmenplan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
