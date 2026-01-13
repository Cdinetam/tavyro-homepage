# 📧 E-Mail-Programm einrichten: hello@tavyro.ch

## 🎯 Übersicht

Sie können `hello@tavyro.ch` in verschiedenen E-Mail-Programmen verwenden:

- ✅ **Apple Mail** (macOS/iOS)
- ✅ **Microsoft Outlook** (Windows/Mac/iOS/Android)
- ✅ **Thunderbird** (Windows/Mac/Linux)
- ✅ **Gmail** (über IMAP)
- ✅ **Andere IMAP-kompatible Programme**

## 📋 E-Mail-Server-Einstellungen (Hostpoint)

**Alle Programme verwenden diese Einstellungen:**

### IMAP (E-Mails empfangen)
- **Server**: `imap.hostpoint.ch`
- **Port**: `993`
- **Verschlüsselung**: SSL/TLS
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr gewähltes Passwort]

### SMTP (E-Mails senden)
- **Server**: `smtp.hostpoint.ch`
- **Port**: `465` (SSL/TLS) oder `587` (STARTTLS)
- **Verschlüsselung**: SSL/TLS (Port 465) oder STARTTLS (Port 587)
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr gewähltes Passwort]
- **Authentifizierung**: Erforderlich

---

## 🍎 Apple Mail (macOS)

### Schritt 1: Mail-App öffnen
1. Öffnen Sie **Mail** (im Dock oder Applications)
2. Falls Sie noch kein Konto haben: **Mail** → **E-Mail-Konto hinzufügen**
3. Falls Sie bereits ein Konto haben: **Mail** → **Einstellungen** → **Konten** → **+**

### Schritt 2: Konto-Typ wählen
1. Wählen Sie **"Anderer E-Mail-Account"** oder **"Weitere E-Mail-Konten"**
2. Klicken Sie auf **"Weiter"**

### Schritt 3: Kontoinformationen eingeben
- **Name**: TaVyro Support (oder Ihr Name)
- **E-Mail-Adresse**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]
- Klicken Sie auf **"Anmelden"**

### Schritt 4: Server-Einstellungen (falls nicht automatisch erkannt)

**IMAP-Einstellungen:**
- **E-Mail-Server**: `imap.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]

**SMTP-Einstellungen:**
- **SMTP-Server**: `smtp.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]
- **Port**: `465` (SSL) oder `587` (STARTTLS)

### Schritt 5: Erweitert (falls nötig)
1. **Mail** → **Einstellungen** → **Konten** → `hello@tavyro.ch`
2. **Erweitert**:
   - **IMAP-Port**: `993`
   - **SSL verwenden**: ✅ Aktiviert
   - **SMTP-Port**: `465` (SSL) oder `587` (STARTTLS)
   - **SSL verwenden**: ✅ Aktiviert

### Schritt 6: Fertig! ✅
- Apple Mail sollte jetzt E-Mails synchronisieren
- Testen Sie, indem Sie eine Test-E-Mail senden

---

## 📱 Apple Mail (iOS - iPhone/iPad)

### Schritt 1: Einstellungen öffnen
1. Öffnen Sie **Einstellungen**
2. Scrollen Sie zu **"Mail"**
3. Tippen Sie auf **"Konten"**
4. Tippen Sie auf **"Konto hinzufügen"**

### Schritt 2: Konto-Typ wählen
1. Tippen Sie auf **"Andere"**
2. Tippen Sie auf **"E-Mail-Konto hinzufügen"**

### Schritt 3: Kontoinformationen eingeben
- **Name**: TaVyro Support
- **E-Mail**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]
- **Beschreibung**: TaVyro (optional)
- Tippen Sie auf **"Weiter"**

### Schritt 4: Server-Einstellungen
**IMAP:**
- **Hostname**: `imap.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]

**SMTP:**
- **Hostname**: `smtp.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]

### Schritt 5: SSL aktivieren
- **SSL verwenden**: ✅ Aktiviert (für IMAP und SMTP)
- **Port**: `993` (IMAP), `465` (SMTP)

### Schritt 6: Speichern
- Tippen Sie auf **"Speichern"**
- Das Konto wird jetzt synchronisiert

---

## 📧 Microsoft Outlook (Windows/Mac)

### Schritt 1: Outlook öffnen
1. Öffnen Sie **Outlook**
2. **Datei** → **Kontoeinstellungen** → **Kontoeinstellungen**
3. Klicken Sie auf **"Neu"**

### Schritt 2: Manuelle Einrichtung
1. Wählen Sie **"Manuelle Einrichtung oder zusätzliche Servertypen"**
2. Klicken Sie auf **"Weiter"**
3. Wählen Sie **"POP oder IMAP"**
4. Klicken Sie auf **"Weiter"**

### Schritt 3: Kontoinformationen eingeben
- **Ihr Name**: TaVyro Support
- **E-Mail-Adresse**: `hello@tavyro.ch`
- **Kontotyp**: **IMAP**
- **Eingehender E-Mail-Server**: `imap.hostpoint.ch`
- **Ausgehender E-Mail-Server (SMTP)**: `smtp.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]

### Schritt 4: Weitere Einstellungen
1. Klicken Sie auf **"Weitere Einstellungen"**
2. **Registerkarte "Ausgehender Server"**:
   - ✅ **"Ausgehender Server (SMTP) erfordert Authentifizierung"** aktivieren
   - Wählen Sie **"Gleich wie eingehender E-Mail-Server"**

3. **Registerkarte "Erweitert"**:
   - **Eingehender Server (IMAP)**: `993`
   - **Verschlüsselung**: **SSL/TLS**
   - **Ausgehender Server (SMTP)**: `465` (SSL) oder `587` (STARTTLS)
   - **Verschlüsselung**: **SSL/TLS** (Port 465) oder **STARTTLS** (Port 587)

### Schritt 5: Testen
1. Klicken Sie auf **"Kontoeinstellungen testen"**
2. Outlook sendet Test-E-Mails
3. Wenn erfolgreich: **"Fertig"** klicken

### Schritt 6: Fertig! ✅
- Outlook sollte jetzt E-Mails synchronisieren

---

## 📱 Microsoft Outlook (iOS/Android)

### Schritt 1: Outlook-App öffnen
1. Öffnen Sie die **Outlook-App**
2. Tippen Sie auf das **Profil-Icon** (oben links)
3. Tippen Sie auf **"Konto hinzufügen"**

### Schritt 2: Konto hinzufügen
1. Tippen Sie auf **"Konto hinzufügen"**
2. Tippen Sie auf **"Erweitert"** oder **"Manuell einrichten"**

### Schritt 3: IMAP wählen
1. Wählen Sie **"IMAP"**

### Schritt 4: Kontoinformationen eingeben
- **E-Mail-Adresse**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]
- **Beschreibung**: TaVyro (optional)

### Schritt 5: Server-Einstellungen
**Eingehender Server:**
- **Server**: `imap.hostpoint.ch`
- **Port**: `993`
- **Sicherheit**: SSL/TLS

**Ausgehender Server:**
- **Server**: `smtp.hostpoint.ch`
- **Port**: `465` (SSL) oder `587` (STARTTLS)
- **Sicherheit**: SSL/TLS

### Schritt 6: Speichern
- Tippen Sie auf **"Anmelden"** oder **"Speichern"**
- Das Konto wird jetzt synchronisiert

---

## 🌐 Gmail (über IMAP)

### Schritt 1: Gmail öffnen
1. Öffnen Sie **Gmail** (https://mail.google.com)
2. Klicken Sie auf das **Zahnrad-Icon** → **"Alle Einstellungen anzeigen"**

### Schritt 2: Konten und Import
1. Klicken Sie auf **"Konten und Import"**
2. Scrollen Sie zu **"E-Mail von anderen Konten abrufen"**
3. Klicken Sie auf **"E-Mail-Konto hinzufügen"**

### Schritt 3: Kontoinformationen eingeben
- **E-Mail-Adresse**: `hello@tavyro.ch`
- Klicken Sie auf **"Weiter"**

### Schritt 4: Server-Einstellungen
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort]
- **POP-Server**: `imap.hostpoint.ch` (Gmail verwendet POP für Import)
- **Port**: `993`
- ✅ **SSL verwenden**
- ✅ **E-Mails als gelesen markieren** (optional)
- ✅ **E-Mails mit Label versehen** (optional)

### Schritt 5: E-Mails senden als
1. Scrollen Sie zu **"E-Mails senden als"**
2. Klicken Sie auf **"Weitere E-Mail-Adresse hinzufügen"**
3. **Name**: TaVyro Support
4. **E-Mail-Adresse**: `hello@tavyro.ch`
5. **SMTP-Server**: `smtp.hostpoint.ch`
6. **Port**: `465` (SSL) oder `587` (STARTTLS)
7. **Benutzername**: `hello@tavyro.ch`
8. **Passwort**: [Ihr Passwort]
9. ✅ **SSL verwenden**

### Schritt 6: Fertig! ✅
- Gmail importiert jetzt E-Mails von hello@tavyro.ch
- Sie können E-Mails als hello@tavyro.ch senden

---

## 🧪 E-Mail-Konto testen

### Test 1: E-Mail empfangen
1. Senden Sie eine Test-E-Mail von einer anderen Adresse an `hello@tavyro.ch`
2. Prüfen Sie, ob die E-Mail im E-Mail-Programm ankommt

### Test 2: E-Mail senden
1. Senden Sie eine Test-E-Mail von `hello@tavyro.ch` an sich selbst
2. Prüfen Sie, ob die E-Mail ankommt

### Test 3: Synchronisation
1. Prüfen Sie, ob E-Mails zwischen Webmail und E-Mail-Programm synchronisiert werden
2. Senden Sie eine E-Mail über Webmail, prüfen Sie im Programm
3. Senden Sie eine E-Mail über Programm, prüfen Sie im Webmail

---

## ⚠️ Häufige Probleme

### Problem: "Anmeldung fehlgeschlagen"
**Lösung:**
- Prüfen Sie Benutzername und Passwort
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Prüfen Sie die Ports (993 für IMAP, 465/587 für SMTP)

### Problem: "E-Mails werden nicht empfangen"
**Lösung:**
- Prüfen Sie IMAP-Einstellungen
- Stellen Sie sicher, dass Port 993 (SSL) verwendet wird
- Prüfen Sie, ob der Ordner "Posteingang" synchronisiert wird

### Problem: "E-Mails können nicht gesendet werden"
**Lösung:**
- Prüfen Sie SMTP-Einstellungen
- Stellen Sie sicher, dass Authentifizierung aktiviert ist
- Prüfen Sie die Ports (465 SSL oder 587 STARTTLS)
- Prüfen Sie Firewall-Einstellungen

### Problem: "SSL-Fehler"
**Lösung:**
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Verwenden Sie Port 993 für IMAP (SSL)
- Verwenden Sie Port 465 für SMTP (SSL) oder 587 (STARTTLS)

---

## 📞 Support

Falls Probleme auftreten:

**Hostpoint Support:**
- E-Mail: support@hostpoint.ch
- Telefon: 0844 040404
- WhatsApp: Mo - So, 8 - 18 Uhr

**E-Mail-Server-Informationen:**
- IMAP: imap.hostpoint.ch:993 (SSL)
- SMTP: smtp.hostpoint.ch:465 (SSL) oder 587 (STARTTLS)

---

## ✅ Checkliste

- [ ] E-Mail-Programm ausgewählt
- [ ] Server-Einstellungen konfiguriert
- [ ] SSL/TLS aktiviert
- [ ] Test-E-Mail empfangen
- [ ] Test-E-Mail gesendet
- [ ] Synchronisation funktioniert

---

**Fertig!** Sie können jetzt hello@tavyro.ch in Ihrem bevorzugten E-Mail-Programm verwenden! 🎉
