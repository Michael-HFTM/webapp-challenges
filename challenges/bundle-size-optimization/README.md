# Bundle Size Optimization — Team-Wettbewerb

**Kurstag:** 05 — DI, Services & Routing
**Typ:** Team-Wettbewerb
**Dauer:** 20 Min.
**Format:** In-Class, Teams à 2–3

---

## Ausgangslage

Ihr erhaltet eine Angular-App mit einem **unnötig grossen Initial Bundle**. Alle Routen werden eager geladen, obwohl viele davon selten besucht werden. Das Ziel: Die Initial Bundle Size so weit wie möglich reduzieren.

## Aufgabe

1. Analysiert die aktuelle Bundle-Grösse mit `ng build` (schaut auf die Initial Bundle Size)
2. Identifiziert Routen, die **lazy geladen** werden können
3. Implementiert **Lazy Loading** für diese Routen
4. Messt die neue Bundle-Grösse

## Wettbewerb

- Das Team mit der **kleinsten Initial Bundle Size** gewinnt
- Notiert eure Start- und End-Grösse
- Bereitet euch darauf vor, eure Strategie kurz zu erklären

## Regeln

- Die App muss **funktional bleiben** — alle Routen müssen erreichbar sein
- Nur Lazy Loading verwenden — keine Inhalte löschen
- Zeitlimit: **20 Minuten**

## Tipps

- `loadComponent: () => import('./...')` für Standalone-Komponenten
- Schaut euch an, welche Routen die grössten Komponenten haben
- `ng build --stats-json` + [esbuild Bundle Analyzer](https://esbuild.github.io/analyze/) helfen bei der Analyse
