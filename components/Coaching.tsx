export default function Coaching() {
  const coachingOptions = [
    {
      type: "Einzelcoaching GL",
      price: "CHF 250",
      duration: "/ 50 Min.",
    },
    {
      type: "Einzelcoaching Führungskräfte",
      price: "CHF 200",
      duration: "/ 50 Min.",
    },
  ];

  return (
    <section id="coaching" className="section-padding bg-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-12 text-center">
            Executive Coaching (Preise)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {coachingOptions.map((option, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-white rounded-lg border border-tavyro-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold text-tavyro-text mb-4">
                  {option.type}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-2xl md:text-3xl font-bold text-tavyro-brand-500">
                    {option.price}
                  </span>
                  <span className="text-tavyro-secondary-500 ml-2">{option.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
