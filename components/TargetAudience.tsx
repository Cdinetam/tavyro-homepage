export default function TargetAudience() {
  const audiences = [
    "KMU & Familienunternehmen",
    "PE-Portfoliofirmen",
    "Scale-ups (Tech, AI, Digital)",
  ];

  return (
    <section id="zielgruppe" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Für wen
          </h2>
          
          <p className="text-xl text-gray-700 mb-12">
            Für Unternehmen, die People & Organisation strategisch stärken möchten –{" "}
            <strong className="text-gray-900">ohne</strong> eine Vollzeit-CHRO-Rolle.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-900 font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
