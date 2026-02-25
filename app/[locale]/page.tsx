import type { Metadata } from "next";
import { isSiteLocale, siteConfig } from "@/config/site";
import { getCanonical, getLanguageAlternates } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import TargetAudience from "@/components/TargetAudience";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({ locale: safeLocale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: siteConfig.description[safeLocale] ?? t("description"),
    alternates: {
      canonical: getCanonical(safeLocale),
      languages: getLanguageAlternates(),
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const safeLocale = isSiteLocale(locale) ? locale : "de";
  const t = await getTranslations({ locale: safeLocale, namespace: "Metadata" });
  const footerT = await getTranslations({ locale: safeLocale, namespace: "Footer" });

  const faqKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8"] as const;
  const faqItems = faqKeys.map((key) => ({
    question: footerT(`faqs.${key}.question`),
    answer: footerT(`faqs.${key}.answer`),
  }));

  return (
    <main className="min-h-screen">
      <StructuredData
        locale={safeLocale}
        description={siteConfig.description[safeLocale] ?? t("description")}
        faqItems={faqItems}
      />
      <Navigation />
      <Hero />
      <Impact />
      <TargetAudience />
      <Services />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
