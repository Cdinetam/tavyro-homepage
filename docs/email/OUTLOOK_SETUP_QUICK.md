# 📧 Outlook Setup für hello@tavyro.ch - Schnell-Anleitung

## 🎯 Ziel
hello@tavyro.ch zu Outlook hinzufügen, um E-Mails direkt in Outlook zu empfangen und zu senden

## ⚡ Schnell-Setup (2 Minuten)

### Schritt 1: Outlook öffnen
1. Öffnen Sie **Microsoft Outlook**
2. **Datei** → **Kontoeinstellungen** → **Kontoeinstellungen**
3. Klicken Sie auf **"Neu"**

### Schritt 2: Manuelle Einrichtung
1. Wählen Sie **"Manuelle Einrichtung oder zusätzliche Servertypen"**
2. Klicken Sie auf **"Weiter"**
3. Wählen Sie **"POP oder IMAP"**
4. Klicken Sie auf **"Weiter"**

### Schritt 3: Kontoinformationen eingeben

**Füllen Sie aus:**
- **Ihr Name**: TaVyro Support (oder Ihr Name)
- **E-Mail-Adresse**: `hello@tavyro.ch`
- **Kontotyp**: **IMAP** ✅ (wichtig!)
- **Eingehender E-Mail-Server**: `imap.hostpoint.ch`
- **Ausgehender E-Mail-Server (SMTP)**: `smtp.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: [Ihr Passwort für hello@tavyro.ch]

### Schritt 4: Weitere Einstellungen

1. Klicken Sie auf **"Weitere Einstellungen"**

2. **Registerkarte "Ausgehender Server"**:
   - ✅ **"Ausgehender Server (SMTP) erfordert Authentifizierung"** aktivieren
   - Wählen Sie **"Gleich wie eingehender E-Mail-Server"**

3. **Registerkarte "Erweitert"**:
   - **Eingehender Server (IMAP)**: `993`
   - **Verschlüsselung**: **SSL/TLS** auswählen
   - **Ausgehender Server (SMTP)**: `465`
   - **Verschlüsselung**: **SSL/TLS** auswählen

### Schritt 5: Testen
1. Klicken Sie auf **"Kontoeinstellungen testen"**
2. Outlook sendet Test-E-Mails
3. Wenn erfolgreich: **"Fertig"** klicken

### Schritt 6: Fertig! ✅
- Outlook synchronisiert jetzt alle E-Mails von hello@tavyro.ch
- Sie können E-Mails empfangen und senden

---

## 📋 Server-Einstellungen (Zusammenfassung)

**IMAP (Empfangen):**
- Server: `imap.hostpoint.ch`
- Port: `993`
- Verschlüsselung: SSL/TLS
- Benutzername: `hello@tavyro.ch`
- Passwort: [Ihr Passwort]

**SMTP (Senden):**
- Server: `smtp.hostpoint.ch`
- Port: `465` (SSL) oder `587` (STARTTLS)
- Verschlüsselung: SSL/TLS
- Authentifizierung: Erforderlich
- Benutzername: `hello@tavyro.ch`
- Passwort: [Ihr Passwort]

---

## ⚠️ Häufige Probleme

### Problem: "Anmeldung fehlgeschlagen"
**Lösung:**
- Prüfen Sie Benutzername und Passwort
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Verwenden Sie Port 993 für IMAP und 465 für SMTP

### Problem: "E-Mails können nicht gesendet werden"
**Lösung:**
- Prüfen Sie, ob "Ausgehender Server erfordert Authentifizierung" aktiviert ist
- Verwenden Sie Port 465 (SSL) oder 587 (STARTTLS)
- Prüfen Sie Firewall-Einstellungen

### Problem: "SSL-Fehler"
**Lösung:**
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Verwenden Sie Port 993 für IMAP (SSL)
- Verwenden Sie Port 465 für SMTP (SSL)

---

## 🧪 Testen

Nach dem Setup:
1. Senden Sie eine Test-E-Mail von hello@tavyro.ch an sich selbst
2. Prüfen Sie, ob die E-Mail ankommt
3. Prüfen Sie, ob E-Mails synchronisiert werden

---

## ✅ Checkliste

- [ ] Outlook geöffnet
- [ ] Neues Konto erstellt
- [ ] IMAP gewählt (nicht POP!)
- [ ] Server-Einstellungen eingegeben
- [ ] SSL/TLS aktiviert
- [ ] Authentifizierung aktiviert
- [ ] Test erfolgreich
- [ ] E-Mails werden synchronisiert

---

**Fertig!** Sie können jetzt hello@tavyro.ch direkt in Outlook verwenden! 🎉
