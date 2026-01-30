"use client";

import { useState } from "react";

export default function Footer() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Weshalb ist es wichtig, dass jetzt etwas unternommen wird?",
      answer: "Weil nachhaltiger Fortschritt Zeit braucht. Die grössten Kosten liegen selten im Projektbudget, sondern in verlorener Zeit, in Unsicherheit und in verzögerten Entscheidungen. Veränderungen in Führung, Organisation und Kultur wirken nicht sofort, sondern müssen aufgebaut und verankert werden. Wer zu lange wartet, verliert nicht nur Momentum, sondern gefährdet langfristig die Entwicklungsfähigkeit und damit die Zukunftsfähigkeit der Unternehmung."
    },
    {
      question: "Arbeitet TaVyro auf Stundenbasis oder mit Retainern?",
      answer: "Beides. Für klar abgegrenzte Vorhaben ist eine projektbezogene Zusammenarbeit auf Stundenbasis möglich. Für nachhaltige Wirkung, Priorisierung und Umsetzung arbeitet TaVyro in der Regel mit klar definierten Projekten oder Retainern. Auch wenn TaVyro extern mandatierter Partner ist, arbeitet sich TaVyro in die Organisation ein und wird im Alltag wie ein Teil der Firma wirksam, versteht und trägt die Unternehmenskultur, bleibt dabei jedoch neutral und objektiv."
    },
    {
      question: "Was umfasst Executive Coaching bei TaVyro?",
      answer: "Executive Coaching bei TaVyro ist 1:1 Sparring für CEO-, GL- und Führungsebene. Im Fokus stehen klare Entscheidungen, Priorisierung, Rollenklarheit, Kommunikation sowie der Umgang mit anspruchsvollen Situationen (z. B. Konflikte, Rollenwechsel, Veränderung)."
    },
    {
      question: "In welchen Situationen wird TaVyro typischerweise beigezogen?",
      answer: "Wenn Entscheidungen anstehen, Rollen und Verantwortlichkeiten zu klären sind oder Führung, Organisation und HR gezielt weiterentwickelt werden sollen – insbesondere in Wachstums-, Veränderungs- oder Übergangsphasen."
    },
    {
      question: "Wie stellt TaVyro Vertraulichkeit sicher?",
      answer: "Vertraulichkeit ist zentral. Auf Wunsch wird eine Vertraulichkeitsvereinbarung (NDA) abgeschlossen. Inhalte aus Mandaten und Gesprächen werden nicht weitergegeben; Rückmeldungen an Unternehmen erfolgen – falls vereinbart – ausschliesslich anonymisiert und aggregiert."
    },
    {
      question: "Kann die Employee Care Line auch als einzelnes Angebot eingesetzt werden?",
      answer: "Ja. Bereits als eigenständiges Angebot entfaltet sie Wirkung, da Mitarbeitende eine diskrete Anlaufstelle erhalten und Wertschätzung, psychologische Sicherheit und Fürsorge erlebbar werden."
    },
    {
      question: "Was unterscheidet TaVyro von grossen Beratungsunternehmen?",
      answer: "TaVyro arbeitet konsequent an Ihren Zielen und Ihrem Kontext ausgerichtet und nicht nach einem Standard-Playbook. Viele Beratungsmodelle sind team- und prozessgetrieben. Senior Partner sind punktuell involviert, die operative Ausarbeitung erfolgt oft durch Rollen unterschiedlicher Seniorität. Bei TaVyro erhalten Sie eine konstante Ansprechperson auf C-Level-Niveau von der Diagnose bis zur Umsetzung. Durch ein strukturiertes Onboarding wird TaVyro Teil Ihrer Organisation, versteht Mitarbeitende, Kultur, Dynamiken und Entscheidwege und bleibt dabei extern, neutral und wirksam. Ergebnis sind massgeschneiderte Lösungen, die nicht nur konzipiert, sondern konsequent umgesetzt werden."
    },
    {
      question: "Wofür steht TaVyro in seinem Kern?",
      answer: "TaVyro steht für Herz, Vision und Verankerung. Fortschritt entsteht dort, wo Menschen mitgenommen werden, Ziele klar sind und Veränderungen Zeit haben, sich in der Organisation zu verankern. Genau diese Verbindung aus Haltung, Richtung und Wirkung bildet die Grundlage nachhaltiger Unternehmensentwicklung."
    },
    {
      question: "Was bedeutet Fractional CHRO?",
      answer: "Ein Fractional CHRO ist eine strategische HR-Leitungsfunktion auf Mandatsbasis oder Teilzeit. Unternehmen erhalten CHRO-Kompetenz auf C-Level-Niveau, ohne eine Vollzeitstelle zu besetzen. Ein Fractional CHRO arbeitet eng mit der Geschäftsleitung zusammen, übernimmt Verantwortung für People- und Organisationsthemen und stärkt Struktur, Entscheidungsqualität und Umsetzungskraft, bleibt dabei jedoch extern und unabhängig. TaVyro arbeitet sich in Ihre Organisation ein, versteht Kultur, Mitarbeitende, Dynamiken und Entscheidungswege und setzt gemeinsam mit Ihnen wirksame Lösungen um. Häufig wird dieser Ansatz auch als CHRO as a Service, externe HR-Leitung oder strategische HR-Beratung für die Geschäftsleitung verstanden."
    }
  ];

  return (
    <footer className="bg-tavyro-brand-900 text-tavyro-secondary-200 py-12 md:py-16">
      <div className="container-custom">
        {/* Q&A Section */}
        <div className="mb-12 pb-12 border-b border-tavyro-brand-700">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Q&A
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-tavyro-brand-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-tavyro-brand-700 transition-colors"
                >
                  <h4 className="text-white font-semibold text-base md:text-lg pr-4">
                    {faq.question}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-tavyro-secondary-200 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          
          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white font-medium">TaVyro GmbH</p>
              <p>Albisriederstrasse 248</p>
              <p>CH-8047 Zürich</p>
              <p className="mt-4">
                <a 
                  href="mailto:hello@tavyro.ch" 
                  className="hover:text-white transition-colors"
                >
                  hello@tavyro.ch
                </a>
              </p>
              <p>
                <a 
                  href="tel:+41786868089" 
                  className="hover:text-white transition-colors"
                >
                  +41 78 686 80 89
                </a>
              </p>
            </div>
          </div>

          {/* Sitemap / Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/" 
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#leistungen"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("leistungen");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a 
                  href="#angebote"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("angebote");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Angebote
                </a>
              </li>
              <li>
                <a 
                  href="#ueber"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("ueber");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Über TaVyro
                </a>
              </li>
              <li>
                <a 
                  href="/erstgespraech-buchen" 
                  className="hover:text-white transition-colors"
                >
                  Erstgespräch buchen
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/impressum" 
                  className="hover:text-white transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a 
                  href="/datenschutz" 
                  className="hover:text-white transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom - Copyright */}
        <div className="pt-8 border-t border-tavyro-brand-700 text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} TaVyro GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
