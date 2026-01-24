export default function Impact() {
  const impacts = [
    "Führungsqualität und Entscheidungsstärke erhöhen",
    "HR- und Compliance-Risiken minimieren",
    "Time-to-Hire und Retention verbessern",
    "Strukturen, Prozesse und HR-Systeme professionalisieren",
    "Kultur und Zusammenarbeit nachhaltig stärken",
  ];

  return (
    <section id="impact" className="section-padding bg-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6 text-center">
            Was wir bewirken
          </h2>
          
          <p className="text-xl text-tavyro-text2 mb-12 text-center">
            Wir stärken Ihr Unternehmen dort, wo Menschen, Kultur und Strategie zusammenkommen.
          </p>

          <div className="space-y-4 mb-12">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white rounded-lg border border-tavyro-border hover:shadow-md transition-shadow"
              >
                <svg
                  className="w-6 h-6 text-tavyro-brand-500 mt-0.5 mr-4 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-tavyro-text2 text-base md:text-lg">{impact}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border border-tavyro-border">
              <h3 className="text-lg font-semibold text-tavyro-text mb-3">
                Kurzfristig-pragmatisch
              </h3>
              <p className="text-tavyro-text2">
                Klarheit, Prioritäten, Risikoreduktion, Stabilisierung.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-tavyro-border">
              <h3 className="text-lg font-semibold text-tavyro-text mb-3">
                Langfristig-strategisch
              </h3>
              <p className="text-tavyro-text2">
                People-Strategie, Leadership, Kultur, Skalierung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
