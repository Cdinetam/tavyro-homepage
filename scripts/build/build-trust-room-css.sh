#!/usr/bin/env bash
#
# Precompiles the Tailwind CSS used by the static Trust Room pages and embeds
# it directly into the HTML files (removing the dev-only Tailwind CDN).
#
# Run this after changing the markup / classes in:
#   - public/tavyro-trust-room.html
#   - public/en/tavyro-trust-room.html
#
# Usage (from the project root):
#   bash scripts/build/build-trust-room-css.sh
#
set -euo pipefail

# Resolve project root (this script lives in scripts/build/).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$ROOT"

CONFIG="scripts/build/trust-room.tailwind.config.js"
TMP_CSS="$(mktemp -t trust-room-css.XXXXXX).css"
TMP_IN="$(mktemp -t trust-room-in.XXXXXX).css"

trap 'rm -f "$TMP_CSS" "$TMP_IN"' EXIT

printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' > "$TMP_IN"

echo "Compiling Tailwind CSS…"
npx tailwindcss -c "$CONFIG" -i "$TMP_IN" -o "$TMP_CSS" --minify

echo "Embedding into HTML…"
node scripts/build/inline-trust-room-css.js "$TMP_CSS"

echo "Done."
