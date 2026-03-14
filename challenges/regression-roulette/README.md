# Regression Roulette — Bug oder Feature?

**Kurstag:** 12 — Testing
**Typ:** In-Class Coding
**Dauer:** 20 Min.
**Format:** Einzelarbeit

---

## Ausgangslage

Du erhältst einen **TaskManager** — eine einfache Aufgabenverwaltung in TypeScript mit einer **vollständigen, grünen Test-Suite** (Vitest). Alle 9 Tests sind grün. Der Code funktioniert.

Dann kommt der Product Owner mit **3 Änderungswünschen**. Du setzt sie um — und plötzlich werden Tests rot.

**Deine Aufgabe:** Für jeden roten Test entscheiden: Ist der Test **veraltet** (Feature-Änderung) oder hast du eine **Regression** eingebaut (Bug)?

---

## Setup (3 Min.)

```bash
cd challenges/regression-roulette
npm install
npm test
```

**Erwartete Ausgabe:** Alle 10 Tests grün.

Schau dir den Code an:
- `src/task-manager.ts` — die TaskManager-Klasse
- `src/task-manager.spec.ts` — die Test-Suite

---

## Ablauf

### 1. Änderungswünsche umsetzen (10 Min.)

Der Dozent gibt 3 Änderungswünsche bekannt. Implementiere sie in `src/task-manager.ts`.

**Achtung:** Nach den Änderungen werden einige Tests rot!

### 2. Kernfrage beantworten (pro rotem Test)

Für jeden roten Test musst du entscheiden:

| Frage | Bedeutung | Aktion |
|-------|-----------|--------|
| **Test veraltet?** | Die Änderung ist korrekt, der Test spiegelt die alte Logik wider | Test anpassen |
| **Regression?** | Die Änderung hat einen Bug eingeführt, der Test hat ihn gefunden | Code fixen |

### 3. Alle Tests grün machen

Passe Tests an (wenn veraltet) oder fixe den Code (wenn Regression), bis alle Tests wieder grün sind.

### 4. Besprechung (5 Min.)

- Wer hat welchen Test warum angepasst?
- Welche Tests waren fragil, welche robust?
- Was lernen wir daraus?

---

## Checkliste

- [ ] `npm install` und `npm test` laufen — alle Tests grün (Ausgangszustand)
- [ ] Code gelesen und verstanden (`task-manager.ts`)
- [ ] Tests gelesen und verstanden (`task-manager.spec.ts`)
- [ ] Alle 3 Änderungswünsche umgesetzt
- [ ] Für jeden roten Test entschieden: Bug oder Feature?
- [ ] Alle Tests wieder grün (Tests angepasst oder Code gefixt)

---

## Lerneffekte

1. **Tests als Sicherheitsnetz**: Ohne Tests hättest du die Regression nie bemerkt
2. **Tests als Dokumentation**: Die Testbeschreibung erklärt, was erwartet wird
3. **Test-Maintenance**: Tests müssen mit dem Code mitwachsen
4. **Fragile vs. robuste Tests**: Hardcodierte Werte vs. dynamische Assertions

---

## Hinweis

Die 3 Änderungswünsche werden im Unterricht bekanntgegeben (nicht in diesem Repo enthalten).
