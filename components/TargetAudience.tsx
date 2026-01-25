export default function TargetAudience() {
  const audiences = [
    "KMU & Familienunternehmen",
    "PE-Portfoliofirmen",
    "Scale-ups (Tech, AI, Digital)",
    "Gemeinwohl-Organisationen (Heime, soziale Einrichtungen, Stiftungen/NPOs)",
    "Öffentlich-rechtliche Organisationen & staatsnahe Betriebe",
  ];

  return (
    <section id="zielgruppe" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            Für wen
          </h2>
          
          <p className="text-xl text-tavyro-text2 mb-12">
            Für Unternehmen, die People & Organisation strategisch stärken möchten –{" "}
            <strong className="text-tavyro-text">ohne</strong> eine Vollzeit-CHRO-Rolle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="p-6 bg-tavyro-tint rounded-lg border border-tavyro-border hover:shadow-md transition-shadow"
              >
                <p className="text-tavyro-text font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
