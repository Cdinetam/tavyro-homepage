import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vorname, nachname, email, telefon, terminwunsch1, terminwunsch2, terminwunsch3, thema, nachricht, kopie_an_mich } = body;

    // Validierung
    if (!vorname || !nachname || !email || !terminwunsch1) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // E-Mail Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Formatiere Terminvorschläge
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

Vorname: ${vorname}
Nachname: ${nachname}
E-Mail: ${email}
${telefon ? `Telefon: ${telefon}` : ''}

Terminvorschläge:
1. ${formatTermin(terminwunsch1)}
${terminwunsch2 ? `2. ${formatTermin(terminwunsch2)}` : ''}
${terminwunsch3 ? `3. ${formatTermin(terminwunsch3)}` : ''}

${thema ? `Thema/Anlass: ${thema}` : ''}

${nachricht ? `Zusätzliche Nachricht:\n${nachricht}` : ''}

---
Gesendet über: tavyro.ch/erstgespraech-buchen
    `.trim();

    // Web3Forms API - Hauptmail an hello@tavyro.ch
    const web3formsData: any = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `Neue Teams-Call Anfrage von ${vorname} ${nachname}`,
      from_name: `TaVyro Website`,
      name: `${vorname} ${nachname}`,
      email: email,
      message: emailMessage,
    };

    console.log('Sending to Web3Forms with key:', process.env.WEB3FORMS_ACCESS_KEY ? 'Key present' : 'Key missing');

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(web3formsData)
    });

    const responseData = await web3formsResponse.json();
    console.log('Web3Forms Response:', responseData);

    if (!web3formsResponse.ok) {
      console.error('Web3Forms Error:', responseData);
      return NextResponse.json(
        { error: 'E-Mail konnte nicht versendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.' },
        { status: 500 }
      );
    }

    // Falls Kopie gewünscht: Nutze CC-Funktion von Web3Forms
    if (kopie_an_mich && responseData.success) {
      // Sende Bestätigungs-E-Mail an Absender
      const confirmationData = {
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `Bestätigung: Ihre Teams-Call Anfrage bei TaVyro`,
        from_name: `TaVyro`,
        email: email,
        message: `Vielen Dank für Ihre Anfrage, ${vorname}!

Wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Arbeitstag zurück (Mo-Fr, 9-17 Uhr).

Ihre Angaben:
--------------
${emailMessage}

Mit freundlichen Grüssen
Ihr TaVyro Team

---
Diese E-Mail wurde automatisch generiert.
Bei Fragen erreichen Sie uns unter hello@tavyro.ch`,
      };

      // Sende Bestätigung (fire and forget)
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(confirmationData)
      }).catch(err => console.error('Confirmation email error:', err));
    }

    return NextResponse.json(
      { success: true, message: 'Ihre Anfrage wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    );
  }
}
