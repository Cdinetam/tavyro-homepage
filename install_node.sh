#!/bin/bash

# nvm laden
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Node.js LTS installieren
echo "Installiere Node.js LTS..."
nvm install --lts

# Node.js als Standard setzen
nvm use --lts
nvm alias default node

# Installation überprüfen
echo ""
echo "=== Installation abgeschlossen ==="
node --version
npm --version

echo ""
echo "Jetzt können Sie ausführen:"
echo "  npm install"
echo "  npm run dev"
