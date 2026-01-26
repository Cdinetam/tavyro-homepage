"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const faqs = [
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
      question: "Für welche Organisationen ist TaVyro geeignet?",
      answer: "TaVyro arbeitet mit CEOs, Geschäftsleitungen und Verwaltungsräten in Schweizer und internationalen Organisationen – insbesondere in KMU, Scale-ups, Stiftungen sowie öffentlich geprägten Kontexten."
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
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-tavyro-brand-800 rounded-lg p-6 hover:bg-tavyro-brand-700 transition-colors">
                <h4 className="text-white font-semibold text-base md:text-lg mb-3">
                  {faq.question}
                </h4>
                <p className="text-tavyro-secondary-200 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
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
              <p>Albisriederstrasse 247</p>
              <p>8047 Zürich</p>
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
