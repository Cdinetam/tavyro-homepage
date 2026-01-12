# Node.js und npm Installation

## Option 1: Direkt von nodejs.org (Schnellste Methode)

1. **Gehen Sie zu:** https://nodejs.org/
2. **Laden Sie die LTS-Version herunter** (empfohlen für Stabilität)
3. **Installieren Sie das .pkg-Paket** (Doppelklick und Anweisungen folgen)
4. **Terminal neu starten** oder führen Sie aus:
   ```bash
   source ~/.zshrc
   ```
5. **Überprüfen Sie die Installation:**
   ```bash
   node --version
   npm --version
   ```

## Option 2: Mit Homebrew (Für Entwickler empfohlen)

### Schritt 1: Homebrew installieren

Führen Sie diesen Befehl in Ihrem Terminal aus:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Folgen Sie den Anweisungen auf dem Bildschirm.

### Schritt 2: Node.js installieren

Nach der Homebrew-Installation:

```bash
brew install node
```

### Schritt 3: Überprüfen

```bash
node --version
npm --version
```

## Nach der Installation

Sobald npm installiert ist, können Sie:

1. **Dependencies installieren:**
   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

3. **Für Vercel Deployment:**
   ```bash
   npm install -g vercel  # Optional, nur wenn Sie CLI verwenden möchten
   ```

## Troubleshooting

Falls npm nach der Installation immer noch nicht gefunden wird:

1. **Terminal komplett neu starten**
2. **Prüfen Sie den PATH:**
   ```bash
   echo $PATH
   ```
3. **Fügen Sie Node.js zum PATH hinzu** (falls nötig):
   ```bash
   echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
   source ~/.zshrc
   ```
