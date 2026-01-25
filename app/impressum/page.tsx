import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-tavyro-surface to-white pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-tavyro-text text-center">
              Impressum
            </h1>
          </div>
        </section>

        {/* Impressum Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              <h2 className="text-3xl font-bold text-tavyro-brand-700 mb-8">
                Angaben gemäss Schweizer Recht
              </h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Herausgeberin
                </h3>
                <div className="p-6 bg-tavyro-surface rounded-lg border border-tavyro-border text-tavyro-text2 leading-relaxed">
                  <p className="font-semibold text-tavyro-text mb-2">TaVyro GmbH</p>
                  <p>Albisriederstrasse 247</p>
                  <p>8047 Zürich</p>
                  <p>Schweiz</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Kontakt
                </h3>
                <div className="space-y-2 text-tavyro-text2 leading-relaxed">
                  <p>
                    <strong className="text-tavyro-text">E-Mail:</strong>{" "}
                    <a 
                      href="mailto:hello@tavyro.ch" 
                      className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors"
                    >
                      hello@tavyro.ch
                    </a>
                  </p>
                  <p>
                    <strong className="text-tavyro-text">Telefon:</strong>{" "}
                    <a 
                      href="tel:+41786868089" 
                      className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors"
                    >
                      +41 78 686 80 89
                    </a>
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Vertretungsberechtigte Person
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  Claudine Stüssi
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Handelsregistereintrag
                </h3>
                <div className="space-y-2 text-tavyro-text2 leading-relaxed">
                  <p>
                    <strong className="text-tavyro-text">Eingetragen im Handelsregister:</strong> Kanton Zürich
                  </p>
                  <p>
                    <strong className="text-tavyro-text">Rechtsform:</strong> Gesellschaft mit beschränkter Haftung (GmbH)
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Zweck der Gesellschaft
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  Fractional CHRO Services, Strategic People Advisory, Executive Coaching, 
                  HR-Beratung und Organisationsentwicklung für Geschäftsleitungen, Verwaltungsräte 
                  und Führungskräfte.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Haftungsausschluss
                </h3>
                <div className="space-y-4 text-tavyro-text2 leading-relaxed">
                  <p>
                    <strong className="text-tavyro-text">Haftung für Inhalte</strong><br />
                    Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                    Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen 
                    Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder 
                    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf 
                    eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    <strong className="text-tavyro-text">Haftung für Links</strong><br />
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                    mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                    Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                    ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
                    Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Urheberrecht
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede 
                  Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser 
                  Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                  Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Datenschutz
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  Informationen zum Datenschutz und zur Verwendung Ihrer Daten finden Sie in unserer{" "}
                  <a 
                    href="/datenschutz" 
                    className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors underline"
                  >
                    Datenschutzerklärung
                  </a>.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Streitschlichtung
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, 
                  die Sie unter{" "}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tavyro-brand-500 hover:text-tavyro-brand-700 transition-colors underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>{" "}
                  finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle 
                  sind wir nicht verpflichtet und nicht bereit.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-tavyro-brand-600 mb-4">
                  Anwendbares Recht und Gerichtsstand
                </h3>
                <p className="text-tavyro-text2 leading-relaxed">
                  Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist Zürich, Schweiz.
                </p>
              </div>

              <div className="mb-10 p-6 bg-tavyro-tint rounded-lg border border-tavyro-border">
                <p className="text-sm text-tavyro-text2 leading-relaxed">
                  <strong className="text-tavyro-text">Hinweis:</strong> Änderungen und Irrtümer vorbehalten. 
                  Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long", day: "numeric" })}
                </p>
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
