import { isValidEmail, isValidPhone } from "@/lib/form-validation";

export type EmployeeCareLineQuotePayload = {
  locale: "de" | "en";
  company: string;
  contactName: string;
  position?: string;
  email: string;
  phone: string;
  employeeCount: string;
  scope?: string;
  languages?: string[];
  preferredStart?: string;
  additionalInfo?: string;
  privacyAccepted: boolean;
  website?: string;
};

export type EmployeeCareLineQuoteErrors = Partial<
  Record<
    | "company"
    | "contactName"
    | "email"
    | "phone"
    | "employeeCount"
    | "privacyAccepted"
    | "form",
    string
  >
>;

const EMPLOYEE_COUNT_KEYS = [
  "1-20",
  "21-50",
  "51-100",
  "101-250",
  "251-500",
  "501-1000",
  "1000+",
] as const;

const SCOPE_KEYS = ["entire", "location", "unit", "group", "open"] as const;

const LANGUAGE_KEYS = ["de", "en", "fr", "other"] as const;

const START_KEYS = ["asap", "1-3", "3-6", "open"] as const;

export const EMPLOYEE_COUNT_OPTIONS = [...EMPLOYEE_COUNT_KEYS];
export const SCOPE_OPTIONS = [...SCOPE_KEYS];
export const LANGUAGE_OPTIONS = [...LANGUAGE_KEYS];
export const START_OPTIONS = [...START_KEYS];

const LABELS = {
  de: {
    employeeCount: {
      "1-20": "1–20",
      "21-50": "21–50",
      "51-100": "51–100",
      "101-250": "101–250",
      "251-500": "251–500",
      "501-1000": "501–1'000",
      "1000+": "Mehr als 1'000",
    },
    scope: {
      entire: "Gesamtes Unternehmen",
      location: "Einzelner Standort",
      unit: "Ausgewählter Unternehmensbereich",
      group: "Bestimmte Mitarbeitendengruppe",
      open: "Noch offen",
    },
    languages: {
      de: "Deutsch",
      en: "Englisch",
      fr: "Französisch",
      other: "Weitere",
    },
    start: {
      asap: "So bald wie möglich",
      "1-3": "Innerhalb der nächsten 1–3 Monate",
      "3-6": "Innerhalb der nächsten 3–6 Monate",
      open: "Noch offen",
    },
    notSpecified: "Nicht angegeben",
    yes: "Ja",
    no: "Nein",
  },
  en: {
    employeeCount: {
      "1-20": "1–20",
      "21-50": "21–50",
      "51-100": "51–100",
      "101-250": "101–250",
      "251-500": "251–500",
      "501-1000": "501–1,000",
      "1000+": "More than 1,000",
    },
    scope: {
      entire: "Entire organisation",
      location: "Individual location",
      unit: "Selected business unit",
      group: "Specific employee group",
      open: "Not yet defined",
    },
    languages: {
      de: "German",
      en: "English",
      fr: "French",
      other: "Other",
    },
    start: {
      asap: "As soon as possible",
      "1-3": "Within the next 1–3 months",
      "3-6": "Within the next 3–6 months",
      open: "Not yet defined",
    },
    notSpecified: "Not specified",
    yes: "Yes",
    no: "No",
  },
} as const;

type Locale = keyof typeof LABELS;

function labelFor<K extends keyof (typeof LABELS)["de"]>(
  locale: Locale,
  group: K,
  key?: string
): string {
  const labels = LABELS[locale][group];
  if (!key) return LABELS[locale].notSpecified;
  return (labels as Record<string, string>)[key] ?? LABELS[locale].notSpecified;
}

export function validateEmployeeCareLineQuote(
  payload: EmployeeCareLineQuotePayload,
  messages: {
    required: string;
    email: string;
    phone: string;
    privacy: string;
  }
): EmployeeCareLineQuoteErrors {
  const errors: EmployeeCareLineQuoteErrors = {};

  if (!payload.company?.trim()) errors.company = messages.required;
  if (!payload.contactName?.trim()) errors.contactName = messages.required;
  if (!payload.email?.trim()) errors.email = messages.required;
  else if (!isValidEmail(payload.email)) errors.email = messages.email;
  if (!payload.phone?.trim()) errors.phone = messages.required;
  else if (!isValidPhone(payload.phone)) errors.phone = messages.phone;
  if (!payload.employeeCount) errors.employeeCount = messages.required;
  if (!payload.privacyAccepted) errors.privacyAccepted = messages.privacy;

  return errors;
}

export function formatEmployeeCareLineQuoteEmail(
  payload: EmployeeCareLineQuotePayload
): { subject: string; message: string } {
  const locale: Locale = payload.locale === "en" ? "en" : "de";
  const labels = LABELS[locale];
  const languageList =
    payload.languages && payload.languages.length > 0
      ? payload.languages
          .map((key) => labelFor(locale, "languages", key))
          .join(", ")
      : labels.notSpecified;

  if (locale === "en") {
    return {
      subject: `Quote Request Employee Care Line – ${payload.company.trim()}`,
      message: `
Employee Care Line Quote Request from TaVyro Website
=====================================================

Company: ${payload.company.trim()}
Contact person: ${payload.contactName.trim()}
Position: ${payload.position?.trim() || labels.notSpecified}
Business email: ${payload.email.trim()}
Telephone: ${payload.phone.trim()}

Number of employees: ${labelFor(locale, "employeeCount", payload.employeeCount)}
Intended scope: ${labelFor(locale, "scope", payload.scope)}
Required languages: ${languageList}
Preferred start: ${labelFor(locale, "start", payload.preferredStart)}

Additional information:
${payload.additionalInfo?.trim() || labels.notSpecified}

Privacy confirmation: ${labels.yes}

---
Sent via: tavyro.ch/${locale}#leistungen
      `.trim(),
    };
  }

  return {
    subject: `Offertenanfrage Employee Care Line – ${payload.company.trim()}`,
    message: `
Offertenanfrage Employee Care Line von TaVyro Website
=====================================================

Unternehmen: ${payload.company.trim()}
Kontaktperson: ${payload.contactName.trim()}
Funktion: ${payload.position?.trim() || labels.notSpecified}
Geschäftliche E-Mail: ${payload.email.trim()}
Telefon: ${payload.phone.trim()}

Anzahl Mitarbeitende: ${labelFor(locale, "employeeCount", payload.employeeCount)}
Gewünschter Einsatzbereich: ${labelFor(locale, "scope", payload.scope)}
Gewünschte Sprachen: ${languageList}
Gewünschter Start: ${labelFor(locale, "start", payload.preferredStart)}

Ergänzende Angaben:
${payload.additionalInfo?.trim() || labels.notSpecified}

Datenschutzbestätigung: ${labels.yes}

---
Gesendet über: tavyro.ch/${locale}#leistungen
    `.trim(),
  };
}
