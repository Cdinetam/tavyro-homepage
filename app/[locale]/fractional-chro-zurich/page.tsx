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
    title: "Fractional CHRO Zurich | Strategic HR Leadership for SMEs | TaVyro",
    description:
      "Fractional CHRO in Zurich for SMEs, family businesses and scale-ups. Get C-level HR leadership, governance and execution without a full-time CHRO hire.",
    alternates: {
      canonical: `${siteConfig.siteUrl}/en/fractional-chro-zurich`,
      languages: {
        en: `${siteConfig.siteUrl}/en/fractional-chro-zurich`,
        "x-default": `${siteConfig.siteUrl}/en/fractional-chro-zurich`,
      },
    },
  };
}

export default async function FractionalChroZurichPage({ params }: Props) {
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
              Fractional CHRO Zurich
            </h1>
            <p className="text-lg md:text-xl text-tavyro-text2 mb-8 leading-relaxed">
              TaVyro supports CEOs, executive teams and boards in Zurich as an
              external strategic people partner. You get senior CHRO capability
              on demand without committing to a full-time CHRO role.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-tavyro-text mb-4">
              Typical situations where we create impact
            </h2>
            <ul className="space-y-3 text-tavyro-text2 mb-10">
              <li>• Rapid growth with unclear people priorities</li>
              <li>• Reorganization, restructuring or leadership transitions</li>
              <li>• Need for stronger HR governance and labor-law compliance</li>
              <li>• Too many HR topics on the CEO and executive agenda</li>
            </ul>
            <div className="p-6 bg-tavyro-surface border border-tavyro-border rounded-lg">
              <p className="text-tavyro-text2 mb-4">
                We combine strategic HR direction with pragmatic execution:
                assessment, prioritization, roadmap and implementation with your
                leadership team.
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
