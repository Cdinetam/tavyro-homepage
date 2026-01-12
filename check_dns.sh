#!/bin/bash
echo "🔍 Prüfe DNS-Konfiguration für tavyro.ch..."
echo ""

# Prüfe A-Record
A_RECORD=$(dig +short tavyro.ch A)
if [ "$A_RECORD" = "76.76.21.21" ]; then
    echo "✅ A-Record korrekt: $A_RECORD"
else
    echo "⏳ A-Record noch nicht konfiguriert oder propagiert"
    echo "   Erwartet: 76.76.21.21"
    echo "   Aktuell: $A_RECORD"
fi

echo ""
echo "🌐 Prüfe ob Website erreichbar ist..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://tavyro.ch 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "✅ Website ist erreichbar! (HTTP $HTTP_CODE)"
    echo "   Öffnen Sie: https://tavyro.ch"
else
    echo "⏳ Website noch nicht erreichbar (HTTP $HTTP_CODE)"
    echo "   DNS-Propagation kann 15-30 Minuten dauern"
fi

echo ""
echo "📧 Prüfen Sie auch Ihr E-Mail für Vercel-Bestätigung"
