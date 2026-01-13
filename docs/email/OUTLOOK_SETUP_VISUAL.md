# 📧 Outlook Setup - Visuelle Schritt-für-Schritt Anleitung

## ✅ Status
- ✅ Outlook wurde geöffnet
- ✅ Bereit für Setup

---

## 📋 Schritt-für-Schritt (mit Screenshots-Beschreibung)

### Schritt 1: Neues Konto hinzufügen

**Was Sie sehen sollten:**
- Outlook-Hauptfenster ist geöffnet

**Was Sie tun müssen:**
1. Klicken Sie oben auf **"Datei"** (File)
2. Klicken Sie auf **"Kontoeinstellungen"** (Account Settings)
3. Wählen Sie **"Kontoeinstellungen"** (Account Settings) aus dem Dropdown
4. Klicken Sie auf **"Neu"** (New) Button

---

### Schritt 2: Kontotyp wählen

**Was Sie sehen sollten:**
- Ein Dialog-Fenster "Konto hinzufügen" (Add Account)

**Was Sie tun müssen:**
1. Wählen Sie **"Manuelle Einrichtung oder zusätzliche Servertypen"** (Manual setup or additional server types)
2. Klicken Sie auf **"Weiter"** (Next)

---

### Schritt 3: Dienst wählen

**Was Sie sehen sollten:**
- Liste mit verschiedenen Optionen

**Was Sie tun müssen:**
1. Wählen Sie **"POP oder IMAP"** (POP or IMAP)
2. Klicken Sie auf **"Weiter"** (Next)

---

### Schritt 4: Kontoinformationen eingeben

**Was Sie sehen sollten:**
- Ein Formular mit verschiedenen Feldern

**Was Sie tun müssen - Füllen Sie aus:**

#### Grundlegende Informationen:
- **Ihr Name** (Your Name): `TaVyro Support`
- **E-Mail-Adresse** (E-mail Address): `hello@tavyro.ch`
- **Kontotyp** (Account Type): **IMAP** ✅ (wichtig - nicht POP!)

#### Server-Einstellungen:
- **Eingehender E-Mail-Server** (Incoming mail server): `imap.hostpoint.ch`
- **Ausgehender E-Mail-Server (SMTP)** (Outgoing mail server): `smtp.hostpoint.ch`

#### Anmeldeinformationen:
- **Benutzername** (User Name): `hello@tavyro.ch`
- **Passwort** (Password): [Ihr Passwort für hello@tavyro.ch]
- ✅ **"Passwort speichern"** (Remember password) aktivieren

---

### Schritt 5: Weitere Einstellungen - WICHTIG!

**Was Sie tun müssen:**
1. Klicken Sie auf **"Weitere Einstellungen"** (More Settings) Button (unten rechts)

#### Registerkarte "Ausgehender Server" (Outgoing Server):

**Was Sie sehen sollten:**
- Ein Dialog mit mehreren Registerkarten

**Was Sie tun müssen:**
1. Klicken Sie auf die Registerkarte **"Ausgehender Server"** (Outgoing Server)
2. ✅ **"Ausgehender Server (SMTP) erfordert Authentifizierung"** (My outgoing server (SMTP) requires authentication) aktivieren
3. Wählen Sie **"Gleich wie eingehender E-Mail-Server"** (Use same settings as my incoming mail server)

#### Registerkarte "Erweitert" (Advanced):

**Was Sie tun müssen:**
1. Klicken Sie auf die Registerkarte **"Erweitert"** (Advanced)

**Eingehender Server (IMAP):**
- **Port** (Port): `993`
- **Verschlüsselung** (Encryption): Wählen Sie **"SSL/TLS"** aus dem Dropdown

**Ausgehender Server (SMTP):**
- **Port** (Port): `465`
- **Verschlüsselung** (Encryption): Wählen Sie **"SSL/TLS"** aus dem Dropdown

2. Klicken Sie auf **"OK"** um die Einstellungen zu speichern

---

### Schritt 6: Testen

**Was Sie tun müssen:**
1. Klicken Sie auf **"Kontoeinstellungen testen"** (Test Account Settings) Button
2. Outlook wird jetzt:
   - Verbindung zum IMAP-Server testen
   - Verbindung zum SMTP-Server testen
   - Test-E-Mail senden

**Was Sie sehen sollten:**
- Ein Fortschrittsbalken
- Nach einigen Sekunden: **"Alle Tests erfolgreich abgeschlossen"** (All tests completed successfully)

**Falls Fehler auftreten:**
- Prüfen Sie Benutzername und Passwort
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Prüfen Sie die Ports (993 für IMAP, 465 für SMTP)

---

### Schritt 7: Fertigstellen

**Was Sie tun müssen:**
1. Wenn alle Tests erfolgreich sind, klicken Sie auf **"Fertig"** (Finish)
2. Klicken Sie auf **"Schließen"** (Close) im Kontoeinstellungen-Fenster

---

## ✅ Verifikation

**Nach dem Setup sollten Sie sehen:**
- `hello@tavyro.ch` erscheint in der Konten-Liste
- Outlook synchronisiert E-Mails
- Sie können E-Mails empfangen und senden

**Testen Sie:**
1. Senden Sie eine Test-E-Mail von hello@tavyro.ch an sich selbst
2. Prüfen Sie, ob die E-Mail ankommt
3. Prüfen Sie, ob E-Mails synchronisiert werden

---

## ⚠️ Häufige Probleme und Lösungen

### Problem: "Anmeldung fehlgeschlagen"
**Lösung:**
- Prüfen Sie Benutzername: `hello@tavyro.ch` (komplett mit @tavyro.ch)
- Prüfen Sie Passwort (Groß-/Kleinschreibung beachten)
- Stellen Sie sicher, dass SSL/TLS aktiviert ist

### Problem: "E-Mails können nicht gesendet werden"
**Lösung:**
- Prüfen Sie, ob "Ausgehender Server erfordert Authentifizierung" aktiviert ist
- Verwenden Sie Port 465 (SSL) oder alternativ 587 (STARTTLS)
- Prüfen Sie Firewall-Einstellungen

### Problem: "SSL-Fehler"
**Lösung:**
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Verwenden Sie Port 993 für IMAP (SSL)
- Verwenden Sie Port 465 für SMTP (SSL)

### Problem: "E-Mails werden nicht empfangen"
**Lösung:**
- Prüfen Sie IMAP-Einstellungen
- Stellen Sie sicher, dass Port 993 (SSL) verwendet wird
- Prüfen Sie, ob der Ordner "Posteingang" synchronisiert wird

---

## 📋 Checkliste

- [ ] Outlook geöffnet
- [ ] Neues Konto erstellt
- [ ] IMAP gewählt (nicht POP!)
- [ ] Server-Einstellungen eingegeben:
  - [ ] IMAP: imap.hostpoint.ch:993 (SSL)
  - [ ] SMTP: smtp.hostpoint.ch:465 (SSL)
- [ ] Authentifizierung aktiviert
- [ ] SSL/TLS aktiviert
- [ ] Test erfolgreich
- [ ] E-Mails werden synchronisiert

---

## 🎉 Fertig!

Nach erfolgreichem Setup können Sie:
- ✅ E-Mails direkt in Outlook empfangen
- ✅ E-Mails direkt in Outlook senden
- ✅ Alle E-Mails von hello@tavyro.ch verwalten
- ✅ Keine Hostpoint Webmail mehr nötig!

---

**Bei Problemen:** Prüfen Sie die Konfigurationsdatei `outlook_config.txt` für alle Einstellungen.
