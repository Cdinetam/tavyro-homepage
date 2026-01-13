# Agent Instructions - TaVyro Homepage

Dieses Dokument enthält Anweisungen für AI Coding Assistenten, die an diesem Projekt arbeiten.

## Projekt-Übersicht

Dies ist eine moderne, professionelle Homepage für **TaVyro** – Fractional CHRO & People Advisory.

- **Technologie**: Next.js 14 (App Router), TypeScript, React 18, Tailwind CSS
- **Zweck**: Business-Website für eine Fractional CHRO & People Advisory Firma
- **Stil**: C-Level Tonalität, professionell, modern, vollständig responsive

## Technologie-Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript (strict mode aktiviert)
- **Styling**: Tailwind CSS
- **UI**: React 18 mit funktionalen Komponenten und Hooks
- **Deployment**: Vercel (Production: tavyro.ch, Staging: tavyro-tam.vercel.app)

## Entwicklungskommandos

- `npm run dev` - Startet den Development Server auf http://localhost:3000
- `npm run build` - Erstellt einen Production Build
- `npm run start` - Startet den Production Server
- `npm run lint` - Führt ESLint aus

## Code-Style Richtlinien

### TypeScript

- **Alle neuen Dateien**: Verwenden Sie TypeScript (.tsx für Komponenten, .ts für Utilities)
- **Strict Mode**: Aktiviert - verwenden Sie strikte Typisierung
- **Typen**: Explizite Typen bevorzugen, `any` vermeiden
- **Imports**: Absolute Imports mit `@/` Alias (konfiguriert in tsconfig.json)

### React Komponenten

- **Komponenten-Typ**: Funktionale Komponenten mit Hooks
- **Naming**: PascalCase für Komponenten (z.B. `Hero.tsx`, `Contact.tsx`)
- **Export**: Default Export für Komponenten
- **Props**: TypeScript Interfaces für Props definieren

### Styling

- **Framework**: Tailwind CSS (keine zusätzlichen CSS-Frameworks)
- **Responsive**: Mobile-First Approach
- **Klassen**: Verwenden Sie Tailwind Utility-Klassen
- **Globale Styles**: Nur in `app/globals.css` (für Basis-Styles)

### Projektstruktur

```
/app              - Next.js App Router (Seiten, Layouts, globale Styles)
/components       - React Komponenten (alle Business-Komponenten)
/public           - Statische Assets (falls benötigt)
```

### Komponenten-Architektur

Die Hauptseite besteht aus folgenden Komponenten (in dieser Reihenfolge):
1. `Navigation.tsx` - Hauptnavigation
2. `Hero.tsx` - Hero-Sektion
3. `TrustAnchors.tsx` - Trust-Elemente
4. `Impact.tsx` - Impact/Metriken
5. `TargetAudience.tsx` - Zielgruppe
6. `Services.tsx` - Dienstleistungen
7. `Pricing.tsx` - Preise
8. `Coaching.tsx` - Coaching-Angebote
9. `About.tsx` - Über uns
10. `Contact.tsx` - Kontaktformular
11. `Footer.tsx` - Footer

### Naming-Konventionen

- **Komponenten**: PascalCase (z.B. `Hero.tsx`, `ContactForm.tsx`)
- **Dateien**: PascalCase für Komponenten, camelCase für Utilities
- **Variablen/Funktionen**: camelCase
- **Konstanten**: UPPER_SNAKE_CASE

## Software Engineering Best Practices

Diese Prinzipien sollten bei allen Code-Änderungen befolgt werden:

### DRY (Don't Repeat Yourself)

- **Wiederverwendbare Logik**: Extrahiere gemeinsame Logik in Utility-Funktionen oder Custom Hooks
- **Shared Components**: Erstelle wiederverwendbare UI-Komponenten für wiederkehrende Muster (z.B. `Button`, `Card`, `Section`)
- **Konstanten**: Definiere wiederkehrende Werte (z.B. Kontaktinformationen, Styles) zentral
- **Beispiel**: Statt `container-custom` und `section-padding` in jeder Komponente zu wiederholen, verwende gemeinsame Komponenten oder Tailwind-Konfiguration

### SSOT (Single Source of Truth)

- **Daten zentralisieren**: Geschäftsdaten (Services, Preise, Kontaktinformationen) sollten an einem zentralen Ort definiert werden
- **Kontaktinformationen**: E-Mail, Telefon, LinkedIn-Links sollten in einer zentralen Konfigurationsdatei oder Konstante gespeichert sein (nicht in `Contact.tsx` UND `Footer.tsx` duplizieren)
- **Konfiguration**: Erstelle `/lib/constants.ts` oder `/config/site.ts` für zentrale Daten
- **Beispiel**: Kontaktinformationen, Preise, Service-Listen sollten aus einer einzigen Quelle kommen

### SOC (Separation of Concerns)

- **Präsentation vs. Logik**: Trenne Datenlogik von Präsentationslogik
- **Komponenten-Verantwortlichkeiten**: Jede Komponente sollte eine klare, einzelne Verantwortlichkeit haben
- **Business Logic**: Extrahiere komplexe Logik in separate Utility-Funktionen oder Hooks
- **Styling**: Halte Styling-Logik getrennt von Business-Logik
- **Beispiel**: Daten-Fetching oder Berechnungen sollten nicht direkt in JSX sein

### Modularität

- **Komponenten-Größe**: Komponenten sollten fokussiert und überschaubar bleiben (idealerweise < 200 Zeilen)
- **Composition**: Verwende Komposition statt großer, monolithischer Komponenten
- **Lose Kopplung**: Komponenten sollten möglichst unabhängig voneinander sein
- **Wiederverwendbarkeit**: Erstelle kleine, wiederverwendbare Komponenten
- **Beispiel**: Statt einer großen `Services` Komponente, könnten `ServiceCard`, `ServiceList`, `ServiceGrid` erstellt werden

### Wartbarkeit (Maintainability)

- **Lesbarkeit**: Code sollte selbsterklärend sein - verwende aussagekräftige Namen
- **Kommentare**: Kommentiere "Warum", nicht "Was" (der Code sollte sich selbst erklären)
- **Komplexität vermeiden**: Halte Code einfach und direkt - vermeide unnötige Abstraktionen
- **Refactoring**: Verbessere bestehenden Code schrittweise, wenn du ihn berührst
- **Dokumentation**: Wichtige Entscheidungen oder komplexe Logik sollten dokumentiert sein

### Progressive Disclosure

- **Benutzerführung**: Zeige nur relevante Information - verstecke Details, bis sie benötigt werden
- **UI-Patterns**: Verwende Accordions, Tabs, oder "Mehr anzeigen"-Buttons für sekundäre Informationen
- **Mobile-First**: Beginne mit der essentiellen Information, füge Details für größere Screens hinzu
- **Lazy Loading**: Lade Inhalte nur bei Bedarf (z.B. Bilder, schwere Komponenten)

### KISS (Keep It Simple, Stupid)

- **Einfachheit vor Optimierung**: Verwende die einfachste Lösung, die funktioniert
- **Vermeide Over-Engineering**: Baue nur, was jetzt benötigt wird
- **Native Features**: Nutze Browser-APIs und React-Features bevor du externe Libraries hinzufügst
- **Beispiel**: Verwende React State statt Redux, es sei denn, es gibt einen klaren Bedarf

### YAGNI (You Aren't Gonna Need It)

- **Zukünftige Features**: Implementiere keine Features, die noch nicht benötigt werden
- **Abstraktionen**: Erstelle keine Abstraktionen "für später"
- **Focus**: Konzentriere dich auf aktuelle Anforderungen

### SOLID Principles (wo anwendbar)

- **Single Responsibility**: Jede Komponente/Funktion sollte einen einzigen Grund zum Ändern haben
- **Open/Closed**: Offen für Erweiterung, geschlossen für Modifikation (z.B. durch Props-Erweiterung)
- **Dependency Inversion**: Komponenten sollten von Abstraktionen abhängen, nicht von konkreten Implementierungen

### Code-Organisation

- **Daten-Struktur**: Erstelle `/lib` oder `/utils` für wiederverwendbare Funktionen
- **Konstanten**: Erstelle `/config` oder `/constants` für zentrale Daten und Konfiguration
- **Types**: Erstelle `/types` für TypeScript Interfaces und Types (falls nötig)
- **Hooks**: Erstelle `/hooks` für Custom React Hooks (falls nötig)

### Refactoring-Richtlinien

- **Incremental**: Refactoriere schrittweise, nicht alles auf einmal
- **Tests**: Stelle sicher, dass bestehende Funktionalität erhalten bleibt
- **Während der Arbeit**: Nutze die Gelegenheit, Code zu verbessern, wenn du ihn ohnehin anfasst
- **Boy Scout Rule**: "Leave the code cleaner than you found it"

### Performance-Konsiderationen

- **Unnötige Re-Renders vermeiden**: Verwende `React.memo`, `useMemo`, `useCallback` wenn nötig
- **Code Splitting**: Nutze Next.js Dynamic Imports für große Komponenten
- **Bilder**: Nutze Next.js `Image` Component für optimierte Bilder
- **Bundle Size**: Achte auf Bundle-Größe - vermeide unnötige Dependencies

### Quick Reference: Best Practices Checkliste

Vor jeder Code-Änderung prüfen:

- [ ] **DRY**: Wird Code wiederholt? → In Funktion/Komponente extrahieren
- [ ] **SSOT**: Gibt es mehrere Quellen für dieselben Daten? → Zentrale Konfiguration erstellen
- [ ] **SOC**: Hat die Komponente eine klare, einzelne Verantwortlichkeit?
- [ ] **Modularität**: Ist die Komponente zu groß (> 200 Zeilen)? → In kleinere Teile zerlegen
- [ ] **Wartbarkeit**: Ist der Code lesbar und selbsterklärend?
- [ ] **KISS**: Ist dies die einfachste Lösung, die funktioniert?
- [ ] **YAGNI**: Wird wirklich nur das implementiert, was jetzt benötigt wird?

## Projekt-spezifische Konventionen

### Tonalität

- **Zielgruppe**: C-Level Executives
- **Sprache**: Professionell, aber zugänglich
- **Stil**: Business-orientiert, vertrauenswürdig, modern

### Kontaktinformationen (SSOT beachten!)

**⚠️ Aktueller Zustand**: Kontaktinformationen sind derzeit in mehreren Komponenten dupliziert.

**Empfohlene Verbesserung**: Kontaktinformationen sollten zentral in einer Konfigurationsdatei gespeichert werden (z.B. `/lib/constants.ts` oder `/config/site.ts`).

Aktuell finden sich Kontaktinformationen in:
- `components/Contact.tsx`
- `components/Footer.tsx`

### Responsive Design

- **Mobile-First**: Immer zuerst für Mobile entwickeln
- **Breakpoints**: Tailwind Standard (sm, md, lg, xl, 2xl)
- **Testen**: Alle Komponenten sollten auf verschiedenen Bildschirmgrößen getestet werden

## Abhängigkeiten

### Dependencies
- `next`: ^14.2.0
- `react`: ^18.3.0
- `react-dom`: ^18.3.0
- `codex`: ^0.2.3

### DevDependencies
- `typescript`: ^5.4.5
- `tailwindcss`: ^3.4.3
- `eslint`: ^8.57.0
- `eslint-config-next`: ^14.2.0

### Regeln für neue Abhängigkeiten

- **Prüfen**: Immer zuerst prüfen, ob eine Abhängigkeit bereits existiert
- **Begründung**: Neue Abhängigkeiten sollten gut begründet sein
- **Alternativen**: Native Browser-APIs bevorzugen wenn möglich
- **Versions**: Verwenden Sie die in package.json definierten Versionen

## Deployment

### Vercel

- **Production**: `main` Branch → `tavyro.ch`
- **Staging**: `staging` Branch → `tavyro-tam.vercel.app`
- **Previews**: Automatische Deployments für Feature Branches
- **Automatisch**: Jeder Push zu GitHub triggert automatisches Deployment

### Git Workflow

- **Production**: `main` Branch
- **Staging**: `staging` Branch
- **Features**: `feature/*` Branches
- **Repository**: `Cdinetam/tavyro-homepage`

## Testing & Qualitätssicherung

- **Linting**: ESLint mit Next.js Config
- **Type Checking**: TypeScript Compiler (strict mode)
- **Build Check**: `npm run build` sollte ohne Fehler durchlaufen

## Wichtige Hinweise

1. **Keine Breaking Changes**: Bei Änderungen an bestehenden Komponenten sicherstellen, dass die Seite weiterhin funktioniert
2. **Performance**: Next.js App Router Features nutzen (Server Components wenn möglich)
3. **SEO**: Meta-Tags sind bereits im Layout konfiguriert
4. **Accessibility**: WCAG-Richtlinien beachten
5. **Browser Support**: Moderne Browser (Chrome, Firefox, Safari, Edge)

## Häufige Aufgaben

### Neue Sektion hinzufügen

1. Neue Komponente in `/components` erstellen
2. Komponente in `app/page.tsx` importieren und einfügen
3. Navigation ggf. in `components/Navigation.tsx` aktualisieren
4. **Best Practice**: Daten sollten zentral in `/lib/constants.ts` gespeichert werden (SSOT)

### Styling anpassen

- Tailwind-Klassen verwenden
- Globale Styles nur wenn absolut notwendig in `app/globals.css`
- **Best Practice**: Wiederkehrende Styles als Utility-Klassen oder Komponenten extrahieren (DRY)

### Kontaktinformationen ändern

**⚠️ Aktuell**: Kontaktinformationen sind in mehreren Komponenten dupliziert.

**Empfohlener Workflow** (nach Refactoring):
1. Ändere Kontaktinformationen in zentraler Konfigurationsdatei (z.B. `/lib/constants.ts`)
2. Komponenten importieren die Daten aus dieser zentralen Quelle (SSOT)

**Aktueller Workflow** (vor Refactoring):
- `components/Contact.tsx` bearbeiten
- `components/Footer.tsx` bearbeiten (falls auch dort vorhanden)

### Best Practices in der Praxis anwenden

#### SSOT für Geschäftsdaten

**Problem**: Daten (Services, Preise, Kontaktinformationen) sind in Komponenten hardcodiert.

**Lösung**: Erstelle `/lib/constants.ts` oder `/config/site.ts`:

```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  contact: {
    email: "hello@tavyro.ch",
    phone: "+41XXXXXXXXX",
    linkedin: "https://linkedin.com/company/tavyro",
  },
  services: [...],
  pricing: [...],
  // etc.
};
```

#### DRY für wiederkehrende UI-Patterns

**Problem**: Wiederkehrende UI-Patterns (z.B. Cards, Buttons, Sections) werden dupliziert.

**Lösung**: Erstelle wiederverwendbare Komponenten:
- `/components/ui/Button.tsx`
- `/components/ui/Card.tsx`
- `/components/ui/Section.tsx`

#### Modularität für große Komponenten

**Problem**: Große Komponenten sind schwer zu warten.

**Lösung**: Zerlege große Komponenten in kleinere, fokussierte Komponenten:
- `Services.tsx` → `ServiceCard.tsx` + `ServiceList.tsx` + `Services.tsx`
- `Pricing.tsx` → `PricingCard.tsx` + `PricingGrid.tsx` + `Pricing.tsx`

## Problembehandlung

- **Build-Fehler**: `npm run build` ausführen und Fehler beheben
- **TypeScript-Fehler**: `npx tsc --noEmit` für Type-Checking
- **Linting-Fehler**: `npm run lint` für Details
- **Styling-Probleme**: Tailwind-Klassen prüfen, ggf. `tailwind.config.ts` anpassen