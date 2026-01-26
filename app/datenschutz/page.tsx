import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-tavyro-surface to-white pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-tavyro-text text-center">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Datenschutz Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-lg text-tavyro-text2 mb-12 text-center italic">
              Datenschutzerklärung (Schweiz) – Kurzfassung
            </p>

            <div className="space-y-10">
              
              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  1. Verantwortlicher
                </h2>
                <div className="p-4 bg-tavyro-surface rounded-lg border border-tavyro-border">
                  <p className="text-tavyro-text2 leading-relaxed">
                    <strong className="text-tavyro-text">TaVyro GmbH</strong><br />
                    Albisriederstrasse 248, CH-8047 Zürich, Schweiz<br />
                    E-Mail: <a href="mailto:hello@tavyro.ch" className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors">hello@tavyro.ch</a>
                  </p>
                </div>
              </div>

              {/* 2. Welche Daten wir bearbeiten und wofür */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  2. Welche Daten wir bearbeiten und wofür
                </h2>
                <div className="text-tavyro-text2 leading-relaxed space-y-4">
                  <p>
                    Wenn Sie unsere Website besuchen oder uns kontaktieren, bearbeiten wir insbesondere:
                  </p>
                  <ul className="list-none space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-3 text-tavyro-brand-500 font-semibold">•</span>
                      <span><strong className="text-tavyro-text">Technische Daten</strong> (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seiten, Browser/OS): zur Bereitstellung, Sicherheit und Stabilität der Website.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-tavyro-brand-500 font-semibold">•</span>
                      <span><strong className="text-tavyro-text">Kommunikationsdaten</strong> (z. B. Name, E-Mail, Inhalt Ihrer Anfrage): zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme.</span>
                    </li>
                  </ul>
                  <p>
                    Wir verwenden Ihre Daten nicht für automatisierte Einzelentscheidungen oder Profiling, das zu einer erheblichen Beeinträchtigung führt.
                  </p>
                </div>
              </div>

              {/* 3. Hosting */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  3. Hosting (Vercel, USA)
                </h2>
                <p className="text-tavyro-text2 leading-relaxed">
                  Unsere Website wird bei Vercel gehostet (Vercel Inc., San Francisco, Kalifornien, USA). 
                  Dabei werden technische Daten (insbesondere IP-Adresse und Logfiles) verarbeitet, um die 
                  Website sicher und zuverlässig bereitzustellen. Eine Bearbeitung kann auch in den USA sowie 
                  in weiteren Ländern erfolgen, in denen Vercel bzw. deren Unterauftragsbearbeiter Daten verarbeiten.
                </p>
              </div>

              {/* 4. Kontaktaufnahme */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  4. Kontaktaufnahme
                </h2>
                <p className="text-tavyro-text2 leading-relaxed">
                  Wenn Sie uns per E-Mail oder via Kontaktformular kontaktieren, bearbeiten wir Ihre Angaben 
                  zur Bearbeitung Ihrer Anfrage und für allfällige Anschlussfragen. Eine Weitergabe an Dritte 
                  erfolgt nur, wenn dies zur Leistungserbringung erforderlich ist (z. B. IT-Dienstleister/Hosting) 
                  oder wir gesetzlich dazu verpflichtet sind.
                </p>
              </div>

              {/* 5. Cookies / Reichweitenmessung */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  5. Cookies / Reichweitenmessung
                </h2>
                <p className="text-tavyro-text2 leading-relaxed">
                  Wir können Cookies einsetzen, die für den Betrieb der Website erforderlich sind. 
                  Reine Besucherstatistiken (Analytics) setzen wir derzeit nur ein, falls entsprechend aktiviert; 
                  bei Einführung oder Änderung von Tracking/Analytics passen wir diese Datenschutzerklärung an.
                </p>
              </div>

              {/* 6. Aufbewahrungsdauer */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  6. Aufbewahrungsdauer
                </h2>
                <p className="text-tavyro-text2 leading-relaxed">
                  Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich 
                  ist oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </div>

              {/* 7. Ihre Rechte */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  7. Ihre Rechte
                </h2>
                <p className="text-tavyro-text2 leading-relaxed">
                  Sie haben im Rahmen des anwendbaren Datenschutzrechts insbesondere das Recht auf Auskunft, 
                  Berichtigung, Löschung/Einschränkung (soweit zulässig) sowie Herausgabe/Übertragung (soweit 
                  gesetzlich vorgesehen). Anfragen richten Sie bitte an{" "}
                  <a href="mailto:hello@tavyro.ch" className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors">hello@tavyro.ch</a>. 
                  Zudem können Sie sich an den EDÖB wenden.
                </p>
              </div>

              {/* 8. Datensicherheit */}
              <div>
                <h2 className="text-2xl font-bold text-tavyro-brand-700 mb-4">
                  8. Datensicherheit
                </h2>
                <p className="text-tavyro-text2 leading-relaxed">
                  Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen (u. a. TLS-Verschlüsselung). 
                  Ein absoluter Schutz kann nicht garantiert werden.
                </p>
              </div>

              {/* Stand */}
              <div className="pt-8 border-t border-tavyro-border">
                <p className="text-tavyro-text2 text-sm italic">
                  Stand: Januar 2026
                </p>
              </div>

            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-tavyro-border text-center">
              <a 
                href="/" 
                className="btn-primary inline-block"
              >
                Zurück zur Startseite
              </a>
            </div>

          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
