import { useTranslations } from "next-intl";

export default function TrustAnchors() {
  const t = useTranslations("TrustAnchors");

  const anchors = [t("items.0"), t("items.1"), t("items.2"), t("items.3")];

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
