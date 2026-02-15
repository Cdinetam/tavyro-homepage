"use client";

import { useEffect, useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Zeitoptionen 9:00-17:00 in 30-Min-Schritten
const generateTimeOptions = () => {
  const options = [];
  for (let hour = 9; hour <= 17; hour++) {
    options.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 17) {
      options.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }
  return options;
};

export default function ErstgespraechBuchen() {
  const t = useTranslations("Erstgespraech");
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
    kopie_an_mich: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    document.title = `${t("pageTitle")} | TaVyro`;
  }, [t]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const terminwunsch1 =
        formData.terminwunsch1_datum && formData.terminwunsch1_zeit
          ? `${formData.terminwunsch1_datum}T${formData.terminwunsch1_zeit}`
          : "";
      const terminwunsch2 =
        formData.terminwunsch2_datum && formData.terminwunsch2_zeit
          ? `${formData.terminwunsch2_datum}T${formData.terminwunsch2_zeit}`
          : "";
      const terminwunsch3 =
        formData.terminwunsch3_datum && formData.terminwunsch3_zeit
          ? `${formData.terminwunsch3_datum}T${formData.terminwunsch3_zeit}`
          : "";

      const formatTermin = (termin: string) => {
        if (!termin) return "Nicht angegeben";
        try {
          return new Date(termin).toLocaleString("de-CH", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return termin;
        }
      };

      const emailMessage = `
Teams-Call Anfrage von TaVyro Website
========================================

Vorname: ${formData.vorname}
Nachname: ${formData.nachname}
E-Mail: ${formData.email}
${formData.telefon ? `Telefon: ${formData.telefon}` : ""}

Terminvorschläge:
1. ${formatTermin(terminwunsch1)}
${terminwunsch2 ? `2. ${formatTermin(terminwunsch2)}` : ""}
${terminwunsch3 ? `3. ${formatTermin(terminwunsch3)}` : ""}

${formData.thema ? `Thema/Anlass: ${formData.thema}` : ""}

${formData.nachricht ? `Zusätzliche Nachricht:\n${formData.nachricht}` : ""}

---
Gesendet über: tavyro.ch/erstgespraech-buchen
      `.trim();

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eefecccc-4850-4bce-81e9-d859ebd2c1a7",
          subject: `Neue Teams-Call Anfrage von ${formData.vorname} ${formData.nachname}`,
          from_name: "TaVyro Website",
          name: `${formData.vorname} ${formData.nachname}`,
          email: formData.email,
          message: emailMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        if (formData.kopie_an_mich) {
          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "eefecccc-4850-4bce-81e9-d859ebd2c1a7",
              subject: `Bestätigung: Ihre Teams-Call Anfrage bei TaVyro`,
              from_name: "TaVyro",
              email: formData.email,
              message: `Vielen Dank für Ihre Anfrage, ${formData.vorname}!\n\nWir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Arbeitstag zurück (Mo-Fr, 9-17 Uhr).\n\nIhre Angaben:\n--------------\n${emailMessage}\n\nMit freundlichen Grüssen\nIhr TaVyro Team\n\n---\nDiese E-Mail wurde automatisch generiert.\nBei Fragen erreichen Sie uns unter hello@tavyro.ch`,
            }),
          }).catch((err) =>
            console.error("Confirmation email error:", err)
          );
        }
        setSubmitStatus("success");
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
          kopie_an_mich: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Content */}
            <div className="space-y-12">
              {/* SECTION 1: HERO */}
              <section>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t("pageTitle")}
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {t.rich("heroText", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>

                <div className="space-y-4 mb-8">
                  {(["step1", "step2", "step3", "step4"] as const).map(
                    (key, index) => (
                      <div key={key} className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 pt-1">{t(key)}</p>
                      </div>
                    )
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                  {t("teamsInfo")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection("booking")}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {t("bookTeamsCall")}
                  </button>
                  <button
                    onClick={() => scrollToSection("ablauf")}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    {t("viewProcess")}
                  </button>
                </div>
              </section>

              {/* SECTION 2: ABLAUF */}
              <section id="ablauf" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  {t("processTitle")}
                </h2>

                <div className="space-y-6">
                  {(
                    [
                      ["processStep1Title", "processStep1Desc"],
                      ["processStep2Title", "processStep2Desc"],
                      ["processStep3Title", "processStep3Desc"],
                    ] as const
                  ).map(([titleKey, descKey], index) => (
                    <div key={titleKey} className="flex items-start">
                      <span className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center font-bold text-xl mr-4 mt-1">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {t(titleKey)}
                        </h3>
                        <p className="text-gray-700">{t(descKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">{t("noteLabel")}</strong>{" "}
                    {t("processNote")}
                  </p>
                </div>
              </section>

              {/* Mobile: Show booking here */}
              <div className="lg:hidden">
                <BookingSection
                  t={t}
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
                  t={t}
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
  t,
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  submitStatus,
}: {
  t: ReturnType<typeof useTranslations<"Erstgespraech">>;
  formData: Record<string, string | boolean>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
}) {
  return (
    <section id="booking" className="scroll-mt-32">
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {t("formTitle")}
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">{t("formIntro")}</p>

        {submitStatus === "success" ? (
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              {t("successTitle")}
            </h3>
            <p className="text-green-800">{t("successMessage")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="vorname"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {t("firstName")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="vorname"
                  name="vorname"
                  value={formData.vorname as string}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Max"
                />
              </div>
              <div>
                <label
                  htmlFor="nachname"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {t("lastName")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nachname"
                  name="nachname"
                  value={formData.nachname as string}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Mustermann"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {t("emailLabel")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email as string}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="max.mustermann@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="telefon"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {t("phoneLabel")}
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon as string}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="+41 79 123 45 67"
              />
              <p className="mt-2 text-sm text-gray-600">{t("phoneHint")}</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                {t("dateLabel")} <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-600 mb-4">{t("dateHint")}</p>

              {(
                [
                  ["slot1Label", "terminwunsch1", true],
                  ["slot2Label", "terminwunsch2", false],
                  ["slot3Label", "terminwunsch3", false],
                ] as const
              ).map(([labelKey, prefix, isRequired]) => (
                <div key={prefix} className="space-y-2">
                  <label className="block text-xs font-medium text-gray-700">
                    {t(labelKey)}{" "}
                    {isRequired && <span className="text-red-500">*</span>}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor={`${prefix}_datum`}
                        className="block text-xs text-gray-600 mb-1"
                      >
                        {t("dateFieldLabel")}
                      </label>
                      <input
                        type="date"
                        id={`${prefix}_datum`}
                        name={`${prefix}_datum`}
                        value={formData[`${prefix}_datum`] as string}
                        onChange={handleChange}
                        required={isRequired as boolean}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`${prefix}_zeit`}
                        className="block text-xs text-gray-600 mb-1"
                      >
                        {t("timeFieldLabel")}
                      </label>
                      <select
                        id={`${prefix}_zeit`}
                        name={`${prefix}_zeit`}
                        value={formData[`${prefix}_zeit`] as string}
                        onChange={handleChange}
                        required={isRequired as boolean}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      >
                        <option value="">{t("timeSelect")}</option>
                        {generateTimeOptions().map((time) => (
                          <option key={time} value={time}>
                            {time} {t("timeSuffix")}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label
                htmlFor="thema"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {t("topicLabel")}
              </label>
              <input
                type="text"
                id="thema"
                name="thema"
                value={formData.thema as string}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Fractional CHRO, HR-Transformation, HRIS/People Analytics..."
              />
            </div>

            <div>
              <label
                htmlFor="nachricht"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                {t("messageLabel")}
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                value={formData.nachricht as string}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                placeholder={t("messagePlaceholder")}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="kopie_an_mich"
                  name="kopie_an_mich"
                  checked={formData.kopie_an_mich as boolean}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
                />
                <label
                  htmlFor="kopie_an_mich"
                  className="ml-3 text-sm text-gray-700"
                >
                  {t("copyToMe")}
                </label>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">{t("consentText")}</p>
              </div>
            </div>

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{t("errorMessage")}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("submitting") : t("submitButton")}
            </button>

            <p className="text-sm text-gray-600 text-center">
              {t("alternative")}{" "}
              <a
                href="mailto:hello@tavyro.ch"
                className="underline hover:text-gray-900"
              >
                hello@tavyro.ch
              </a>
              {" | "}
              <a
                href="tel:+41786868089"
                className="underline hover:text-gray-900"
              >
                +41 78 686 80 89
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
