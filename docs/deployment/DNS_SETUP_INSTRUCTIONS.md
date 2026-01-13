# DNS-Konfiguration für tavyro.ch

## ✅ Domain wurde zu Vercel hinzugefügt!

Die Domain `tavyro.ch` wurde erfolgreich zu Ihrem Vercel-Projekt hinzugefügt.

## 🔧 DNS-Konfiguration bei Hostpoint

Ihr Domain-Provider ist: **Hostpoint** (ns.hostpoint.ch)

### Schritt 1: DNS-Records bei Hostpoint hinzufügen

Gehen Sie zu Ihrem Hostpoint-Dashboard und fügen Sie folgende DNS-Records hinzu:

#### Option A: A-Record (Empfohlen)

```
Type: A
Name: @ (oder leer lassen für Root-Domain)
Value: 76.76.21.21
TTL: 3600 (oder Auto)
```

#### Option B: CNAME für www

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (oder Auto)
```

### Schritt 2: Warten auf DNS-Propagation

- DNS-Änderungen können **15 Minuten bis 48 Stunden** dauern
- Normalerweise: **15-30 Minuten**

### Schritt 3: Verifikation

Nach der DNS-Konfiguration können Sie prüfen:

```bash
# DNS-Propagation prüfen
dig tavyro.ch
nslookup tavyro.ch

# Oder online:
# https://dnschecker.org/#A/tavyro.ch
```

### Schritt 4: SSL-Zertifikat

- Vercel erstellt automatisch ein SSL-Zertifikat (Let's Encrypt)
- Dies kann **5-10 Minuten** nach DNS-Propagation dauern
- Sie erhalten eine E-Mail von Vercel, wenn alles fertig ist

## 🚀 Deployment

**Sie können jetzt bereits deployen!**

Das Deployment wird automatisch auf `tavyro.ch` zeigen, sobald die DNS konfiguriert ist.

```bash
# Production-Deployment
git push origin main
```

Oder:

```bash
vercel --prod
```

## 📋 Aktueller Status

- ✅ Domain zu Vercel hinzugefügt: `tavyro.ch`
- ✅ Domain zu Vercel hinzugefügt: `www.tavyro.ch`
- ⏳ DNS-Records müssen bei Hostpoint konfiguriert werden
- ⏳ Warten auf DNS-Propagation
- ⏳ SSL-Zertifikat wird automatisch erstellt

## 🔍 Troubleshooting

Falls die Domain nicht funktioniert:

1. **DNS prüfen**: https://dnschecker.org/#A/tavyro.ch
2. **Vercel Dashboard**: https://vercel.com/cdinetams-projects/tavyro-homepage/settings/domains
3. **Vercel Status**: `vercel domains ls`

## 📧 Support

- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
- Hostpoint Support: Falls Probleme mit DNS-Konfiguration
