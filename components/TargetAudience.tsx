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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            Für wen
          </h2>
          
          <p className="text-xl text-tavyro-text2 mb-12">
            Für Unternehmen, die People & Organisation strategisch stärken möchten –{" "}
            <strong className="text-tavyro-text">ohne</strong> eine Vollzeit-CHRO-Rolle.
          </p>

          <div className="p-8 md:p-10 bg-tavyro-tint rounded-xl border-2 border-tavyro-border shadow-md">
            <ul className="space-y-4 text-left">
              {audiences.map((audience, index) => (
                <li key={index} className="flex items-start text-tavyro-text text-lg">
                  <span className="mr-4 text-tavyro-brand-500 font-bold text-xl flex-shrink-0">•</span>
                  <span className="font-medium">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
