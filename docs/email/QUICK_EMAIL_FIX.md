# ⚡ Schnell-Fix: E-Mail-Spam beheben (2 Minuten)

## 🎯 Problem
E-Mails gehen in Spam-Ordner

## ✅ Lösung (1 Klick)

Führen Sie aus:
```bash
./fix_email_automated.sh
```

Das Script zeigt Ihnen genau, was zu ändern ist!

---

## 🔧 Was das Script macht

1. ✅ Prüft aktuelle DNS-Konfiguration
2. ✅ Zeigt, ob DMARC optimiert werden muss
3. ✅ Gibt exakte Anweisungen zum Ändern

---

## 📧 E-Mail-Programm einrichten (Apple Mail)

### Schnell-Setup:

1. **Mail** → **Einstellungen** → **Konten** → **+**
2. **"Anderer E-Mail-Account"** wählen
3. Eingeben:
   - **E-Mail**: `hello@tavyro.ch`
   - **Passwort**: [Ihr Passwort]
4. **Server-Einstellungen** (falls nicht automatisch):
   - **IMAP**: `imap.hostpoint.ch:993` (SSL)
   - **SMTP**: `smtp.hostpoint.ch:465` (SSL)
5. **Fertig!** ✅

---

## 📧 E-Mail-Programm einrichten (Outlook)

### Schnell-Setup:

1. **Outlook** → **Datei** → **Kontoeinstellungen** → **Neu**
2. **"Manuelle Einrichtung"** wählen
3. Eingeben:
   - **E-Mail**: `hello@tavyro.ch`
   - **IMAP**: `imap.hostpoint.ch:993` (SSL)
   - **SMTP**: `smtp.hostpoint.ch:465` (SSL)
   - **Benutzername**: `hello@tavyro.ch`
   - **Passwort**: [Ihr Passwort]
4. **Fertig!** ✅

---

## 🎉 Fertig!

Nach dem DMARC-Fix sollten E-Mails weniger in Spam landen!
