#!/bin/bash

clear
echo "🚀 AUTOMATISCHES OUTLOOK-SETUP"
echo "================================"
echo ""

# Starte Outlook
echo "📧 Starte Outlook..."
open -a "Microsoft Outlook" 2>/dev/null || open "/Applications/Microsoft Outlook.app" 2>/dev/null
sleep 2

# Erstelle Einstellungen
cat > /Users/cdinetamCdinetam/Desktop/tavyro-homepage\ 20260112/OUTLOOK_EINSTELLUNGEN.txt << 'EOF'
📧 OUTLOOK-EINSTELLUNGEN FÜR hello@tavyro.ch
============================================

KOPIEREN SIE DIESE WERTE:

E-Mail-Adresse: hello@tavyro.ch
Kontotyp: IMAP
Eingehender Server: imap.hostpoint.ch
Ausgehender Server: smtp.hostpoint.ch
Benutzername: hello@tavyro.ch
Passwort: [Ihr Passwort]

ERWEITERT:
IMAP Port: 993 (SSL/TLS)
SMTP Port: 465 (SSL/TLS)
Authentifizierung: Aktiviert

============================================
EOF

echo "✅ Outlook geöffnet"
echo "✅ Einstellungsdatei erstellt"
echo ""
echo "📋 IHRE EINSTELLUNGEN:"
cat /Users/cdinetamCdinetam/Desktop/tavyro-homepage\ 20260112/OUTLOOK_EINSTELLUNGEN.txt
echo ""

# Öffne Einstellungsdatei
open /Users/cdinetamCdinetam/Desktop/tavyro-homepage\ 20260112/OUTLOOK_EINSTELLUNGEN.txt

# Führe AppleScript aus
osascript /Users/cdinetamCdinetam/Desktop/tavyro-homepage\ 20260112/configure_outlook.applescript 2>/dev/null &

echo "================================"
echo "✅ FERTIG! Folgen Sie den Dialogen"
echo "================================"
