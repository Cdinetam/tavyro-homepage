import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import TargetAudience from "@/components/TargetAudience";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const t = useTranslations("Metadata");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TaVyro",
    url: "https://tavyro.ch",
    areaServed: "CH",
    description: t("description"),
    serviceType: [
      "CHRO-as-a-Service",
      "Fractional CHRO",
      "HR Governance",
      "Executive Advisory & Sparring",
      "HR Transformation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HR Unterstützung Geschäftsleitung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HR Beratung KMU Schweiz",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "HR Sparring CEO" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "HR Strategie KMU" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HR Interim Lösung (Fractional CHRO)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HR Digitalisierung Beratung (HRIS/People Analytics)",
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
