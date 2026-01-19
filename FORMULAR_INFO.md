# 📝 Erstgespräch-Formular - Informationen

## ✅ Was wurde erstellt:

### 1. Kontaktformular statt Microsoft Bookings
Die Seite `/erstgespraech-buchen` enthält jetzt ein professionelles Kontaktformular.

### 2. Formularfelder:
- **Vorname** (Pflichtfeld)
- **Name** (Pflichtfeld)
- **E-Mail-Adresse** (Pflichtfeld)
- **Gewünschter Zeitpunkt für Teams Call** (Pflichtfeld)
  - Hinweis: Montag bis Freitag, 9:00 - 17:00 Uhr
- **Zusätzliche Nachricht** (optional)

### 3. API Route (Serverless Function)
**Datei**: `app/api/contact/route.ts`
- Verarbeitet Formular-Submissions
- Validiert Eingaben
- Sendet E-Mails via Web3Forms API

---

## 📧 E-Mail-Versand einrichten (WICHTIG!)

Das Formular benötigt einen **Web3Forms API Key** für den E-Mail-Versand.

### Schritt 1: Web3Forms Account erstellen (kostenlos)
1. Gehen Sie zu: **https://web3forms.com**
2. Klicken Sie **"Get Started"** (kostenlos)
3. Geben Sie ein:
   - **E-Mail**: hello@tavyro.ch
   - **Passwort**: [Ihr Passwort]
4. **Account erstellen**

### Schritt 2: Access Key erhalten
1. Nach Login: Dashboard öffnen
2. Klicken Sie **"Create New Form"**
3. **Email Address**: `hello@tavyro.ch`
4. **Kopieren Sie den "Access Key"** (z.B. `abc123-def456-...`)

### Schritt 3: Access Key in Vercel eintragen
1. Gehen Sie zu: **https://vercel.com/cdinetams-projects/tavyro-homepage/settings/environment-variables**
2. Klicken Sie **"Add"**
3. Füllen Sie aus:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: [Ihr Access Key von Web3Forms]
   - **Environment**: Production ✓, Preview ✓, Development ✓
4. **"Save"** klicken

### Schritt 4: Redeploy
Nach dem Hinzufügen der Environment Variable:
```bash
vercel --prod
```

Oder in Vercel Dashboard:
- Deployments → Neuestes Deployment → ⋮ → "Redeploy"

---

## 🧪 Formular testen:

### Test 1: Lokales Testen
```bash
npm run dev
```
Öffnen Sie: http://localhost:3000/erstgespraech-buchen

### Test 2: Live-Seite
Öffnen Sie: https://tavyro.ch/erstgespraech-buchen

**Test-Daten:**
- Vorname: Test
- Name: Mustermann
- E-Mail: ihre.email@example.com
- Terminwunsch: Montag, 20. Januar 2025, 14:00 Uhr
- Nachricht: Test-Anfrage

**Nach Absenden:**
- ✅ Erfolgsmeldung wird angezeigt
- ✅ Formular wird geleert
- ✅ E-Mail wird an hello@tavyro.ch gesendet

---

## 📋 Formular-Features:

### UI/UX:
- ✅ Responsive Design (Mobile & Desktop)
- ✅ Sticky Formular (Desktop: rechts, Mobile: unten)
- ✅ Validierung (Pflichtfelder, E-Mail-Format)
- ✅ Loading-State ("Wird gesendet...")
- ✅ Erfolgsmeldung nach Absenden
- ✅ Fehlermeldung bei Problemen
- ✅ Alternative Kontaktmöglichkeiten (E-Mail & Telefon)

### Funktionalität:
- ✅ Client-Side Validierung
- ✅ Server-Side Validierung (API Route)
- ✅ E-Mail-Versand via Web3Forms
- ✅ Serverless Function (Vercel)
- ✅ Professionelles E-Mail-Format

---

## 📧 E-Mail-Format:

Die E-Mail, die Sie erhalten, sieht so aus:

**Betreff**: Neue Erstgespräch-Anfrage von [Vorname] [Name]

**Inhalt**:
```
Erstgespräch-Anfrage von TaVyro Website
========================================

Vorname: Max
Name: Mustermann
E-Mail: max.mustermann@example.com
Gewünschter Zeitpunkt: Montag, 20. Januar 2025, 14:00 Uhr

Zusätzliche Nachricht:
Ich interessiere mich für...

---
Gesendet über: tavyro.ch/erstgespraech-buchen
```

---

## 🔧 Technische Details:

### Dateien geändert:
1. **`app/erstgespraech-buchen/page.tsx`**
   - Formular statt iFrame
   - State-Management für Formular-Daten
   - Submit-Handler mit Fetch-API

2. **`app/api/contact/route.ts`** (NEU)
   - Next.js API Route
   - Server-Side Validierung
   - Web3Forms Integration

### Stack:
- **Frontend**: React (Next.js 14 App Router)
- **Backend**: Next.js API Routes (Serverless)
- **E-Mail-Service**: Web3Forms (kostenlos)
- **Deployment**: Vercel
- **Validierung**: Client & Server-Side

---

## 🆘 Troubleshooting:

### Problem: "Ein Fehler ist aufgetreten"
**Ursache**: Web3Forms API Key fehlt oder ist falsch

**Lösung**:
1. Prüfen Sie Environment Variables in Vercel
2. Stellen Sie sicher, dass `WEB3FORMS_ACCESS_KEY` gesetzt ist
3. Redeploy nach Änderung

### Problem: Keine E-Mail erhalten
**Mögliche Ursachen**:
1. Web3Forms Account nicht verifiziert
2. E-Mail im Spam-Ordner
3. Falscher Access Key

**Lösung**:
- Prüfen Sie Spam-Ordner
- Verifizieren Sie E-Mail-Adresse bei Web3Forms
- Prüfen Sie Access Key in Vercel

### Problem: Formular lädt nicht
**Lösung**:
- Hard Reload: Cmd+Shift+R (Mac) oder Strg+Shift+R (Windows)
- Cache leeren
- Anderer Browser testen

---

## 🔄 Alternative: Eigener SMTP

Falls Sie Web3Forms nicht nutzen möchten, können Sie auch:

### Option 1: Nodemailer + Gmail
```bash
npm install nodemailer
```

### Option 2: Resend (empfohlen)
```bash
npm install resend
```

### Option 3: SendGrid
```bash
npm install @sendgrid/mail
```

Alle benötigen API-Keys oder SMTP-Credentials.

---

## 📊 Statistiken:

- **Formular-Größe**: 3.82 kB (komprimiert)
- **API Route**: 0 B (Serverless Function)
- **Ladezeit**: < 1 Sekunde
- **Mobile-optimiert**: ✅
- **Accessibility**: ✅

---

## ✅ FERTIG!

Das Formular ist jetzt live auf:
**https://tavyro.ch/erstgespraech-buchen**

**Nächster Schritt**: Web3Forms API Key einrichten (siehe oben)

---

**Kontakt**: hello@tavyro.ch | +41 78 686 80 89
