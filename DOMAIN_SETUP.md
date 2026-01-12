# Domain-Setup: tavyro.ch → Vercel

## 🎯 Ziel

Production-Domain `tavyro.ch` auf Vercel-Deployment zeigen.

## 📋 Schritt-für-Schritt Anleitung

### Option 1: Domain über Vercel verwalten (Empfohlen)

1. **Gehen Sie zu Vercel Dashboard**:
   - https://vercel.com/cdinetams-projects/tavyro-homepage/settings/domains

2. **Domain hinzufügen**:
   - Klicken Sie auf "Add Domain"
   - Geben Sie ein: `tavyro.ch`
   - Klicken Sie auf "Add"

3. **DNS-Konfiguration**:
   - Vercel zeigt Ihnen die benötigten DNS-Records
   - Kopieren Sie diese zu Ihrem Domain-Provider

4. **Bei Ihrem Domain-Provider** (z.B. Namecheap, GoDaddy, etc.):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **Warten Sie auf DNS-Propagation** (kann 24-48h dauern)

### Option 2: Externe DNS-Verwaltung

Falls Sie Ihre DNS extern verwalten möchten:

1. **In Vercel**: Domain hinzufügen (wie oben)
2. **Bei Ihrem DNS-Provider**: Fügen Sie die Records hinzu
3. **SSL-Zertifikat**: Wird automatisch von Vercel bereitgestellt

## ✅ Verifikation

Nach dem Setup können Sie prüfen:

```bash
# Domain-Status prüfen
vercel domains ls

# DNS-Propagation prüfen
dig tavyro.ch
nslookup tavyro.ch
```

## 🔄 Automatische Updates

Sobald die Domain konfiguriert ist:
- Jedes Deployment auf `main` → Automatisch auf `tavyro.ch` live
- SSL-Zertifikat wird automatisch erneuert
- www.tavyro.ch wird automatisch auf tavyro.ch umgeleitet

## 📝 Wichtige Hinweise

- **DNS-Propagation**: Kann 24-48 Stunden dauern
- **SSL-Zertifikat**: Wird automatisch von Vercel bereitgestellt (Let's Encrypt)
- **www-Subdomain**: Wird automatisch auf Haupt-Domain umgeleitet
- **HTTPS**: Wird automatisch aktiviert
