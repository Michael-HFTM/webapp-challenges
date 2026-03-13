# Form Bugs — BugHunt

**Kurstag:** 10 — Signal Forms & Validierung
**Typ:** BugHunt (Warm-up)
**Dauer:** 15 Min.
**Bugs:** 2
**Format:** Partnerarbeit, PR mit CodeGuardian-Review

---

## Ausgangslage

Eine Angular-App mit einem Registrierungsformular hat Probleme. Das Formular verwendet `signalForm()` mit Validators — aber irgendetwas stimmt nicht. Die Validierung greift nicht korrekt und das Formular lässt sich auch mit ungültigen Daten absenden.

## Setup

```bash
cd challenges/form-bugs
npm install
ng serve
```

Öffne `http://localhost:4200` im Browser.

## Aufgabe

Finde und fixe die **2 Bugs** im Formular:
- Die Bugs betreffen `signalForm()`, Form Fields und/oder Validators
- Das Formular soll nach dem Fix korrekt validieren und nur gültige Daten akzeptieren
- **Basis:** Bug 1 finden und fixen
- **Erweitert:** Beide Bugs finden und fixen

## Hinweise

- Teste das Formular im Browser — was passiert, wenn du auf "Registrieren" klickst, ohne Felder auszufüllen?
- Versuche eine ungültige E-Mail-Adresse einzugeben — was erwartest du? Was passiert tatsächlich?
- Achte auf die Validators — welcher Validator prüft was?

## Abgabe

Fork → Fix → Pull Request → CodeGuardian-Review anfordern (✨)
