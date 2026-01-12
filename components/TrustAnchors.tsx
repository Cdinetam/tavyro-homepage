export default function TrustAnchors() {
  const anchors = [
    "C‑Level HR Leadership auf Abruf",
    "Organisationsentwicklung & Umsetzung aus einer Hand",
    "Zürich-based, international erfahren",
    "Diskret. Klar. Wirksam.",
  ];

  return (
    <section className="section-padding bg-white border-y border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {anchors.map((anchor, index) => (
            <div
              key={index}
              className="text-center md:text-left p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm md:text-base text-gray-700 font-medium">
                {anchor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
