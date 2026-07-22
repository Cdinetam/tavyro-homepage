import { NextResponse } from "next/server";
import {
  formatEmployeeCareLineQuoteEmail,
  validateEmployeeCareLineQuote,
  type EmployeeCareLineQuotePayload,
} from "@/lib/employee-care-line-quote";

const ERROR_MESSAGES = {
  de: {
    required: "Bitte füllen Sie dieses Pflichtfeld aus.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    phone: "Bitte geben Sie eine gültige Telefonnummer ein.",
    privacy: "Bitte bestätigen Sie die Datenschutzerklärung.",
    send: "Die Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter hello@tavyro.ch.",
    generic: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    config: "Der Formularversand ist derzeit nicht verfügbar. Bitte kontaktieren Sie uns direkt unter hello@tavyro.ch.",
  },
  en: {
    required: "Please complete this required field.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid telephone number.",
    privacy: "Please confirm the Privacy Policy.",
    send: "Your enquiry could not be sent. Please try again or contact us directly at hello@tavyro.ch.",
    generic: "An error occurred. Please try again.",
    config: "Form submission is currently unavailable. Please contact us directly at hello@tavyro.ch.",
  },
} as const;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EmployeeCareLineQuotePayload;
    const locale = body.locale === "en" ? "en" : "de";
    const messages = ERROR_MESSAGES[locale];

    if (body.website?.trim()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const errors = validateEmployeeCareLineQuote(body, messages);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json({ error: messages.config }, { status: 503 });
    }

    const { subject, message } = formatEmployeeCareLineQuoteEmail(body);

    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: "TaVyro Website",
        name: body.contactName.trim(),
        email: body.email.trim(),
        message,
      }),
    });

    const responseData = await web3formsResponse.json();

    if (!web3formsResponse.ok || !responseData.success) {
      return NextResponse.json({ error: messages.send }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: ERROR_MESSAGES.de.generic },
      { status: 500 }
    );
  }
}
