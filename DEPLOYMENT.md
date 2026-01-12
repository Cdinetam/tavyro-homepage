# Deployment-Anleitung: Vercel + GitHub

## Was Sie installieren müssen

### Option 1: Vercel Dashboard (EMPFOHLEN - Keine Installation nötig)

**Keine zusätzliche Installation erforderlich!** Sie können direkt über das Vercel Dashboard deployen.

### Option 2: Vercel CLI (Optional)

Falls Sie lokal deployen möchten:

```bash
npm install -g vercel
```

## Schritt-für-Schritt Anleitung

### 1. GitHub Repository erstellen

1. Gehen Sie zu [github.com](https://github.com) und erstellen Sie ein neues Repository
2. Repository-Name: z.B. `tavyro-homepage`
3. **NICHT** "Initialize with README" auswählen (Repository ist bereits vorhanden)

### 2. Code zu GitHub pushen

```bash
# Remote hinzufügen (ersetzen Sie YOUR-USERNAME mit Ihrem GitHub-Username)
git remote add origin https://github.com/YOUR-USERNAME/tavyro-homepage.git

# Code pushen
git push -u origin main
```

### 3. Vercel Deployment

#### Option A: Über Vercel Dashboard (Empfohlen)

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Melden Sie sich an (kostenlos mit GitHub-Account)
3. Klicken Sie auf "Add New Project"
4. Wählen Sie Ihr GitHub-Repository aus
5. Vercel erkennt automatisch Next.js
6. Klicken Sie auf "Deploy"
7. Fertig! Ihre Website ist live

#### Option B: Über Vercel CLI

```bash
# Vercel CLI installieren (falls noch nicht geschehen)
npm install -g vercel

# Login bei Vercel
vercel login

# Projekt deployen
vercel

# Für Produktions-Deployment
vercel --prod
```

## Automatische Deployments

Nach dem ersten Setup:
- **Jeder Push zu GitHub** → Automatisches Deployment auf Vercel
- **Pull Requests** → Preview-Deployments werden automatisch erstellt

## Wichtige Hinweise

- Vercel erkennt Next.js automatisch - keine zusätzliche Konfiguration nötig
- Die `.gitignore` ist bereits korrekt konfiguriert
- `node_modules` werden automatisch installiert beim Build
- Die Website ist nach dem Deployment unter `https://ihr-projekt.vercel.app` erreichbar

## Troubleshooting

Falls es Probleme gibt:
- Stellen Sie sicher, dass `package.json` korrekt ist
- Prüfen Sie die Build-Logs in Vercel Dashboard
- Stellen Sie sicher, dass alle Dependencies in `package.json` aufgeführt sind
