# Senior Refactoring Challenge

**Kurstag:** 02 — TypeScript Advanced
**Typ:** Refactoring
**Dauer:** 30 Min.
**Format:** Einzelarbeit, PR mit CodeGuardian-Review

---

## Ausgangslage

Du hast gerade als "Senior Developer" bei einem Startup angefangen. Der bisherige Entwickler hat den Code funktional geschrieben — aber mit vielen Redundanzen. Dein Auftrag: Den Code **DRY** (Don't Repeat Yourself) machen, ohne die Funktionalität zu ändern.

## Setup

```bash
npm install
```

## Validierung

Prüfe nach jedem Refactoring-Schritt, ob der Code weiterhin kompiliert:

```bash
npm run check
```

Keine Fehler = dein Refactoring ist korrekt. Die Funktionalität hat sich nicht verändert.

## Aufgabe

Öffne `messy-code.ts` und refaktoriere den Code mit folgenden TypeScript-Features:

- **`keyof`** — Typen aus Objekt-Keys ableiten
- **`typeof`** — Typen aus bestehenden Werten ableiten
- **Utility Types**: `Partial`, `Pick`, `Omit`, `Record`

### Regeln

1. Die Funktionalität darf sich **nicht ändern** — alle Typen und Funktionen müssen gleich arbeiten
2. Reduziere die Anzahl **manuell geschriebener Type-Definitionen** so weit wie möglich
3. Entferne **redundante Interface-Properties** durch Ableitung
4. Nutze **mindestens 3 verschiedene** der oben genannten Features

## Bewertung

Erstelle einen Pull Request. CodeGuardian prüft:
- Wurden redundante Typen durch abgeleitete Typen ersetzt?
- Werden `keyof`, `typeof` und Utility Types korrekt eingesetzt?
- Ist die Funktionalität erhalten geblieben?

## Tipps

- Schau dir zuerst an, welche Typen/Interfaces sich **wiederholen** oder **voneinander abhängen**
- Überlege: "Kann ich diesen Typ aus einem anderen **ableiten** statt ihn neu zu schreiben?"
- TypeScript Playground hilft beim Experimentieren
