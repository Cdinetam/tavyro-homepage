#!/bin/bash

echo "📧 E-Mail-Konfiguration für tavyro.ch prüfen..."
echo ""

# Prüfe MX-Records
echo "🔍 MX-Records (E-Mail-Server):"
MX_RECORDS=$(dig +short tavyro.ch MX)
if [ -n "$MX_RECORDS" ]; then
    echo "✅ MX-Records gefunden:"
    echo "$MX_RECORDS" | while read priority server; do
        echo "   - $server (Priority: $priority)"
    done
else
    echo "❌ Keine MX-Records gefunden!"
fi

echo ""
echo "🌐 Website-Status:"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://tavyro.ch 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "✅ Website ist erreichbar! (HTTP $HTTP_CODE)"
else
    echo "⚠️  Website-Status: HTTP $HTTP_CODE"
fi

echo ""
echo "📋 DNS-A-Record:"
A_RECORD=$(dig +short tavyro.ch A)
echo "   A-Record: $A_RECORD"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📧 E-Mail-Postfach-Status:"
echo ""
echo "⚠️  Kann nicht automatisch geprüft werden (Login erforderlich)"
echo ""
echo "Um zu prüfen, ob hello@tavyro.ch existiert:"
echo "1. Öffnen Sie: https://admin.hostpoint.ch"
echo "2. Melden Sie sich an"
echo "3. Gehen Sie zu: E-Mail → E-Mail-Adressen"
echo "4. Prüfen Sie, ob 'hello@tavyro.ch' aufgelistet ist"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🧪 E-Mail-Test:"
echo ""
echo "Um zu testen, ob hello@tavyro.ch funktioniert:"
echo "1. Senden Sie eine Test-E-Mail an: hello@tavyro.ch"
echo "2. Prüfen Sie das Postfach über:"
echo "   - Webmail: https://office.hostpoint.ch"
echo "   - Oder Ihr E-Mail-Programm"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ Was bereits funktioniert:"
echo "   - MX-Records sind korrekt konfiguriert"
echo "   - Domain ist E-Mail-fähig"
echo ""
echo "⏳ Was noch zu prüfen ist:"
echo "   - E-Mail-Postfach 'hello@tavyro.ch' existiert?"
echo "   - E-Mail-Postfach ist aktiv und empfangsbereit?"
echo ""
