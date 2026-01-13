#!/usr/bin/env python3
"""
Automatisches Outlook-Setup für hello@tavyro.ch
Dieses Script hilft beim Einrichten von Outlook
"""

import subprocess
import sys
import os

def print_header(text):
    print("\n" + "="*60)
    print(f"  {text}")
    print("="*60 + "\n")

def check_outlook_installed():
    """Prüft, ob Outlook installiert ist"""
    print_header("🔍 Prüfe Outlook-Installation")
    
    # Prüfe auf macOS
    if sys.platform == "darwin":
        result = subprocess.run(
            ["mdfind", "kMDItemKind == 'Application'", "-name", "Microsoft Outlook"],
            capture_output=True,
            text=True
        )
        if result.stdout.strip():
            print("✅ Microsoft Outlook gefunden!")
            return True
        else:
            # Prüfe alternativ
            outlook_paths = [
                "/Applications/Microsoft Outlook.app",
                "/Applications/Microsoft Office/Outlook.app",
            ]
            for path in outlook_paths:
                if os.path.exists(path):
                    print(f"✅ Outlook gefunden: {path}")
                    return True
    
    print("⚠️  Outlook nicht gefunden")
    print("   Bitte installieren Sie Microsoft Outlook")
    return False

def open_outlook():
    """Öffnet Outlook"""
    print_header("🚀 Öffne Outlook")
    
    if sys.platform == "darwin":
        try:
            subprocess.run(["open", "-a", "Microsoft Outlook"], check=True)
            print("✅ Outlook wird geöffnet...")
            return True
        except:
            # Versuche alternativen Pfad
            try:
                subprocess.run(["open", "/Applications/Microsoft Outlook.app"], check=True)
                print("✅ Outlook wird geöffnet...")
                return True
            except Exception as e:
                print(f"❌ Konnte Outlook nicht öffnen: {e}")
                return False
    else:
        print("⚠️  Bitte öffnen Sie Outlook manuell")
        return False

def print_setup_instructions():
    """Druckt Setup-Anweisungen"""
    print_header("📋 Outlook-Setup-Anweisungen")
    
    print("""
⚡ SCHNELL-SETUP (Folgen Sie diesen Schritten):

1️⃣ Outlook öffnen
   - Outlook sollte jetzt geöffnet sein
   - Falls nicht: Öffnen Sie Outlook manuell

2️⃣ Neues Konto hinzufügen
   - Datei → Kontoeinstellungen → Kontoeinstellungen
   - Klicken Sie auf "Neu"

3️⃣ Manuelle Einrichtung
   - Wählen Sie "Manuelle Einrichtung oder zusätzliche Servertypen"
   - Klicken Sie auf "Weiter"
   - Wählen Sie "POP oder IMAP"
   - Klicken Sie auf "Weiter"

4️⃣ Kontoinformationen eingeben:
   
   Ihr Name: TaVyro Support
   E-Mail-Adresse: hello@tavyro.ch
   Kontotyp: IMAP ✅ (wichtig!)
   Eingehender Server: imap.hostpoint.ch
   Ausgehender Server: smtp.hostpoint.ch
   Benutzername: hello@tavyro.ch
   Passwort: [Ihr Passwort]

5️⃣ Weitere Einstellungen
   - Klicken Sie auf "Weitere Einstellungen"
   - Registerkarte "Ausgehender Server":
     ✅ "Ausgehender Server erfordert Authentifizierung" aktivieren
     Wählen Sie "Gleich wie eingehender E-Mail-Server"
   - Registerkarte "Erweitert":
     Eingehender Server (IMAP): 993
     Verschlüsselung: SSL/TLS
     Ausgehender Server (SMTP): 465
     Verschlüsselung: SSL/TLS

6️⃣ Testen
   - Klicken Sie auf "Kontoeinstellungen testen"
   - Warten Sie auf Erfolgsmeldung
   - Klicken Sie auf "Fertig"

✅ FERTIG! Outlook ist jetzt eingerichtet!
    """)

def create_outlook_config_file():
    """Erstellt eine Konfigurationsdatei mit den Einstellungen"""
    config = """# Outlook-Konfiguration für hello@tavyro.ch

## Server-Einstellungen

### IMAP (Empfangen)
- Server: imap.hostpoint.ch
- Port: 993
- Verschlüsselung: SSL/TLS
- Benutzername: hello@tavyro.ch
- Passwort: [Ihr Passwort]

### SMTP (Senden)
- Server: smtp.hostpoint.ch
- Port: 465 (SSL) oder 587 (STARTTLS)
- Verschlüsselung: SSL/TLS
- Authentifizierung: Erforderlich
- Benutzername: hello@tavyro.ch
- Passwort: [Ihr Passwort]

## Wichtige Hinweise

1. Verwenden Sie IMAP (nicht POP!)
2. SSL/TLS muss aktiviert sein
3. Authentifizierung für SMTP ist erforderlich
4. Port 993 für IMAP, Port 465 für SMTP

## Troubleshooting

Falls Probleme auftreten:
- Prüfen Sie Benutzername und Passwort
- Stellen Sie sicher, dass SSL/TLS aktiviert ist
- Prüfen Sie Firewall-Einstellungen
- Versuchen Sie Port 587 statt 465 für SMTP
"""
    
    config_file = "outlook_config.txt"
    with open(config_file, "w", encoding="utf-8") as f:
        f.write(config)
    
    print(f"✅ Konfigurationsdatei erstellt: {config_file}")
    return config_file

def main():
    """Hauptfunktion"""
    print_header("🤖 Automatisches Outlook-Setup für hello@tavyro.ch")
    
    # Prüfe Outlook-Installation
    if not check_outlook_installed():
        print("\n⚠️  Bitte installieren Sie Microsoft Outlook zuerst")
        print("   Download: https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook")
        sys.exit(1)
    
    # Öffne Outlook
    open_outlook()
    
    # Erstelle Konfigurationsdatei
    create_outlook_config_file()
    
    # Zeige Anweisungen
    print_setup_instructions()
    
    print("\n" + "="*60)
    print("✅ Setup-Anleitung bereit!")
    print("="*60 + "\n")
    
    print("📋 Nächste Schritte:")
    print("   1. Folgen Sie den Anweisungen oben")
    print("   2. Prüfen Sie die Konfigurationsdatei: outlook_config.txt")
    print("   3. Testen Sie das Konto nach dem Setup")
    print()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Abgebrochen vom Benutzer.")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Fehler: {e}")
        sys.exit(1)
