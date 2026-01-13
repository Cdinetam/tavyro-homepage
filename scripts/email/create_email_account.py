#!/usr/bin/env python3
"""
Interaktives Script zur Erstellung des E-Mail-Kontos hello@tavyro.ch
Dieses Script führt Sie durch den Prozess und prüft den Status.
"""

import subprocess
import sys
import time

def print_header(text):
    """Druckt einen formatierten Header"""
    print("\n" + "="*60)
    print(f"  {text}")
    print("="*60 + "\n")

def check_email_exists():
    """Prüft, ob das E-Mail-Konto bereits existiert"""
    print_header("📧 Prüfe E-Mail-Konto-Status")
    
    try:
        result = subprocess.run(
            ["python3", "test_email_account.py"],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        if "EXISTS" in result.stdout:
            print("✅ E-Mail-Konto hello@tavyro.ch existiert bereits!")
            return True
        elif "does NOT exist" in result.stdout:
            print("❌ E-Mail-Konto hello@tavyro.ch existiert noch nicht.")
            return False
        else:
            print("⚠️  Konnte Status nicht eindeutig bestimmen.")
            print(f"Output: {result.stdout}")
            return None
    except Exception as e:
        print(f"⚠️  Fehler beim Prüfen: {e}")
        return None

def print_instructions():
    """Druckt detaillierte Anweisungen"""
    print_header("📋 Schritt-für-Schritt Anleitung")
    
    steps = [
        ("1️⃣", "Browser öffnen", "https://admin.hostpoint.ch sollte bereits geöffnet sein"),
        ("2️⃣", "Einloggen", "Mit Ihrer Hostpoint ID und Passwort einloggen"),
        ("3️⃣", "Webhosting auswählen", "Klicken Sie auf 'Webhosting' oder suchen Sie nach 'tavyro.ch'"),
        ("4️⃣", "E-Mail-Bereich öffnen", "Im linken Menü auf 'E-Mail' klicken"),
        ("5️⃣", "E-Mail erstellen", "Auf 'E-Mail-Adresse erstellen' klicken"),
        ("6️⃣", "Formular ausfüllen", """
   - E-Mail-Adresse: hello
   - Domain: tavyro.ch (automatisch ausgewählt)
   - Passwort: [Wählen Sie ein sicheres Passwort]
   - Passwort bestätigen: [Gleiches Passwort]
   - Vorname: TaVyro
   - Nachname: Support
   - Cloud Office-Paket: Standard (kostenlos)
        """),
        ("7️⃣", "Erstellen", "Auf 'Erstellen' klicken und auf Bestätigung warten"),
    ]
    
    for icon, title, description in steps:
        print(f"{icon} {title}")
        print(f"   {description}")
        print()

def wait_for_user():
    """Wartet auf Benutzer-Bestätigung"""
    print("\n⏳ Warten auf Ihre Bestätigung...")
    print("   Sobald Sie das E-Mail-Konto erstellt haben, drücken Sie Enter.")
    print("   (Oder geben Sie 'q' ein, um abzubrechen)")
    
    user_input = input("\n➡️  Eingabe: ").strip().lower()
    
    if user_input == 'q':
        print("\n❌ Abgebrochen.")
        return False
    return True

def verify_creation():
    """Verifiziert die Erstellung des E-Mail-Kontos"""
    print_header("🔍 Verifiziere E-Mail-Konto-Erstellung")
    
    print("Prüfe, ob hello@tavyro.ch jetzt existiert...")
    time.sleep(2)
    
    exists = check_email_exists()
    
    if exists:
        print("\n✅ ERFOLG! Das E-Mail-Konto wurde erfolgreich erstellt!")
        print("\n📧 Nächste Schritte:")
        print("   1. Webmail öffnen: https://office.hostpoint.ch")
        print("   2. Login mit: hello@tavyro.ch + Passwort")
        print("   3. Test-E-Mail senden und empfangen")
        return True
    elif exists is False:
        print("\n⚠️  Das E-Mail-Konto scheint noch nicht zu existieren.")
        print("   Bitte prüfen Sie:")
        print("   - Haben Sie das Formular vollständig ausgefüllt?")
        print("   - Haben Sie auf 'Erstellen' geklickt?")
        print("   - Haben Sie eine Bestätigungsmeldung erhalten?")
        print("\n   Es kann einige Minuten dauern, bis das Konto aktiv ist.")
        return False
    else:
        print("\n⚠️  Konnte den Status nicht verifizieren.")
        print("   Bitte prüfen Sie manuell im Hostpoint Control Panel.")
        return None

def main():
    """Hauptfunktion"""
    print_header("🚀 E-Mail-Konto Setup für hello@tavyro.ch")
    
    # Prüfe aktuellen Status
    exists = check_email_exists()
    
    if exists:
        print("\n✅ Das E-Mail-Konto existiert bereits!")
        print("   Keine weiteren Schritte erforderlich.")
        sys.exit(0)
    
    # Zeige Anweisungen
    print_instructions()
    
    # Warte auf Benutzer
    if not wait_for_user():
        sys.exit(1)
    
    # Verifiziere Erstellung
    verify_creation()
    
    print("\n" + "="*60)
    print("  Setup abgeschlossen!")
    print("="*60 + "\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Abgebrochen vom Benutzer.")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Fehler: {e}")
        sys.exit(1)
