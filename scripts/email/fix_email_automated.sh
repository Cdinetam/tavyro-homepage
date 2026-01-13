#!/bin/bash

echo "🚀 Automatische E-Mail-Optimierung für hello@tavyro.ch"
echo "=================================================="
echo ""

# Prüfe aktuelle DNS-Konfiguration
echo "📋 Aktuelle DNS-Konfiguration:"
echo ""

echo "SPF-Record:"
SPF=$(dig +short tavyro.ch TXT | grep -i spf)
echo "$SPF"
echo ""

echo "DMARC-Record:"
DMARC=$(dig +short _dmarc.tavyro.ch TXT)
echo "$DMARC"
echo ""

echo "MX-Records:"
MX=$(dig +short tavyro.ch MX)
echo "$MX"
echo ""

# Prüfe, ob DMARC optimiert werden muss
if echo "$DMARC" | grep -q "p=quarantine"; then
    echo "⚠️  DMARC ist auf 'quarantine' gesetzt - das kann Spam verursachen!"
    echo ""
    echo "✅ OPTIMIERUNG ERFORDERLICH:"
    echo ""
    echo "Gehen Sie zu: https://admin.hostpoint.ch"
    echo "1. Domains → tavyro.ch → DNS-Verwaltung"
    echo "2. Suchen Sie nach: _dmarc TXT Record"
    echo "3. Ändern Sie den Wert zu:"
    echo ""
    echo "v=DMARC1; p=none; rua=mailto:hello@tavyro.ch; ruf=mailto:hello@tavyro.ch; pct=100; sp=none; aspf=r;"
    echo ""
    echo "4. Speichern Sie die Änderung"
    echo ""
    echo "⏳ Warten Sie 15-30 Minuten auf DNS-Propagation"
    echo ""
else
    echo "✅ DMARC-Record sieht gut aus!"
fi

echo ""
echo "=================================================="
echo "✅ Automatische Prüfung abgeschlossen!"
echo ""
echo "📧 E-Mail-Programm einrichten:"
echo "   Siehe: EMAIL_CLIENT_SETUP.md"
echo ""
echo "🧪 E-Mail-Deliverability testen:"
echo "   https://www.mail-tester.com/"
echo ""
