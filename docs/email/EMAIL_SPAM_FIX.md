# 🛡️ E-Mail-Spam-Problem beheben für hello@tavyro.ch

## 🔍 Warum gehen E-Mails in Spam?

### Aktuelle DNS-Konfiguration (✅ Gut!)

**SPF Record**: ✅ Vorhanden
```
v=spf1 redirect=spf.mail.hostpoint.ch
```

**DMARC Record**: ✅ Vorhanden
```
v=DMARC1; p=quarantine;
```

### Mögliche Gründe für Spam

1. **Neue Domain/E-Mail-Adresse** (keine Reputation)
   - Neue E-Mail-Adressen haben noch keine "Reputation"
   - Spam-Filter sind bei neuen Adressen vorsichtiger

2. **DMARC auf "quarantine"**
   - Aktuell: `p=quarantine` (E-Mails werden in Quarantäne gestellt)
   - Empfehlung: `p=none` für den Anfang, später `p=reject`

3. **Fehlende DKIM-Signatur**
   - DKIM muss von Hostpoint konfiguriert werden
   - Prüfen Sie, ob DKIM aktiviert ist

4. **Absender-Reputation**
   - Muss über Zeit aufgebaut werden
   - Regelmäßiges Senden von legitimen E-Mails hilft

## 🔧 Lösungen

### Lösung 1: DMARC-Record optimieren (Empfohlen)

**Aktuell:**
```
v=DMARC1; p=quarantine;
```

**Empfohlen für den Anfang:**
```
v=DMARC1; p=none; rua=mailto:hello@tavyro.ch; ruf=mailto:hello@tavyro.ch; pct=100; sp=none; aspf=r;
```

**Später (nach 2-4 Wochen):**
```
v=DMARC1; p=reject; rua=mailto:hello@tavyro.ch; ruf=mailto:hello@tavyro.ch; pct=100; sp=reject; aspf=r;
```

**Was bedeutet das?**
- `p=none`: Keine Quarantäne (für den Anfang)
- `p=reject`: E-Mails werden abgelehnt (später)
- `rua`: Berichte an hello@tavyro.ch senden
- `ruf`: Forensische Berichte

### Lösung 2: DKIM aktivieren (Hostpoint)

1. **Hostpoint Control Panel** öffnen
2. **E-Mail** → **E-Mail-Adressen** → `hello@tavyro.ch`
3. **DKIM aktivieren** (falls verfügbar)
4. Oder **Hostpoint Support kontaktieren** für DKIM-Setup

### Lösung 3: SPF-Record optimieren (Optional)

**Aktuell:**
```
v=spf1 redirect=spf.mail.hostpoint.ch
```

**Optimiert (falls nötig):**
```
v=spf1 include:spf.mail.hostpoint.ch ~all
```

### Lösung 4: Absender-Reputation aufbauen

1. **Regelmäßig E-Mails senden** (nicht nur empfangen)
2. **An bekannte Kontakte senden** und um Antwort bitten
3. **E-Mails als "Nicht Spam" markieren lassen**
4. **Warm-up-Phase**: Langsam mit dem Versand beginnen

### Lösung 5: E-Mail-Inhalt optimieren

- **Vermeiden Sie Spam-Wörter**: "Free", "Click here", "Urgent", etc.
- **Professioneller Betreff**: Klar und präzise
- **Korrekte HTML-Formatierung**: Sauberer Code
- **Text-Version**: Immer auch eine Text-Version anbieten

## 📋 Schritt-für-Schritt: DMARC optimieren

### Schritt 1: Hostpoint Control Panel öffnen
1. Gehen Sie zu: https://admin.hostpoint.ch
2. Loggen Sie sich ein

### Schritt 2: DNS-Verwaltung öffnen
1. **Domains** → **tavyro.ch** → **DNS-Verwaltung**
2. Oder: **Domain-Verwaltung** → **DNS-Einstellungen**

### Schritt 3: DMARC-Record ändern

**Suchen Sie nach:**
- Typ: `TXT`
- Name: `_dmarc`
- Wert: `v=DMARC1; p=quarantine;`

**Ändern Sie zu:**
- Typ: `TXT`
- Name: `_dmarc`
- Wert: `v=DMARC1; p=none; rua=mailto:hello@tavyro.ch; ruf=mailto:hello@tavyro.ch; pct=100; sp=none; aspf=r;`

### Schritt 4: Speichern
- Klicken Sie auf **"Speichern"** oder **"Übernehmen"**
- Warten Sie 15-30 Minuten auf DNS-Propagation

### Schritt 5: Nach 2-4 Wochen: DMARC verschärfen

**Ändern Sie zu:**
```
v=DMARC1; p=reject; rua=mailto:hello@tavyro.ch; ruf=mailto:hello@tavyro.ch; pct=100; sp=reject; aspf=r;
```

## 🧪 E-Mail-Deliverability testen

### Online-Tools:

1. **MXToolbox**: https://mxtoolbox.com/dmarc.aspx
   - Prüft DMARC-Konfiguration

2. **Mail-Tester**: https://www.mail-tester.com/
   - Sendet Test-E-Mail und gibt Score (Ziel: 8-10/10)

3. **Google Postmaster Tools**: https://postmaster.google.com/
   - Überwacht E-Mail-Deliverability bei Gmail

4. **Microsoft SNDS**: https://sendersupport.olc.protection.outlook.com/snds/
   - Überwacht E-Mail-Deliverability bei Outlook

## ✅ Checkliste

- [ ] DMARC-Record optimiert (`p=none` für den Anfang)
- [ ] DKIM aktiviert (Hostpoint Support kontaktieren)
- [ ] SPF-Record geprüft (bereits vorhanden ✅)
- [ ] Test-E-Mail an mail-tester.com gesendet
- [ ] Google Postmaster Tools eingerichtet
- [ ] Regelmäßig legitime E-Mails senden
- [ ] Nach 2-4 Wochen: DMARC auf `p=reject` ändern

## 📞 Hostpoint Support kontaktieren

Falls DKIM nicht automatisch aktiviert ist:

**Support**: support@hostpoint.ch
**Telefon**: 0844 040404
**WhatsApp**: Mo - So, 8 - 18 Uhr

**Fragen Sie nach:**
- DKIM-Signatur für hello@tavyro.ch aktivieren
- DKIM-Selectors und Public Keys
- E-Mail-Deliverability-Optimierung

---

**Nach der Optimierung**: E-Mails sollten weniger häufig in Spam landen! 🎉
