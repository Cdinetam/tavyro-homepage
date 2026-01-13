#!/bin/bash

# Script zum kontinuierlichen Prüfen der Deployment-Status von tavyro.ch

DOMAIN="tavyro.ch"
VERCEL_IP="76.76.21.21"
CHECK_INTERVAL=30  # Sekunden zwischen Checks
MAX_CHECKS=20      # Maximale Anzahl Checks

echo "🔍 Starte kontinuierliche Prüfung von $DOMAIN"
echo "⏱️  Check-Intervall: $CHECK_INTERVAL Sekunden"
echo ""

check_count=0

while [ $check_count -lt $MAX_CHECKS ]; do
    check_count=$((check_count + 1))
    timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📍 Check #$check_count - $timestamp"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    # DNS A-Record prüfen
    echo -n "DNS (A-Record): "
    a_record=$(dig +short $DOMAIN A 2>/dev/null | head -1)
    if [ "$a_record" = "$VERCEL_IP" ]; then
        echo "✅ $a_record (korrekt)"
    else
        echo "⚠️  $a_record (erwartet: $VERCEL_IP)"
    fi
    
    # DNS AAAA-Record prüfen
    echo -n "DNS (AAAA-Record): "
    aaaa_record=$(dig +short $DOMAIN AAAA 2>/dev/null | head -1)
    if [ -z "$aaaa_record" ]; then
        echo "✅ Kein AAAA-Record (korrekt)"
    else
        echo "⚠️  $aaaa_record (sollte gelöscht werden)"
    fi
    
    # HTTP Test (IPv4)
    echo -n "HTTP (IPv4): "
    http_code=$(curl -4 -s -o /dev/null -w "%{http_code}" --max-time 5 http://$DOMAIN 2>/dev/null)
    http_server=$(curl -4 -s -I --max-time 5 http://$DOMAIN 2>/dev/null | grep -i "^server:" | head -1 | cut -d: -f2 | tr -d ' ')
    
    if [ "$http_code" = "200" ]; then
        if echo "$http_server" | grep -qi "vercel\|edge"; then
            echo "✅ $http_code - Vercel erkannt!"
            DEPLOYED=true
        else
            echo "⚠️  $http_code - $http_server (noch nicht Vercel)"
        fi
    else
        echo "❌ $http_code (nicht erreichbar)"
    fi
    
    # HTTPS Test
    echo -n "HTTPS: "
    https_code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 --connect-timeout 5 https://$DOMAIN 2>/dev/null)
    if [ "$https_code" = "200" ]; then
        echo "✅ $https_code - SSL funktioniert!"
        HTTPS_DEPLOYED=true
    elif [ "$https_code" = "000" ]; then
        echo "⏳ SSL noch nicht verfügbar"
    else
        echo "⚠️  $https_code"
    fi
    
    # Zusammenfassung
    if [ "$DEPLOYED" = "true" ] && [ "$HTTPS_DEPLOYED" = "true" ]; then
        echo ""
        echo "🎉 ERFOLG! Die Website ist jetzt online unter https://$DOMAIN"
        exit 0
    fi
    
    echo ""
    
    # Warte vor nächstem Check (außer beim letzten)
    if [ $check_count -lt $MAX_CHECKS ]; then
        echo "⏳ Warte $CHECK_INTERVAL Sekunden bis zum nächsten Check..."
        sleep $CHECK_INTERVAL
        echo ""
    fi
done

echo ""
echo "⏰ Maximale Anzahl Checks erreicht. Deployment-Prüfung beendet."
echo "💡 Tipp: Führen Sie das Script erneut aus, um weiter zu prüfen."
