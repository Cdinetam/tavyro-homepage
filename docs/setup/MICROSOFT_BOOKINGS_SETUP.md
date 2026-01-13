# Microsoft Bookings Setup für TaVyro

## 🎯 Ziel
Microsoft Bookings-Portal einrichten für "Erstgespräch buchen" mit automatischer Teams-Meeting-Erstellung.

## 📋 Voraussetzungen
- ✅ Microsoft 365 Account (hello@tavyro.ch ist bereits vorhanden)
- ✅ Microsoft Teams
- ⏳ Microsoft Bookings aktivieren

## 🚀 Schritt-für-Schritt Anleitung

### Schritt 1: Microsoft Bookings öffnen

1. Gehen Sie zu: **https://outlook.office.com/bookings**
2. Oder öffnen Sie Microsoft 365 → **Bookings App**
3. Melden Sie sich mit **hello@tavyro.ch** an

### Schritt 2: Neue Buchungsseite erstellen

1. Klicken Sie auf **"Neue Buchungsseite"** oder **"Create booking page"**
2. Geben Sie ein:
   - **Name**: TaVyro Erstgespräch
   - **Geschäftstyp**: Beratung / Consulting
   - **E-Mail**: hello@tavyro.ch
3. Klicken Sie auf **"Erstellen"**

### Schritt 3: Dienst konfigurieren

1. Klicken Sie auf **"Dienste"** (Services)
2. Klicken Sie auf **"Dienst hinzufügen"** (Add service)

**Dienstdetails:**
- **Name**: Erstgespräch (30 Min.)
- **Beschreibung**: 
  ```
  Klären wir in 30 Minuten, ob und wie TaVyro Sie als Fractional CHRO / 
  People & Organisation Partner wirksam unterstützen kann.
  
  Was Sie erwartet:
  • Schnellcheck Ihrer Situation
  • Erste Hypothesen & nächste Schritte
  • Passungsprüfung: Bedarf, Timing, Setup
  • Vertraulich, fokussiert, lösungsorientiert
  ```
- **Dauer**: 30 Minuten
- **Pufferzeit vorher**: 5 Minuten
- **Pufferzeit nachher**: 5 Minuten
- **Online-Meeting**: ✅ **Microsoft Teams aktivieren**
- **Preis**: Kostenlos (oder nach Wunsch)

### Schritt 4: Verfügbarkeit einstellen

1. Klicken Sie auf **"Verfügbarkeit"** (Availability)
2. Stellen Sie Ihre Arbeitszeiten ein:
   - Montag - Freitag: 09:00 - 17:00 (oder nach Wunsch)
   - Zeitzone: (UTC+01:00) Zürich
3. **Vorlaufzeit**: Mindestens 2 Stunden vorher buchbar
4. **Maximale Vorlaufzeit**: 60 Tage im Voraus

### Schritt 5: Buchungsseite anpassen

1. Klicken Sie auf **"Buchungsseite"** (Booking page)
2. **Logo**: TaVyro Logo hochladen (optional)
3. **Farbe**: Grau/Schwarz (passend zur Website)
4. **Datenschutzrichtlinie**: Link zur Datenschutzseite (optional)
5. **Sprache**: Deutsch

### Schritt 6: Veröffentlichen

1. Klicken Sie auf **"Veröffentlichen"**
2. Aktivieren Sie **"Buchungsseite veröffentlichen"**
3. **Wichtig**: Kopieren Sie diese beiden URLs:

**URL 1: Booking Page URL**
```
https://outlook.office.com/bookwithme/user/[IHRE-ID]?anonymous&ep=[EVENT-ID]
```

**URL 2: iFrame Embed URL**
```
https://outlook.office.com/bookwithme/user/[IHRE-ID]?anonymous&ep=[EVENT-ID]&isembed=true
```

### Schritt 7: URLs in Website eintragen

1. Öffnen Sie die Datei:
   ```
   app/erstgespraech-buchen/page.tsx
   ```

2. Ersetzen Sie die leeren URLs (Zeile 9-10):
   ```typescript
   const BOOKINGS_IFRAME_URL = "https://outlook.office.com/bookwithme/...&isembed=true";
   const BOOKINGS_PAGE_URL = "https://outlook.office.com/bookwithme/...";
   ```

3. Speichern Sie die Datei.

### Schritt 8: Testen

1. Öffnen Sie: **http://localhost:3000/erstgespraech-buchen**
2. Das Buchungsportal sollte jetzt sichtbar sein
3. Buchen Sie einen Test-Termin
4. Prüfen Sie, ob Sie:
   - ✅ Eine Bestätigungs-E-Mail erhalten
   - ✅ Einen Microsoft Teams-Link erhalten
   - ✅ Den Termin in Ihrem Kalender sehen

## 🔧 Erweiterte Einstellungen

### E-Mail-Benachrichtigungen anpassen

1. **Bookings** → **Einstellungen** → **Benachrichtigungen**
2. Passen Sie die E-Mail-Vorlagen an:
   - Bestätigungsmail
   - Erinnerungsmail (24h vorher)
   - Absagemail

### Kundeninformationen erfassen

1. **Dienst bearbeiten** → **Kundeninformationen**
2. Felder aktivieren:
   - ✅ Name (erforderlich)
   - ✅ E-Mail-Adresse (erforderlich)
   - ✅ Telefonnummer (optional)
   - ✅ Notizen (optional)
3. Benutzerdefinierte Fragen hinzufügen:
   - "Kurze Beschreibung Ihrer aktuellen Herausforderung?" (optional)
   - "Wie haben Sie von TaVyro erfahren?" (optional)

### Teams-Meeting-Details

Das Teams-Meeting wird automatisch erstellt mit:
- ✅ Meeting-Link in der Bestätigungsmail
- ✅ Automatischer Kalendereintrag
- ✅ Meeting-Details (Dial-in, Video-Link)
- ✅ Erinnerung 15 Minuten vorher

## 📱 Alternative: Calendly

Falls Microsoft Bookings nicht verfügbar ist:

1. **Calendly** Account erstellen: https://calendly.com
2. Event Type erstellen: "Erstgespräch (30 Min.)"
3. Microsoft Teams Integration aktivieren
4. Embed-URL kopieren und in Website eintragen

**Calendly iFrame URL:**
```html
https://calendly.com/[IHR-USERNAME]/erstgespraech?embed_domain=tavyro.ch&embed_type=Inline
```

## 🆘 Troubleshooting

### Problem: Bookings App nicht verfügbar
**Lösung:**
- Prüfen Sie Ihre Microsoft 365-Lizenz
- Bookings ist in Business Standard/Premium enthalten
- Kontaktieren Sie Microsoft Support

### Problem: Teams-Integration funktioniert nicht
**Lösung:**
- Stellen Sie sicher, dass Microsoft Teams aktiviert ist
- Prüfen Sie die Berechtigungen in den Bookings-Einstellungen
- Testen Sie mit einem Test-Termin

### Problem: iFrame wird nicht angezeigt
**Lösung:**
- Prüfen Sie die URL (muss `&isembed=true` enthalten)
- Testen Sie die URL in einem neuen Browser-Tab
- Prüfen Sie Browser-Konsole auf Fehler

## 📞 Support

**Microsoft Bookings Hilfe:**
- Dokumentation: https://support.microsoft.com/bookings
- Community: https://techcommunity.microsoft.com/bookings

**Kontakt:**
- E-Mail: hello@tavyro.ch
- Telefon: +41 78 686 80 89

---

**Nach dem Setup**: Das Buchungsportal ist live auf https://tavyro.ch/erstgespraech-buchen! 🎉
