"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Konfiguration - Hier die URLs eintragen, wenn verfügbar
const BOOKINGS_IFRAME_URL: string = "";
const BOOKINGS_PAGE_URL: string = "";

export default function ErstgespraechBuchen() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Setze Page Title und Meta Description
    document.title = "Erstgespräch buchen | TaVyro";
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Buchen Sie Ihr 30-minütiges Erstgespräch mit TaVyro. Online via Microsoft Teams. Vertraulich, fokussiert, ohne Verkaufsdruck.");
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Desktop: 2-Column Layout, Mobile: Single Column */}
      <div className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Content */}
            <div className="space-y-12">
              {/* SECTION 1: HERO */}
              <section>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Erstgespräch buchen
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Klären wir in 30 Minuten, ob und wie TaVyro Sie als <strong>Fractional CHRO / People & Organisation Partner</strong> wirksam unterstützen kann – pragmatisch kurzfristig, nachhaltig strategisch.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                      1
                    </span>
                    <p className="text-gray-700 pt-1">
                      Schnellcheck Ihrer Situation (People, Organisation, Führung, HR-Systeme)
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                      2
                    </span>
                    <p className="text-gray-700 pt-1">
                      Erste Hypothesen & nächste Schritte – ohne Verkaufsdruck
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                      3
                    </span>
                    <p className="text-gray-700 pt-1">
                      Passungsprüfung: Bedarf, Timing, Setup (Mandat / Interim / Advisory)
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                      4
                    </span>
                    <p className="text-gray-700 pt-1">
                      Vertraulich, fokussiert, lösungsorientiert
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                  Online via Microsoft Teams | Deutsch/Englisch | Vertraulichkeit selbstverständlich
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("booking")}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Termin auswählen
                  </button>
                  <button
                    onClick={() => scrollToSection("ablauf")}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Ablauf ansehen
                  </button>
                </div>
              </section>

              {/* SECTION 2: ABLAUF */}
              <section id="ablauf" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  So läuft das Erstgespräch ab
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center font-bold text-xl mr-4 mt-1">
                      1
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Termin wählen
                      </h3>
                      <p className="text-gray-700">
                        Wählen Sie ein freies 30-Minuten-Zeitfenster im Buchungsportal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center font-bold text-xl mr-4 mt-1">
                      2
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Bestätigung & Teams-Link
                      </h3>
                      <p className="text-gray-700">
                        Nach der Buchung erhalten Sie eine Bestätigung inkl. Microsoft Teams-Meeting-Link und den wichtigsten Details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center font-bold text-xl mr-4 mt-1">
                      3
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Gespräch & nächster Schritt
                      </h3>
                      <p className="text-gray-700">
                        Wir klären Ziel, Engpass und Prioritäten. Am Ende erhalten Sie eine klare Empfehlung, ob ein nächster Schritt sinnvoll ist – und welcher.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Hinweis:</strong> Keine Aufzeichnung. Inhalte bleiben vertraulich. Auf Wunsch NDA.
                  </p>
                </div>
              </section>

              {/* Mobile: Show booking here */}
              <div className="lg:hidden">
                <BookingSection />
              </div>
            </div>

            {/* Right Column: Sticky Booking (Desktop only) */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <BookingSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Separate Booking Section Component
function BookingSection() {
  const hasBookingURL = BOOKINGS_IFRAME_URL && BOOKINGS_IFRAME_URL.trim() !== "";

  return (
    <section id="booking" className="scroll-mt-32">
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Termin auswählen
        </h2>
        
        <p className="text-gray-700 mb-6">
          Bitte wählen Sie ein Zeitfenster. Das Meeting findet online via Microsoft Teams statt.
        </p>

        {hasBookingURL ? (
          <>
            <div className="relative w-full" style={{ minHeight: "900px" }}>
              <iframe
                src={BOOKINGS_IFRAME_URL}
                width="100%"
                height="1000"
                style={{ border: 0, minHeight: "900px" }}
                title="TaVyro Erstgespräch buchen"
                allowFullScreen
              />
            </div>
            
            {BOOKINGS_PAGE_URL && BOOKINGS_PAGE_URL.trim() !== "" && (
              <div className="mt-4 text-center">
                <a
                  href={BOOKINGS_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Falls das Portal nicht lädt: Termin direkt öffnen →
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <p className="text-gray-700 mb-4">
              Buchungslink wird noch hinterlegt. Bitte kontaktieren Sie uns in der Zwischenzeit per E-Mail.
            </p>
            <a
              href="mailto:hello@tavyro.ch"
              className="btn-primary inline-block"
            >
              Per E-Mail kontaktieren
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
