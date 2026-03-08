import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { isSiteLocale } from "@/config/site";
import { getCanonical, getLanguageAlternates } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

const FAQ_KEYS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const footer = await getTranslations({ locale: safeLocale, namespace: "Footer" });
  const site = await getTranslations({ locale: safeLocale, namespace: "Metadata" });

  return {
    title: footer("qaSectionTitle"),
    description: site("description"),
    alternates: {
      canonical: getCanonical(safeLocale, "faq"),
      languages: getLanguageAlternates("faq"),
    },
  };
}

export default function FaqPage() {
  const footer = useTranslations("Footer");

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-tavyro-surface to-white pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-tavyro-text text-center">
              {footer("qaSectionTitle")}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-6">
              {FAQ_KEYS.map((key) => (
                <article
                  key={key}
                  className="p-6 md:p-7 border border-tavyro-border rounded-xl bg-white shadow-sm"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-tavyro-text mb-3">
                    {footer(`faqs.${key}.question`)}
                  </h2>
                  <p className="text-tavyro-text2 leading-relaxed">
                    {footer(`faqs.${key}.answer`)}
                  </p>
                </article>
              ))}

              <div className="pt-6 text-center">
                <Link href="/" className="btn-primary inline-block">
                  {footer("home")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
