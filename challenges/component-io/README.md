# Component I/O — BugHunt

**Kurstag:** 04 — Components & Data Binding
**Typ:** BugHunt (Warm-up)
**Dauer:** 30 Min.
**Bugs:** 4 (3 Basis + 1 Experte)
**Format:** Partnerarbeit, PR mit CodeGuardian-Review

---

## Ausgangslage

Eine Angular-App mit Parent- und Child-Komponenten hat Probleme mit der Kommunikation. Die Daten fliessen nicht korrekt zwischen den Komponenten — die App zeigt falsche oder keine Daten an.

## Setup

```bash
cd challenges/component-io
npm install
ng serve
```

Öffne `http://localhost:4200` im Browser und die Browser-Konsole (F12).

## Aufgabe

Finde und fixe die **4 Bugs** in der Component-Kommunikation:
- Die Bugs betreffen `input()`, `output()` und/oder den Control Flow (`@if`, `@for`)
- Die App soll nach dem Fix korrekt Daten anzeigen und Events weiterleiten
- **Basis:** 3 Bugs finden und fixen
- **Experte:** Alle 4 Bugs finden und fixen

## Hinweise

- Öffne die Browser-Konsole — Fehlermeldungen helfen dir weiter
- Vergleiche die Template-Bindings mit den Component-Properties
- Achte auf die Signal-based I/O API (`input()`, `output()`)
- Lies den Control Flow (`@if`, `@for`) sorgfältig

## Abgabe

Fork → Fix → Pull Request → CodeGuardian-Review anfordern (✨)
