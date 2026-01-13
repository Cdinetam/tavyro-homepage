# 📧 E-Mail-Setup für hello@tavyro.ch

## ✅ Aktueller Status

- ✅ **MX-Records konfiguriert**: Die Domain ist bereits für E-Mail eingerichtet
  - `mx1.mail.hostpoint.ch`
  - `mx2.mail.hostpoint.ch`
- ⏳ **E-Mail-Postfach fehlt**: `hello@tavyro.ch` muss noch bei Hostpoint erstellt werden

## 🎯 Wichtig zu wissen

**Vercel ist nur für die Website** - nicht für E-Mail!

- ✅ **Vercel**: Hostet die Website (tavyro.ch)
- ✅ **Hostpoint**: Verwaltet E-Mail (hello@tavyro.ch)

Diese beiden Dienste arbeiten unabhängig voneinander.

## 📋 Schritt-für-Schritt: E-Mail-Postfach erstellen

### Option 1: Hostpoint E-Mail (Empfohlen - einfachste Lösung)

#### Schritt 1: Hostpoint Control Panel öffnen
1. Gehen Sie zu: https://www.hostpoint.ch/de/
2. Melden Sie sich mit Ihrer Hostpoint ID an
3. Wählen Sie Ihr **Webhosting** für `tavyro.ch` aus

#### Schritt 2: E-Mail-Adresse erstellen
1. Klicken Sie im linken Menü auf **"E-Mail"**
2. Klicken Sie auf **"E-Mail-Adresse erstellen"**

#### Schritt 3: hello@tavyro.ch konfigurieren
- **E-Mail-Adresse**: `hello`
- **Domain**: `tavyro.ch`
- **Passwort**: Wählen Sie ein sicheres Passwort
- **Persönliche Daten**: Vor- und Nachname eingeben

#### Schritt 4: Cloud Office-Paket auswählen
- Wählen Sie das gewünschte Paket (kostenlos oder Premium)
- Klicken Sie auf **"Erstellen"**

#### Schritt 5: Fertig! ✅
- Die E-Mail-Adresse `hello@tavyro.ch` ist jetzt aktiv
- Sie können E-Mails sofort empfangen und versenden

### Option 2: E-Mail-Weiterleitung (Falls kein Postfach gewünscht)

Falls Sie E-Mails an eine bestehende Adresse weiterleiten möchten:

1. Im Hostpoint Control Panel → **E-Mail** → **Weiterleitungen**
2. Neue Weiterleitung erstellen:
   - **Von**: `hello@tavyro.ch`
   - **An**: Ihre bestehende E-Mail-Adresse (z.B. `ihre-email@gmail.com`)

### Option 3: Professioneller E-Mail-Service (Google Workspace / Microsoft 365)

Falls Sie professionellere Features benötigen:

- **Google Workspace**: ~CHF 6-18/Monat pro Benutzer
- **Microsoft 365**: ~CHF 5-12/Monat pro Benutzer

Diese Services erfordern zusätzliche DNS-Konfiguration (MX-Records ändern).

## 🔍 E-Mail testen

Nach dem Erstellen des Postfachs können Sie testen:

1. **E-Mail senden**: Senden Sie eine Test-E-Mail an `hello@tavyro.ch`
2. **E-Mail empfangen**: Prüfen Sie das Postfach über:
   - **Cloud Office Webmail**: https://www.hostpoint.ch/email/
   - **E-Mail-Programm**: IMAP/POP3 konfigurieren

## 📧 E-Mail-Zugriff

### Webmail (Cloud Office)
- URL: https://www.hostpoint.ch/email/
- Login mit: `hello@tavyro.ch` + Passwort

### E-Mail-Programm (Outlook, Mail, etc.)
- **IMAP Server**: `imap.hostpoint.ch`
- **SMTP Server**: `smtp.hostpoint.ch`
- **Benutzername**: `hello@tavyro.ch`
- **Passwort**: Das von Ihnen gewählte Passwort
- **Ports**: IMAP (993 SSL), SMTP (465 SSL)

## ⚠️ Wichtige Hinweise

1. **Kosten**: Prüfen Sie, ob E-Mail in Ihrem Hostpoint-Paket enthalten ist
2. **Speicherplatz**: Standard-Postfächer haben oft 1-5 GB Speicher
3. **Spam-Filter**: Hostpoint bietet Spam-Filter (kann in Einstellungen aktiviert werden)
4. **Backup**: Regelmäßige Backups werden empfohlen

## 🔗 Nützliche Links

- **Hostpoint Support**: https://www.support.hostpoint.ch/de/technisches/e-mail/
- **Cloud Office**: https://www.hostpoint.ch/email/
- **E-Mail-Anleitung**: https://www.support.hostpoint.ch/de/technisches/e-mail/haeufig-gestellte-fragen/wie-erstelle-ich-eine-e-mail-adresse

## ✅ Checkliste

- [ ] Hostpoint Control Panel geöffnet
- [ ] E-Mail-Postfach `hello@tavyro.ch` erstellt
- [ ] Passwort gesichert gespeichert
- [ ] Test-E-Mail gesendet und empfangen
- [ ] E-Mail-Zugriff konfiguriert (Webmail oder E-Mail-Programm)

---

**Nach dem Setup**: Die E-Mail-Adresse `hello@tavyro.ch` auf Ihrer Website funktioniert sofort! 🎉
