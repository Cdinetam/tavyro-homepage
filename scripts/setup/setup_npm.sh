#!/bin/bash

# nvm laden
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Node.js Version aktivieren
nvm use default 2>/dev/null || nvm use --lts 2>/dev/null

# Prüfen ob alles funktioniert
echo "✅ Node.js Version: $(node --version)"
echo "✅ npm Version: $(npm --version)"
echo ""
echo "✅ npm-Befehle sind jetzt verfügbar!"
echo ""
echo "Verfügbare Befehle:"
echo "  npm run dev      - Entwicklungsserver starten"
echo "  npm run build    - Produktions-Build erstellen"
echo "  npm run start    - Produktions-Server starten"
echo "  npm run lint     - Code-Qualität prüfen"
