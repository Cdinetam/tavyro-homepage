# Microsoft Bookings URLs für TaVyro

## 🔗 URLs zum Eintragen

Nach dem Setup von Microsoft Bookings (siehe `docs/setup/MICROSOFT_BOOKINGS_SETUP.md`):

### 1. iFrame Embed URL
Diese URL wird für das eingebettete Buchungsportal verwendet:
```
https://outlook.office.com/bookwithme/user/[IHRE-ID]?anonymous&ep=[EVENT-ID]&isembed=true
```

### 2. Direct Booking Page URL
Diese URL wird als Fallback-Link verwendet:
```
https://outlook.office.com/bookwithme/user/[IHRE-ID]?anonymous&ep=[EVENT-ID]
```

## 📝 Wo eintragen?

**Datei:** `app/erstgespraech-buchen/page.tsx`

**Zeilen 9-10:**
```typescript
const BOOKINGS_IFRAME_URL = ""; // Hier URL 1 eintragen
const BOOKINGS_PAGE_URL = "";   // Hier URL 2 eintragen
```

## ✅ Nach dem Eintragen

1. Speichern Sie die Datei
2. Die Seite lädt automatisch neu (Hot Reload)
3. Das Buchungsportal sollte jetzt sichtbar sein
4. Testen Sie einen Termin

## 🔍 URLs finden

1. Gehen Sie zu: https://outlook.office.com/bookings
2. Wählen Sie Ihre Buchungsseite
3. Klicken Sie auf "Buchungsseite" → "Teilen"
4. Kopieren Sie die URLs

---

**Kontakt:** hello@tavyro.ch | +41 78 686 80 89
