# Regression Roulette — Bug oder Feature?

**Kurstag:** 12 — Testing
**Typ:** In-Class Coding
**Dauer:** 20 Min.
**Format:** Einzelarbeit

---

## Ausgangslage

Du erhältst eine Angular-App mit einer **vollständigen, grünen Test-Suite** — Unit-Tests (Vitest) und E2E-Tests (Playwright). Alle Tests sind grün. Die App funktioniert.

Dann kommt der Product Owner mit **3 Änderungswünschen**.

## Ablauf

### 1. Ausgangszustand prüfen (3 Min.)

```bash
npm install
npm test          # Vitest — alle Tests grün
npx playwright test  # E2E — alle Tests grün
```

### 2. Änderungswünsche umsetzen (10 Min.)

Der Dozent gibt 3 Änderungswünsche bekannt. Implementiere sie in der App.

**Achtung:** Nach den Änderungen werden einige Tests rot!

### 3. Kernfrage beantworten (pro rotem Test)

Für jeden roten Test musst du entscheiden:

| Frage | Bedeutung | Aktion |
|-------|-----------|--------|
| **Test veraltet?** | Die Änderung ist korrekt, der Test spiegelt die alte Logik wider | Test anpassen |
| **Regression?** | Die Änderung hat einen Bug eingeführt, der Test hat ihn gefunden | Code fixen |

### 4. Besprechung (5 Min.)

- Wer hat welchen Test warum angepasst?
- Welche Tests waren fragil, welche robust?
- Was lernen wir daraus?

## Lerneffekte

1. **Tests als Sicherheitsnetz**: Ohne Tests hättest du die Regression nie bemerkt
2. **Tests als Dokumentation**: Die Testbeschreibung erklärt, was erwartet wird
3. **Test-Maintenance**: Tests müssen mit dem Code mitwachsen
4. **Fragile vs. robuste Tests**: Hardcodierte Werte vs. dynamische Assertions

## Hinweis

Die 3 Änderungswünsche werden im Unterricht bekanntgegeben. Siehe `changes.md` (wird vom Dozenten verteilt).
