# Vercel Setup & Deployment

## Schritt 1: Vercel CLI Login

Führen Sie aus:
```bash
vercel login
```

Dies öffnet Ihren Browser und führt Sie durch:
1. **GitHub-Account verbinden** (empfohlen - einfachste Methode)
2. Oder E-Mail/Passwort verwenden

## Schritt 2: Projekt mit Vercel verbinden

Nach dem Login:
```bash
vercel
```

Dies führt Sie durch:
1. Projekt-Name bestätigen
2. Verzeichnis bestätigen (Enter drücken)
3. Deployment-Einstellungen

## Schritt 3: Produktions-Deployment

```bash
vercel --prod
```

## Nützliche Vercel CLI Befehle

```bash
# Login-Status prüfen
vercel whoami

# Alle Deployments anzeigen
vercel ls

# Deployment-Logs anzeigen
vercel logs

# Projekt-Informationen
vercel inspect

# Environment-Variablen setzen
vercel env add VARIABLE_NAME

# Projekt löschen
vercel remove
```

## Deployment überwachen

### Über Vercel Dashboard:
- Gehen Sie zu: https://vercel.com/dashboard
- Sehen Sie alle Deployments
- Logs, Analytics, Settings

### Über CLI:
```bash
# Aktuelle Deployments
vercel ls

# Logs in Echtzeit
vercel logs --follow

# Deployment-Status
vercel inspect [deployment-url]
```

## Automatische Deployments

Nach dem ersten Setup:
- **Jeder Push zu GitHub** → Automatisches Deployment
- **Pull Requests** → Preview-Deployments
- Alles wird automatisch überwacht!

## Wichtige URLs

- **Dashboard**: https://vercel.com/dashboard
- **Dokumentation**: https://vercel.com/docs
- **CLI Docs**: https://vercel.com/docs/cli
