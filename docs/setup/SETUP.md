# Node.js Installation für macOS

## Option 1: Homebrew (Empfohlen)

1. **Homebrew installieren** (falls noch nicht vorhanden):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Node.js installieren**:
   ```bash
   brew install node
   ```

3. **Installation prüfen**:
   ```bash
   node --version
   npm --version
   ```

## Option 2: Direkter Download

1. Besuchen Sie: https://nodejs.org/
2. Laden Sie die LTS-Version für macOS herunter
3. Führen Sie den Installer aus

## Option 3: nvm (Node Version Manager)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
nvm install --lts
nvm use --lts
```

## Nach der Installation

```bash
cd /Users/Tam/tavyro-homepage
npm install
npm run dev
```

Die Seite läuft dann unter: http://localhost:3000
