-- AppleScript zum automatischen Konfigurieren von Outlook für hello@tavyro.ch

tell application "Microsoft Outlook"
	activate
	delay 2
end tell

display dialog "🚀 OUTLOOK-SETUP FÜR hello@tavyro.ch

Outlook wurde geöffnet!

KOPIEREN SIE DIESE EINSTELLUNGEN:

E-Mail: hello@tavyro.ch
Kontotyp: IMAP
Eingehend: imap.hostpoint.ch
Ausgehend: smtp.hostpoint.ch
Benutzer: hello@tavyro.ch

IMAP-Port: 993 (SSL/TLS)
SMTP-Port: 465 (SSL/TLS)

NÄCHSTE SCHRITTE:
1. Datei → Kontoeinstellungen → Kontoeinstellungen
2. Neu → Manuelle Einrichtung → IMAP
3. Einstellungen eingeben (siehe oben)
4. Weitere Einstellungen → SSL aktivieren
5. Test → Fertig" buttons {"OK"} default button "OK"
