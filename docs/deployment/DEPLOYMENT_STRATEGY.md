# Deployment-Strategie für tavyro.ch

## 🎯 Zielsetzung

- **Production**: `tavyro.ch` (Haupt-Domain)
- **Staging/Preview**: `tavyro-tam.vercel.app` (Saubere Preview-URL)
- **Feature Branches**: Automatische Preview-Deployments mit lesbaren URLs

## 📋 Branching-Strategie

### Branches und ihre Deployments:

```
main (Production)
  └─> tavyro.ch
  └─> tavyro-homepage.vercel.app (Fallback)

staging (Staging/Testing)
  └─> tavyro-tam.vercel.app
  └─> Automatische Preview-Deployments

feature/* (Feature Branches)
  └─> Automatische Preview-Deployments
  └─> URL: tavyro-homepage-git-{branch-name}-{team}.vercel.app
```

## 🔧 Konfiguration

### 1. Vercel-Projekt-Einstellungen

#### Production Domain (tavyro.ch):
- **Branch**: `main`
- **Domain**: `tavyro.ch` + `www.tavyro.ch`
- **Auto-Deploy**: ✅ Aktiviert

#### Staging Domain (tavyro-tam.vercel.app):
- **Branch**: `staging` (zu erstellen)
- **Domain**: `tavyro-tam.vercel.app`
- **Auto-Deploy**: ✅ Aktiviert

### 2. GitHub Branch Protection

Empfohlene Einstellungen für `main`:
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date

## 🚀 Setup-Schritte

### Schritt 1: Staging-Branch erstellen

```bash
git checkout -b staging
git push -u origin staging
```

### Schritt 2: Vercel-Projekt konfigurieren

1. Gehen Sie zu: https://vercel.com/cdinetams-projects/tavyro-homepage/settings
2. **Git**: Stellen Sie sicher, dass GitHub verbunden ist
3. **Domains**: Fügen Sie `tavyro.ch` hinzu (siehe Domain-Setup unten)

### Schritt 3: Staging-Branch in Vercel konfigurieren

1. In Vercel Dashboard → Settings → Git
2. Fügen Sie `staging` Branch hinzu
3. Konfigurieren Sie Preview-Domain: `tavyro-tam.vercel.app`

### Schritt 4: Domain-Setup (tavyro.ch)

#### Option A: DNS bei Vercel verwalten (Empfohlen)

1. Vercel Dashboard → Settings → Domains
2. Fügen Sie `tavyro.ch` hinzu
3. Folgen Sie den DNS-Anweisungen von Vercel

#### Option B: Externes DNS

Fügen Sie diese DNS-Records bei Ihrem Domain-Provider hinzu:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Workflow

### Development Workflow:

1. **Feature entwickeln**:
   ```bash
   git checkout -b feature/neue-funktion
   # Code ändern
   git push origin feature/neue-funktion
   ```
   → Automatisches Preview-Deployment wird erstellt

2. **Testing auf Staging**:
   ```bash
   git checkout staging
   git merge feature/neue-funktion
   git push origin staging
   ```
   → Deployment auf `tavyro-tam.vercel.app`

3. **Production Release**:
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```
   → Deployment auf `tavyro.ch`

## 🔍 Monitoring & Überwachung

### Vercel Dashboard:
- **Production**: https://vercel.com/cdinetams-projects/tavyro-homepage
- **Deployments**: Alle Deployments werden automatisch gelistet
- **Analytics**: Performance-Metriken für Production

### CLI-Befehle:

```bash
# Alle Deployments anzeigen
vercel ls

# Production-Status prüfen
vercel inspect tavyro.ch

# Staging-Status prüfen
vercel inspect tavyro-tam.vercel.app

# Logs anzeigen
vercel logs --follow
```

## ✅ Best Practices

1. **Niemals direkt auf `main` pushen** (außer Hotfixes)
2. **Immer über Pull Requests** für Production
3. **Staging für Testing** vor Production
4. **Feature Branches** für neue Features
5. **Regelmäßige Deployments** von staging → main

## 🎨 URL-Struktur (Final)

- **Production**: `https://tavyro.ch`
- **Staging**: `https://tavyro-tam.vercel.app`
- **Feature Previews**: `https://tavyro-homepage-git-{branch}-{team}.vercel.app`

## 🔐 Sicherheit

- ✅ Environment Variables nur in Vercel Dashboard setzen
- ✅ `.env.local` niemals committen
- ✅ Sensible Daten nur über Vercel Environment Variables
