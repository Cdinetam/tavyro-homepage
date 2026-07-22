"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  EMPLOYEE_COUNT_OPTIONS,
  LANGUAGE_OPTIONS,
  SCOPE_OPTIONS,
  START_OPTIONS,
  validateEmployeeCareLineQuote,
  type EmployeeCareLineQuoteErrors,
} from "@/lib/employee-care-line-quote";
import { isValidEmail, isValidPhone } from "@/lib/form-validation";

type FormState = {
  company: string;
  contactName: string;
  position: string;
  email: string;
  phone: string;
  employeeCount: string;
  scope: string;
  languages: string[];
  preferredStart: string;
  additionalInfo: string;
  privacyAccepted: boolean;
  website: string;
};

const INITIAL_FORM: FormState = {
  company: "",
  contactName: "",
  position: "",
  email: "",
  phone: "",
  employeeCount: "",
  scope: "",
  languages: [],
  preferredStart: "",
  additionalInfo: "",
  privacyAccepted: false,
  website: "",
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const inputClass =
  "w-full px-4 py-3 border border-tavyro-border rounded-lg text-tavyro-text bg-white focus:ring-2 focus:ring-tavyro-brand-500 focus:border-transparent transition-all text-sm md:text-base";

export default function EmployeeCareLineQuoteModal({ isOpen, onClose }: Props) {
  const t = useTranslations("EmployeeCareLineQuote");
  const locale = useLocale() as "de" | "en";
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<EmployeeCareLineQuoteErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  const validationMessages = {
    required: t("errors.required"),
    email: t("errors.email"),
    phone: t("errors.phone"),
    privacy: t("errors.privacy"),
  };

  const isFormComplete =
    form.company.trim().length > 0 &&
    form.contactName.trim().length > 0 &&
    isValidEmail(form.email) &&
    isValidPhone(form.phone) &&
    form.employeeCount.length > 0 &&
    form.privacyAccepted;

  const handleClose = useCallback(() => {
    if (submitStatus === "submitting") return;
    onClose();
  }, [onClose, submitStatus]);

  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitStatus("idle");
    setFormError("");
  }, []);

  const handleSuccessClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [handleClose, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const updateField = (
    name: keyof FormState,
    value: string | boolean | string[]
  ) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name as keyof EmployeeCareLineQuoteErrors];
      return next;
    });
  };

  const toggleLanguage = (language: string) => {
    setForm((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((item) => item !== language)
        : [...prev.languages, language],
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const validationErrors = validateEmployeeCareLineQuote(
      {
        locale,
        company: form.company,
        contactName: form.contactName,
        position: form.position,
        email: form.email,
        phone: form.phone,
        employeeCount: form.employeeCount,
        scope: form.scope,
        languages: form.languages,
        preferredStart: form.preferredStart,
        additionalInfo: form.additionalInfo,
        privacyAccepted: form.privacyAccepted,
        website: form.website,
      },
      validationMessages
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitStatus("submitting");

    try {
      const response = await fetch("/api/employee-care-line-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          company: form.company.trim(),
          contactName: form.contactName.trim(),
          position: form.position.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          employeeCount: form.employeeCount,
          scope: form.scope,
          languages: form.languages,
          preferredStart: form.preferredStart,
          additionalInfo: form.additionalInfo.trim(),
          privacyAccepted: form.privacyAccepted,
          website: form.website,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        return;
      }

      if (data.errors) {
        setErrors(data.errors);
        setSubmitStatus("idle");
        return;
      }

      setFormError(data.error ?? t("errors.send"));
      setSubmitStatus("error");
    } catch {
      setFormError(t("errors.send"));
      setSubmitStatus("error");
    }
  };

  if (!isOpen) return null;

  const fieldError = (name: keyof EmployeeCareLineQuoteErrors) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
        {errors[name]}
      </p>
    ) : null;

  const errorInputClass = (name: keyof EmployeeCareLineQuoteErrors) =>
    errors[name] ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch md:items-center md:justify-center md:p-4">
      <div
        className="absolute inset-0 bg-tavyro-brand-900/60 backdrop-blur-[1px]"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex w-full flex-col bg-white md:max-h-[90vh] md:max-w-2xl md:rounded-xl md:border md:border-tavyro-border md:shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-tavyro-border px-5 py-4 md:px-6 md:py-5">
          <div className="min-w-0 pr-2">
            <h2
              id={titleId}
              className="text-lg md:text-xl font-semibold text-tavyro-brand-900 leading-snug"
            >
              {t("title")}
            </h2>
            {submitStatus !== "success" && (
              <p className="mt-2 text-sm md:text-base text-tavyro-text2 leading-relaxed">
                {t("intro")}
              </p>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            disabled={submitStatus === "submitting"}
            className="shrink-0 rounded-lg p-2 text-tavyro-text2 hover:bg-tavyro-surface hover:text-tavyro-brand-900 focus:outline-none focus:ring-2 focus:ring-tavyro-brand-500"
            aria-label={t("closeAriaLabel")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">
          {submitStatus === "success" ? (
            <div className="py-4 md:py-8 text-center">
              <h3 className="text-xl font-semibold text-tavyro-brand-900 mb-3">
                {t("success.title")}
              </h3>
              <p className="text-tavyro-text2 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
                {t("success.text")}
              </p>
              <button
                type="button"
                onClick={handleSuccessClose}
                className="btn-primary text-sm md:text-base"
              >
                {t("success.close")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) => updateField("website", event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.company.label")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder={t("fields.company.placeholder")}
                  className={`${inputClass} ${errorInputClass("company")}`}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                  required
                />
                {fieldError("company")}
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.contactName.label")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={form.contactName}
                  onChange={(event) => updateField("contactName", event.target.value)}
                  placeholder={t("fields.contactName.placeholder")}
                  className={`${inputClass} ${errorInputClass("contactName")}`}
                  aria-invalid={Boolean(errors.contactName)}
                  aria-describedby={errors.contactName ? "contactName-error" : undefined}
                  required
                />
                {fieldError("contactName")}
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.position.label")}
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={form.position}
                  onChange={(event) => updateField("position", event.target.value)}
                  placeholder={t("fields.position.placeholder")}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.email.label")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={t("fields.email.placeholder")}
                  className={`${inputClass} ${errorInputClass("email")}`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  autoComplete="email"
                  required
                />
                {fieldError("email")}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.phone.label")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder={t("fields.phone.placeholder")}
                  className={`${inputClass} ${errorInputClass("phone")}`}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  autoComplete="tel"
                  required
                />
                {fieldError("phone")}
              </div>

              <div>
                <label htmlFor="employeeCount" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.employeeCount.label")} <span className="text-red-500">*</span>
                </label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  value={form.employeeCount}
                  onChange={(event) => updateField("employeeCount", event.target.value)}
                  className={`${inputClass} ${errorInputClass("employeeCount")}`}
                  aria-invalid={Boolean(errors.employeeCount)}
                  aria-describedby={errors.employeeCount ? "employeeCount-error" : undefined}
                  required
                >
                  <option value="">{t("selectPlaceholder")}</option>
                  {EMPLOYEE_COUNT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {t(`options.employeeCount.${option}`)}
                    </option>
                  ))}
                </select>
                {fieldError("employeeCount")}
              </div>

              <div>
                <label htmlFor="scope" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.scope.label")}
                </label>
                <select
                  id="scope"
                  name="scope"
                  value={form.scope}
                  onChange={(event) => updateField("scope", event.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("selectPlaceholder")}</option>
                  {SCOPE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {t(`options.scope.${option}`)}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className="block text-sm font-medium text-tavyro-brand-900 mb-3">
                  {t("fields.languages.label")}
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {LANGUAGE_OPTIONS.map((option) => (
                    <label
                      key={option}
                      htmlFor={`language-${option}`}
                      className="flex items-center gap-3 rounded-lg border border-tavyro-border px-3 py-2.5 text-sm text-tavyro-text2 cursor-pointer hover:border-tavyro-brand-400"
                    >
                      <input
                        type="checkbox"
                        id={`language-${option}`}
                        checked={form.languages.includes(option)}
                        onChange={() => toggleLanguage(option)}
                        className="h-4 w-4 rounded border-tavyro-border text-tavyro-brand-500 focus:ring-tavyro-brand-500"
                      />
                      <span>{t(`options.languages.${option}`)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="preferredStart" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.preferredStart.label")}
                </label>
                <select
                  id="preferredStart"
                  name="preferredStart"
                  value={form.preferredStart}
                  onChange={(event) => updateField("preferredStart", event.target.value)}
                  className={inputClass}
                >
                  <option value="">{t("selectPlaceholder")}</option>
                  {START_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {t(`options.preferredStart.${option}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-tavyro-brand-900 mb-2">
                  {t("fields.additionalInfo.label")}
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={form.additionalInfo}
                  onChange={(event) => updateField("additionalInfo", event.target.value)}
                  placeholder={t("fields.additionalInfo.placeholder")}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                <p className="mt-2 text-sm text-tavyro-text2">
                  {t("fields.additionalInfo.help")}
                </p>
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={form.privacyAccepted}
                    onChange={(event) =>
                      updateField("privacyAccepted", event.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-tavyro-border text-tavyro-brand-500 focus:ring-tavyro-brand-500"
                    aria-invalid={Boolean(errors.privacyAccepted)}
                    aria-describedby={errors.privacyAccepted ? "privacyAccepted-error" : undefined}
                    required
                  />
                  <span className="text-sm text-tavyro-text2 leading-relaxed">
                    {t.rich("privacy.text", {
                      link: (chunks) => (
                        <Link
                          href="/datenschutz"
                          className="text-tavyro-brand-700 font-medium underline underline-offset-4 hover:text-tavyro-brand-900"
                        >
                          {chunks}
                        </Link>
                      ),
                    })}
                    <span className="text-red-500"> *</span>
                  </span>
                </label>
                {fieldError("privacyAccepted")}
              </div>

              {formError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
                  <p className="text-sm text-red-800">{formError}</p>
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={submitStatus === "submitting"}
                  className="btn-secondary text-sm md:text-base w-full sm:w-auto"
                >
                  {t("cancel")}
                </button>
                <button
                  type="submit"
                  disabled={!isFormComplete || submitStatus === "submitting"}
                  className="btn-primary text-sm md:text-base w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === "submitting" ? t("submitting") : t("submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
