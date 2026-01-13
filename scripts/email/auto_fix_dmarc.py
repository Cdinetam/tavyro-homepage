#!/usr/bin/env python3
"""
Automatisches DMARC-Fix Script für hello@tavyro.ch
Dieses Script führt Sie durch den Prozess oder versucht, es automatisch zu machen.
"""

import subprocess
import sys
import time
import webbrowser
from urllib.parse import quote

def print_header(text):
    print("\n" + "="*60)
    print(f"  {text}")
    print("="*60 + "\n")

def check_current_dmarc():
    """Prüft aktuellen DMARC-Record"""
    try:
        result = subprocess.run(
            ["dig", "+short", "_dmarc.tavyro.ch", "TXT"],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0 and result.stdout.strip():
            dmarc = result.stdout.strip().strip('"')
            print(f"📋 Aktueller DMARC: {dmarc}")
            return dmarc
        else:
            print("⚠️  Konnte DMARC-Record nicht abrufen")
            return None
    except Exception as e:
        print(f"❌ Fehler: {e}")
        return None

def open_hostpoint_dns():
    """Öffnet Hostpoint DNS-Verwaltung im Browser"""
    print_header("🌐 Öffne Hostpoint Control Panel")
    
    # Hostpoint Control Panel URL
    url = "https://admin.hostpoint.ch"
    
    print(f"Öffne: {url}")
    print("\nBitte loggen Sie sich ein, dann navigieren Sie zu:")
    print("  Domains → tavyro.ch → DNS-Verwaltung")
    print("\nDas Script wartet 30 Sekunden, damit Sie sich einloggen können...")
    
    webbrowser.open(url)
    time.sleep(30)
    
    return True

def create_dmarc_instructions():
    """Erstellt detaillierte Anweisungen für DMARC-Änderung"""
    print_header("📋 DMARC-Record ändern")
    
    old_value = "v=DMARC1; p=quarantine;"
    new_value = "v=DMARC1; p=none; rua=mailto:hello@tavyro.ch; ruf=mailto:hello@tavyro.ch; pct=100; sp=none; aspf=r;"
    
    print("🔍 Aktueller Wert:")
    print(f"   {old_value}")
    print("\n✅ Neuer Wert (kopieren Sie diesen):")
    print(f"   {new_value}")
    print("\n📋 Schritte:")
    print("   1. Suchen Sie nach: _dmarc TXT Record")
    print("   2. Klicken Sie auf 'Bearbeiten' oder 'Edit'")
    print(f"   3. Ersetzen Sie den Wert mit: {new_value}")
    print("   4. Klicken Sie auf 'Speichern' oder 'Save'")
    print("\n⏳ Warten Sie 15-30 Minuten auf DNS-Propagation")
    
    return new_value

def verify_dmarc_change():
    """Verifiziert, ob DMARC geändert wurde"""
    print_header("🔍 Verifiziere DMARC-Änderung")
    
    print("Prüfe DMARC-Record...")
    time.sleep(5)
    
    dmarc = check_current_dmarc()
    
    if dmarc and "p=none" in dmarc:
        print("✅ ERFOLG! DMARC wurde erfolgreich geändert!")
        print("   E-Mails sollten jetzt weniger in Spam landen.")
        return True
    elif dmarc and "p=quarantine" in dmarc:
        print("⚠️  DMARC wurde noch nicht geändert.")
        print("   Bitte führen Sie die Änderung im Hostpoint Control Panel durch.")
        return False
    else:
        print("⚠️  Konnte DMARC-Status nicht verifizieren.")
        return None

def main():
    """Hauptfunktion"""
    print_header("🤖 Automatisches DMARC-Fix für hello@tavyro.ch")
    
    # Prüfe aktuellen Status
    current_dmarc = check_current_dmarc()
    
    if current_dmarc and "p=none" in current_dmarc:
        print("✅ DMARC ist bereits optimiert!")
        print("   Keine Änderung erforderlich.")
        sys.exit(0)
    
    if current_dmarc and "p=quarantine" in current_dmarc:
        print("⚠️  DMARC ist auf 'quarantine' - das verursacht Spam!")
        print("   Optimierung erforderlich.\n")
    
    # Öffne Browser
    open_hostpoint_dns()
    
    # Zeige Anweisungen
    new_value = create_dmarc_instructions()
    
    # Warte auf Benutzer
    print("\n" + "="*60)
    print("⏳ Warten auf Ihre Bestätigung...")
    print("   Nachdem Sie den DMARC-Record geändert haben:")
    print("   - Drücken Sie Enter, um zu verifizieren")
    print("   - Oder geben Sie 'q' ein, um abzubrechen")
    print("="*60)
    
    user_input = input("\n➡️  Eingabe: ").strip().lower()
    
    if user_input == 'q':
        print("\n❌ Abgebrochen.")
        sys.exit(1)
    
    # Verifiziere Änderung
    verify_dmarc_change()
    
    print("\n" + "="*60)
    print("✅ Prozess abgeschlossen!")
    print("="*60 + "\n")
    
    print("📧 Nächste Schritte:")
    print("   1. Warten Sie 15-30 Minuten auf DNS-Propagation")
    print("   2. Testen Sie E-Mail-Deliverability: https://www.mail-tester.com/")
    print("   3. Prüfen Sie, ob E-Mails weniger in Spam landen")
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
