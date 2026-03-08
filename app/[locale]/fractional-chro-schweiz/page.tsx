import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") {
    return {};
  }

  return {
    title: "Fractional CHRO Schweiz | Strategische HR-Führung auf C-Level | TaVyro",
    description:
      "Fractional CHRO in der Schweiz für KMU, Familienunternehmen und PE-Portfoliofirmen: strategische HR-Führung, Governance, Reorganisation und Executive Advisory.",
    alternates: {
      canonical: `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
      languages: {
        "de-CH": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
        en: `${siteConfig.siteUrl}/en/fractional-chro-switzerland`,
        "x-default": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
      },
    },
  };
}

export default async function FractionalChroSchweizPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "de") {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 md:pt-40 pb-16 md:pb-24 bg-white">
        <section className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-tavyro-text mb-6">
              Fractional CHRO Schweiz
            </h1>
            <p className="text-lg md:text-xl text-tavyro-text2 mb-8 leading-relaxed">
              TaVyro unterstützt CEOs, Geschäftsleitungen und Verwaltungsräte als
              externer strategischer People-Partner. Sie erhalten CHRO-Kompetenz
              auf C-Level, ohne eine Vollzeitfunktion aufbauen zu müssen.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-tavyro-text mb-4">
              Wann ein Fractional CHRO sinnvoll ist
            </h2>
            <ul className="space-y-3 text-tavyro-text2 mb-10">
              <li>• Bei Wachstum, Reorganisation oder Nachfolgesituationen</li>
              <li>• Wenn Führungs- und Organisationsfragen blockieren</li>
              <li>• Wenn HR-Governance und Compliance professionalisiert werden sollen</li>
              <li>• Wenn Prioritäten in People & Organisation schneller umgesetzt werden müssen</li>
            </ul>
            <div className="p-6 bg-tavyro-surface border border-tavyro-border rounded-lg">
              <p className="text-tavyro-text2 mb-4">
                Vorgehen: Standortbestimmung, Priorisierung, klare Roadmap und
                wirksame Umsetzung gemeinsam mit Ihrer Führung.
              </p>
              <Link href="/erstgespraech-buchen" className="btn-primary inline-block">
                Erstgespräch buchen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
