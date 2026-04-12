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
  if (locale !== "en") {
    return {};
  }

  return {
    title: "Fractional CHRO Switzerland | Strategic HR Leadership at C-Level | TaVyro",
    description:
      "Fractional CHRO in Switzerland for SMEs, family businesses and PE portfolio companies: strategic HR leadership, governance, reorganization and executive advisory.",
    alternates: {
      canonical: `${siteConfig.siteUrl}/en/fractional-chro-switzerland`,
      languages: {
        "de-CH": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
        en: `${siteConfig.siteUrl}/en/fractional-chro-switzerland`,
        "x-default": `${siteConfig.siteUrl}/de/fractional-chro-schweiz`,
      },
    },
  };
}

export default async function FractionalChroSwitzerlandPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 md:pt-40 pb-16 md:pb-24 bg-white">
        <section className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-tavyro-text mb-6">
              Fractional CHRO Switzerland
            </h1>
            <p className="text-lg md:text-xl text-tavyro-text2 mb-8 leading-relaxed">
              TaVyro supports CEOs, executive teams and boards as an external
              strategic people partner. You gain C-level CHRO capability without
              hiring a full-time role.
            </p>
            <p className="text-base text-tavyro-text2 mb-8 leading-relaxed">
              For Zurich as a business base and a fuller view of the Fractional
              CHRO model, see the{" "}
              <Link
                href="/fractional-chro-zurich"
                className="text-tavyro-brand-700 font-medium underline underline-offset-4 hover:text-tavyro-brand-900"
              >
                Fractional CHRO Zurich
              </Link>{" "}
              page.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-tavyro-text mb-4">
              When a Fractional CHRO is the right fit
            </h2>
            <ul className="space-y-3 text-tavyro-text2 mb-10">
              <li>• During growth, reorganization or leadership transitions</li>
              <li>• When leadership and organizational issues slow execution</li>
              <li>• When HR governance and compliance need to be professionalized</li>
              <li>• When People & Organization priorities must move faster</li>
            </ul>
            <div className="p-6 bg-tavyro-surface border border-tavyro-border rounded-lg">
              <p className="text-tavyro-text2 mb-4">
                Approach: assessment, prioritization, clear roadmap and effective
                execution together with your leadership team.
              </p>
              <Link href="/erstgespraech-buchen" className="btn-primary inline-block">
                Book consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
