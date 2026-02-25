# Reactive Graph zeichnen

**Kurstag:** 08 — State Management mit Signals
**Typ:** Gruppenarbeit
**Dauer:** 15 Min.
**Format:** In-Class, Whiteboard/Papier

---

## Aufgabe

Ihr erhaltet ein **Handout mit 6 Code-Szenarien** — Angular-Komponenten mit Signals, Computed und Effects. Für jedes Szenario:

1. **Zeichne den Reactive Graph** — die Abhängigkeiten zwischen Signal-Quellen und -Konsumenten
2. Oder: **Erkläre, warum kein Reactive Graph existiert**

## Legende

Verwende folgende Symbole in euren Graphs:

| Symbol | Bedeutung |
|--------|-----------|
| **(O)** Kreis | `signal()` |
| **<>** Raute | `computed()` |
| **[ ]** Quadrat | `effect()` |
| **[[ ]]** Rechteck | Template-Binding |
| **→** Pfeil | Abhängigkeit (liest von) |

## Regeln

- Zeichnet auf **Whiteboard oder Papier**
- Arbeitet in Gruppen à 2–3 Personen
- **Nicht im Code ausführen** — das Ziel ist, den Graph im Kopf zu konstruieren
- Diskutiert bei Uneinigkeit: Wer hat recht und warum?

## Hinweise

- Ein Signal ohne Konsument (nicht im Template, kein computed, kein effect) = **kein Graph**
- `counter()` im Template = Template liest das Signal = Pfeil von Signal zu Template
- `computed()` liest Signals und wird selbst gelesen = Zwischenknoten im Graph
- `effect()` liest Signals, hat aber **keinen Rückgabewert** = Endknoten (Seiteneffekt)

## Bonusfrage

Auf dem Handout findest du eine Bonusfrage zum letzten Szenario. Wer sie korrekt beantwortet, bekommt Respekt.

---

*Das Handout mit den 6 Szenarien wird im Unterricht ausgeteilt. Siehe `handout.md`.*
