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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            Was wir bewirken
          </h2>
          
          <p className="text-xl text-tavyro-text2 mb-12">
            Wir stärken Ihr Unternehmen dort, wo Menschen, Kultur und Strategie zusammenkommen.
          </p>

          <div className="p-8 md:p-10 bg-white rounded-xl border-2 border-tavyro-border shadow-md">
            <ul className="space-y-4 text-left">
              {impacts.map((impact, index) => (
                <li key={index} className="flex items-start text-tavyro-text text-lg">
                  <span className="mr-4 text-tavyro-brand-500 font-bold text-xl flex-shrink-0">•</span>
                  <span className="font-medium">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
