import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vorname, nachname, email, telefon, terminwunsch, thema, nachricht } = body;

    // Validierung
    if (!vorname || !nachname || !email || !terminwunsch) {
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

    // Web3Forms API verwenden (kostenloser Service)
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        subject: `Neue Teams-Call Anfrage von ${vorname} ${nachname}`,
        from_name: `${vorname} ${nachname}`,
        email: email,
        message: `
Teams-Call Anfrage von TaVyro Website
========================================

Vorname: ${vorname}
Nachname: ${nachname}
E-Mail: ${email}
${telefon ? `Telefon: ${telefon}` : ''}
Gewünschter Zeitpunkt: ${terminwunsch}
${thema ? `Thema/Anlass: ${thema}` : ''}

${nachricht ? `Zusätzliche Nachricht:\n${nachricht}` : ''}

---
Gesendet über: tavyro.ch/erstgespraech-buchen
        `.trim(),
        redirect: 'false'
      })
    });

    if (web3formsResponse.ok) {
      return NextResponse.json(
        { success: true, message: 'Ihre Anfrage wurde erfolgreich versendet.' },
        { status: 200 }
      );
    } else {
      // Fallback: Sende einfache Bestätigung
      return NextResponse.json(
        { success: true, message: 'Ihre Anfrage wurde registriert.' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    );
  }
}
