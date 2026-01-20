"use client";

import { useEffect, useState, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Zeitoptionen 9:00-17:00 in 30-Min-Schritten
const generateTimeOptions = () => {
  const options = [];
  for (let hour = 9; hour <= 17; hour++) {
    options.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 17) {
      options.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }
  return options;
};

export default function ErstgespraechBuchen() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    terminwunsch1_datum: "",
    terminwunsch1_zeit: "",
    terminwunsch2_datum: "",
    terminwunsch2_zeit: "",
    terminwunsch3_datum: "",
    terminwunsch3_zeit: "",
    thema: "",
    nachricht: "",
    kopie_an_mich: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Kombiniere Datum und Zeit für Terminwünsche
      const terminwunsch1 = formData.terminwunsch1_datum && formData.terminwunsch1_zeit 
        ? `${formData.terminwunsch1_datum}T${formData.terminwunsch1_zeit}` 
        : '';
      const terminwunsch2 = formData.terminwunsch2_datum && formData.terminwunsch2_zeit 
        ? `${formData.terminwunsch2_datum}T${formData.terminwunsch2_zeit}` 
        : '';
      const terminwunsch3 = formData.terminwunsch3_datum && formData.terminwunsch3_zeit 
        ? `${formData.terminwunsch3_datum}T${formData.terminwunsch3_zeit}` 
        : '';

      // Formatiere Terminvorschläge für E-Mail
      const formatTermin = (termin: string) => {
        if (!termin) return 'Nicht angegeben';
        try {
          return new Date(termin).toLocaleString('de-CH', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        } catch {
          return termin;
        }
      };

      // Erstelle E-Mail-Nachricht
      const emailMessage = `
Teams-Call Anfrage von TaVyro Website
========================================

Vorname: ${formData.vorname}
Nachname: ${formData.nachname}
E-Mail: ${formData.email}
${formData.telefon ? `Telefon: ${formData.telefon}` : ''}

Terminvorschläge:
1. ${formatTermin(terminwunsch1)}
${terminwunsch2 ? `2. ${formatTermin(terminwunsch2)}` : ''}
${terminwunsch3 ? `3. ${formatTermin(terminwunsch3)}` : ''}

${formData.thema ? `Thema/Anlass: ${formData.thema}` : ''}

${formData.nachricht ? `Zusätzliche Nachricht:\n${formData.nachricht}` : ''}

---
Gesendet über: tavyro.ch/erstgespraech-buchen
      `.trim();

      // Sende direkt an Web3Forms (Client-seitig, kein Server!)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'eefecccc-4850-4bce-81e9-d859ebd2c1a7',
          subject: `Neue Teams-Call Anfrage von ${formData.vorname} ${formData.nachname}`,
          from_name: 'TaVyro Website',
          name: `${formData.vorname} ${formData.nachname}`,
          email: formData.email,
          message: emailMessage,
        })
      });

      const data = await response.json();
      console.log('Web3Forms Response:', data);

      if (data.success) {
        // Falls Kopie gewünscht: Sende Bestätigung
        if (formData.kopie_an_mich) {
          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: 'eefecccc-4850-4bce-81e9-d859ebd2c1a7',
              subject: `Bestätigung: Ihre Teams-Call Anfrage bei TaVyro`,
              from_name: 'TaVyro',
              email: formData.email,
              message: `Vielen Dank für Ihre Anfrage, ${formData.vorname}!

Wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Arbeitstag zurück (Mo-Fr, 9-17 Uhr).

Ihre Angaben:
--------------
${emailMessage}

Mit freundlichen Grüssen
Ihr TaVyro Team

---
Diese E-Mail wurde automatisch generiert.
Bei Fragen erreichen Sie uns unter hello@tavyro.ch`,
            })
          }).catch(err => console.error('Confirmation email error:', err));
        }

        setSubmitStatus('success');
        setFormData({
          vorname: "",
          nachname: "",
          email: "",
          telefon: "",
          terminwunsch1_datum: "",
          terminwunsch1_zeit: "",
          terminwunsch2_datum: "",
          terminwunsch2_zeit: "",
          terminwunsch3_datum: "",
          terminwunsch3_zeit: "",
          thema: "",
          nachricht: "",
          kopie_an_mich: false
        });
      } else {
        console.error('Web3Forms error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

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
                    Teams-Call buchen
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
                <BookingSection 
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                />
              </div>
            </div>

            {/* Right Column: Sticky Booking (Desktop only) */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <BookingSection 
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Booking Form Component
function BookingSection({ 
  formData, 
  handleChange, 
  handleSubmit, 
  isSubmitting, 
  submitStatus 
}: {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}) {
  return (
    <section id="booking" className="scroll-mt-32">
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Teams-Call buchen
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Füllen Sie kurz das Formular aus – wir melden uns in der Regel am selben Arbeitstag zurück (9 bis 17 Uhr). Der Call findet via Microsoft Teams statt; den Link erhalten Sie per E-Mail.
        </p>

        {submitStatus === 'success' ? (
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              ✓ Vielen Dank!
            </h3>
            <p className="text-green-800">
              Ihre Anfrage wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vorname" className="block text-sm font-medium text-gray-900 mb-2">
                  Vorname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="vorname"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Max"
                />
              </div>

              <div>
                <label htmlFor="nachname" className="block text-sm font-medium text-gray-900 mb-2">
                  Nachname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nachname"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Mustermann"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                E-Mail-Adresse <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="max.mustermann@example.com"
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-900 mb-2">
                Telefonnummer
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="+41 79 123 45 67"
              />
              <p className="mt-2 text-sm text-gray-600">
                Für kurzfristige Rückfragen oder falls wir Sie schneller erreichen sollen.
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Terminvorschläge für den Teams-Call <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-600 mb-4">
                Verfügbar Montag bis Freitag, 9 bis 17 Uhr (CET). Bitte nennen Sie 2-3 Alternativen.
              </p>

              {/* 1. Terminvorschlag */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-gray-700">
                  1. Terminvorschlag <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="terminwunsch1_datum" className="block text-xs text-gray-600 mb-1">Datum</label>
                    <input
                      type="date"
                      id="terminwunsch1_datum"
                      name="terminwunsch1_datum"
                      value={formData.terminwunsch1_datum}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="terminwunsch1_zeit" className="block text-xs text-gray-600 mb-1">Uhrzeit</label>
                    <select
                      id="terminwunsch1_zeit"
                      name="terminwunsch1_zeit"
                      value={formData.terminwunsch1_zeit}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    >
                      <option value="">Wählen...</option>
                      {generateTimeOptions().map(time => (
                        <option key={time} value={time}>{time} Uhr</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 2. Terminvorschlag */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-gray-700">
                  2. Terminvorschlag (optional)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="terminwunsch2_datum" className="block text-xs text-gray-600 mb-1">Datum</label>
                    <input
                      type="date"
                      id="terminwunsch2_datum"
                      name="terminwunsch2_datum"
                      value={formData.terminwunsch2_datum}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="terminwunsch2_zeit" className="block text-xs text-gray-600 mb-1">Uhrzeit</label>
                    <select
                      id="terminwunsch2_zeit"
                      name="terminwunsch2_zeit"
                      value={formData.terminwunsch2_zeit}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    >
                      <option value="">Wählen...</option>
                      {generateTimeOptions().map(time => (
                        <option key={time} value={time}>{time} Uhr</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. Terminvorschlag */}
              <div className="space-y-2">
                <label className="block text-xs font-medium text-gray-700">
                  3. Terminvorschlag (optional)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="terminwunsch3_datum" className="block text-xs text-gray-600 mb-1">Datum</label>
                    <input
                      type="date"
                      id="terminwunsch3_datum"
                      name="terminwunsch3_datum"
                      value={formData.terminwunsch3_datum}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="terminwunsch3_zeit" className="block text-xs text-gray-600 mb-1">Uhrzeit</label>
                    <select
                      id="terminwunsch3_zeit"
                      name="terminwunsch3_zeit"
                      value={formData.terminwunsch3_zeit}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    >
                      <option value="">Wählen...</option>
                      {generateTimeOptions().map(time => (
                        <option key={time} value={time}>{time} Uhr</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="thema" className="block text-sm font-medium text-gray-900 mb-2">
                Thema / Anlass des Gesprächs
              </label>
              <input
                type="text"
                id="thema"
                name="thema"
                value={formData.thema}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Fractional CHRO, HR-Transformation, HRIS/People Analytics..."
              />
            </div>

            <div>
              <label htmlFor="nachricht" className="block text-sm font-medium text-gray-900 mb-2">
                Zusätzliche Nachricht (optional)
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                placeholder="Gerne mit Kontext, Ziel des Gesprächs oder Fragen, die wir vorbereiten sollen."
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="kopie_an_mich"
                  name="kopie_an_mich"
                  checked={formData.kopie_an_mich}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
                />
                <label htmlFor="kopie_an_mich" className="ml-3 text-sm text-gray-700">
                  Kopie der Anfrage an mich senden
                </label>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Terminvereinbarung verwenden. Ihre Daten werden vertraulich behandelt.
                </p>
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Jetzt buchen'}
            </button>

            <p className="text-sm text-gray-600 text-center">
              Alternativ: <a href="mailto:hello@tavyro.ch" className="underline hover:text-gray-900">hello@tavyro.ch</a>
              {" | "}
              <a href="tel:+41786868089" className="underline hover:text-gray-900">+41 78 686 80 89</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
