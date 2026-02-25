import { siteConfig, type SiteLocale } from "@/config/site";
import { getCanonical } from "@/lib/seo";
import JsonLd from "./JsonLd";

type FaqItem = {
  question: string;
  answer: string;
};

type StructuredDataProps = {
  locale: SiteLocale;
  description: string;
  faqItems: FaqItem[];
};

function getServiceNames(locale: SiteLocale): string[] {
  if (locale === "en") {
    return [
      "HR support for executive teams",
      "HR advisory for Swiss SMEs",
      "CEO sparring",
      "HR strategy",
      "Interim HR leadership (Fractional CHRO)",
      "HR digitalization advisory (HRIS/People Analytics)",
    ];
  }

  return [
    "HR Unterstützung Geschäftsleitung",
    "HR Beratung KMU Schweiz",
    "HR Sparring CEO",
    "HR Strategie KMU",
    "HR Interim Lösung (Fractional CHRO)",
    "HR Digitalisierung Beratung (HRIS/People Analytics)",
  ];
}

export default function StructuredData({
  locale,
  description,
  faqItems,
}: StructuredDataProps) {
  const canonicalUrl = getCanonical(locale);
  const hasValidLinkedin = !siteConfig.social.linkedin.includes("REPLACE_WITH");
  const hasValidPhone = !siteConfig.contact.phone.includes("X");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}#organization`,
    name: siteConfig.brand,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo-tavyro.svg`,
    email: siteConfig.contact.email,
    ...(hasValidPhone ? { telephone: siteConfig.contact.phone } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    ...(hasValidLinkedin ? { sameAs: [siteConfig.social.linkedin] } : {}),
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}#professional-service`,
    name: siteConfig.brand,
    legalName: siteConfig.legalName,
    url: canonicalUrl,
    inLanguage: locale,
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    description,
    provider: {
      "@id": `${siteConfig.siteUrl}#organization`,
    },
    serviceType: [
      "CHRO-as-a-Service",
      "Fractional CHRO",
      "HR Governance",
      "Executive Advisory & Sparring",
      "HR Transformation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "en" ? "Services" : "Leistungen",
      itemListElement: getServiceNames(locale).map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
        },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd id="organization-jsonld" data={organization} />
      <JsonLd id="professional-service-jsonld" data={professionalService} />
      <JsonLd id="faq-jsonld" data={faqPage} />
    </>
  );
}
