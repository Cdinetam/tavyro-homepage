# 📧 E-Mail-Setup: hello@tavyro.ch - Visuelle Anleitung

## 🎯 Ziel
E-Mail-Postfach `hello@tavyro.ch` bei Hostpoint erstellen

## ✅ Status-Check

Führen Sie zuerst aus:
```bash
python3 create_email_account.py
```

Dieses Script führt Sie durch den gesamten Prozess!

---

## 📋 Schritt-für-Schritt (mit Screenshots-Beschreibung)

### Schritt 1: Login ✅ (Sie sind bereits eingeloggt)

**URL**: https://admin.hostpoint.ch

**Was Sie sehen sollten:**
- Übersicht Ihrer Services
- Liste mit "Webhosting", "Domains", etc.

---

### Schritt 2: Webhosting-Account auswählen

**Was Sie tun müssen:**

1. **Suchen Sie** in der Liste nach:
   - "Webhosting" ODER
   - "tavyro.ch"

2. **Klicken Sie** auf den Webhosting-Account für `tavyro.ch`

**Was Sie sehen sollten:**
- Linkes Menü mit Optionen wie:
  - 📁 Dateien
  - 📧 E-Mail
  - 🌐 Domains
  - ⚙️ Einstellungen

---

### Schritt 3: E-Mail-Bereich öffnen

**Was Sie tun müssen:**

1. **Im linken Menü** finden Sie **"E-Mail"** (📧 Icon)
2. **Klicken Sie** auf **"E-Mail"**

**Was Sie sehen sollten:**
- Übersicht der E-Mail-Adressen
- Button: **"E-Mail-Adresse erstellen"** oder **"Create e-mail address"**

---

### Schritt 4: E-Mail erstellen - Button klicken

**Was Sie tun müssen:**

1. **Klicken Sie** auf **"E-Mail-Adresse erstellen"** oder **"Create e-mail address"**

**Was Sie sehen sollten:**
- Ein Formular mit folgenden Feldern:
  - E-Mail-Adresse (Textfeld)
  - Domain (Dropdown)
  - Passwort (Passwort-Feld)
  - Passwort bestätigen (Passwort-Feld)
  - Vorname (Textfeld)
  - Nachname (Textfeld)
  - Cloud Office-Paket (Dropdown/Radio-Buttons)

---

### Schritt 5: Formular ausfüllen

**Füllen Sie das Formular aus:**

#### 📧 E-Mail-Adresse
```
hello
```
*(Nur "hello" eingeben, ohne @tavyro.ch)*

#### 🌐 Domain
```
tavyro.ch
```
*(Sollte automatisch ausgewählt sein, falls nicht: aus Dropdown wählen)*

#### 🔒 Passwort
```
[Wählen Sie ein sicheres Passwort]
```
**Anforderungen:**
- Mindestens 8 Zeichen
- Empfohlen: Groß- und Kleinbuchstaben, Zahlen, Sonderzeichen
- **WICHTIG**: Speichern Sie dieses Passwort sicher!

#### 🔒 Passwort bestätigen
```
[Gleiches Passwort nochmal eingeben]
```

#### 👤 Vorname
```
TaVyro
```

#### 👤 Nachname
```
Support
```

#### 📦 Cloud Office-Paket
```
Standard (kostenlos)
```
*(Oder "Cloud Office Limited" - das kostenlose Paket)*

---

### Schritt 6: Erstellen

**Was Sie tun müssen:**

1. **Prüfen Sie** alle Eingaben nochmal
2. **Klicken Sie** auf **"Erstellen"** oder **"Create"**

**Was Sie sehen sollten:**
- Eine Erfolgsmeldung: **"E-Mail-Adresse wurde erfolgreich erstellt"**
- Oder: Die neue E-Mail-Adresse erscheint in der Liste

---

### Schritt 7: Verifikation

**Was Sie tun müssen:**

1. **Gehen Sie zurück** zu **"E-Mail"** → **"E-Mail-Adressen"**
2. **Prüfen Sie**, ob `hello@tavyro.ch` in der Liste ist
3. **Status** sollte **"Aktiv"** oder **"Active"** sein

---

## 🧪 Test nach Setup

Nach der Erstellung können Sie testen:

### Option 1: Script ausführen
```bash
python3 create_email_account.py
```

### Option 2: Manuell testen
```bash
python3 test_email_account.py
```

### Option 3: Webmail öffnen
1. Öffnen Sie: **https://office.hostpoint.ch**
2. Login mit: `hello@tavyro.ch` + Passwort
3. Prüfen Sie, ob Sie E-Mails empfangen können

---

## 📧 E-Mail-Zugriff nach Setup

### Webmail (Cloud Office)
- **URL**: https://office.hostpoint.ch
- **Login**: `hello@tavyro.ch` + Passwort

### E-Mail-Programm (Outlook, Mail, etc.)

**IMAP-Einstellungen:**
- **Server**: `imap.hostpoint.ch`
- **Port**: `993` (SSL/TLS)
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: (Ihr gewähltes Passwort)

**SMTP-Einstellungen:**
- **Server**: `smtp.hostpoint.ch`
- **Port**: `465` (SSL/TLS) oder `587` (STARTTLS)
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: (Ihr gewähltes Passwort)

---

## ✅ Checkliste

- [ ] Browser geöffnet (https://admin.hostpoint.ch)
- [ ] Eingeloggt bei Hostpoint
- [ ] Webhosting-Account für tavyro.ch ausgewählt
- [ ] E-Mail-Bereich geöffnet
- [ ] "E-Mail-Adresse erstellen" geklickt
- [ ] Formular ausgefüllt:
  - [ ] E-Mail-Adresse: hello
  - [ ] Domain: tavyro.ch
  - [ ] Passwort gewählt und gespeichert
  - [ ] Vorname: TaVyro
  - [ ] Nachname: Support
  - [ ] Cloud Office-Paket: Standard
- [ ] "Erstellen" geklickt
- [ ] Erfolgsmeldung erhalten
- [ ] E-Mail-Konto in Liste verifiziert
- [ ] Webmail-Zugriff getestet

---

## 🆘 Hilfe bei Problemen

### Problem: "E-Mail-Adresse bereits vorhanden"
- Das Konto existiert bereits
- Prüfen Sie die E-Mail-Liste im Control Panel

### Problem: "Domain nicht gefunden"
- Stellen Sie sicher, dass Sie den richtigen Webhosting-Account ausgewählt haben
- Prüfen Sie, ob `tavyro.ch` in der Domain-Liste ist

### Problem: "Passwort zu schwach"
- Verwenden Sie mindestens 8 Zeichen
- Verwenden Sie Groß- und Kleinbuchstaben, Zahlen, Sonderzeichen

### Problem: Formular wird nicht angezeigt
- Prüfen Sie, ob Sie im richtigen Webhosting-Account sind
- Aktualisieren Sie die Seite (F5)
- Prüfen Sie, ob JavaScript aktiviert ist

---

## 🎉 Fertig!

Nach erfolgreicher Erstellung ist `hello@tavyro.ch` sofort einsatzbereit!

Die E-Mail-Adresse auf Ihrer Website (https://tavyro.ch) funktioniert jetzt und Besucher können Ihnen E-Mails senden.
