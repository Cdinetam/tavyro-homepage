#!/bin/bash

echo "📧 E-Mail-Deliverability-Check für hello@tavyro.ch"
echo ""

echo "🔍 SPF-Record:"
dig +short tavyro.ch TXT | grep -i spf || echo "❌ Kein SPF-Record gefunden"
echo ""

echo "🔍 DMARC-Record:"
dig +short _dmarc.tavyro.ch TXT || echo "❌ Kein DMARC-Record gefunden"
echo ""

echo "🔍 MX-Records:"
dig +short tavyro.ch MX
echo ""

echo "📋 Nächste Schritte:"
echo "1. Testen Sie Ihre E-Mail-Deliverability: https://www.mail-tester.com/"
echo "2. Prüfen Sie DMARC: https://mxtoolbox.com/dmarc.aspx"
echo "3. Google Postmaster Tools: https://postmaster.google.com/"
echo ""
