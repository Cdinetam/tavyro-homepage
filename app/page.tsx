import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import TargetAudience from "@/components/TargetAudience";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TaVyro",
  url: "https://tavyro.ch",
  areaServed: "CH",
  description:
    "HR Unterstützung für Geschäftsleitung und CEO in Schweizer KMU: Fractional CHRO (CHROaaS), HR Strategie, HR Governance, Executive Sparring, HR Digitalisierung (HRIS/People Analytics).",
  serviceType: [
    "CHRO-as-a-Service",
    "Fractional CHRO",
    "HR Governance",
    "Executive Coaching",
    "HR Transformation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR Unterstützung Geschäftsleitung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR Beratung KMU Schweiz" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR Sparring CEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR Strategie KMU" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR Interim Lösung (Fractional CHRO)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HR Digitalisierung Beratung (HRIS/People Analytics)" } },
    ],
  },
};

export default function Home() {
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
