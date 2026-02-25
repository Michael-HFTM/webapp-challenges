# Web App Challenges

Willkommen bei den **Challenges** des HFTM Web Applications Kurses!

In diesem Repository findest du verschiedene Coding-Challenges: BugHunts, Refactoring-Aufgaben, In-Class-Challenges und mehr. Je nach Challenge-Typ arbeitest du alleine, zu zweit oder im Team.

---

## Challenge-Typen

| Typ | Was du tust | Ablauf |
|-----|-------------|--------|
| **BugHunt** | Bugs im Code finden und fixen | Fork → Fix → PR → CodeGuardian-Review |
| **Refactoring** | Redundanten Code mit TypeScript-Features DRY machen | Fork → Refactor → PR → CodeGuardian-Review |
| **In-Class Coding** | Coding-Aufgabe direkt im Unterricht | Starter-App öffnen, loscoden |
| **Team-Wettbewerb** | Im Team gegen andere Teams antreten | Im Unterricht, Teams à 2–3 |
| **Gruppenarbeit** | Konzeptuelle Aufgabe (z.B. Diagramme zeichnen) | Im Unterricht, Whiteboard/Papier |
| **Partnerarbeit** | Zu zweit Schwachstellen analysieren | Im Unterricht, Partnerarbeit |
| **Homework** | Zu Hause vorbereiten, im Unterricht präsentieren | Vor dem Kurstag bearbeiten |

---

## So funktioniert's (BugHunt & Refactoring)

### 1. Repository forken

Klicke oben rechts auf **Fork**, um eine eigene Kopie des Repos zu erstellen.

### 2. Challenge auswählen

Jede Challenge liegt in einem eigenen Ordner unter `challenges/`. Starte mit der Challenge, die im Unterricht angegeben wird.

### 3. Branch erstellen

Erstelle einen neuen Branch für deine Lösung:

```bash
git checkout -b fix/challenge-name
```

### 4. Aufgabe lösen

Öffne die Challenge, lies die README und löse die Aufgabe (Bugs fixen / Code refactoren).

### 5. Pull Request erstellen

Committe deine Änderungen und erstelle einen Pull Request **gegen das Original-Repository** (nicht deinen Fork):

```bash
git add .
git commit -m "fix: challenge-name gelöst"
git push origin fix/challenge-name
```

Dann auf GitHub: **New Pull Request** → Base: `hftm-in2024/webapp-challenges` `main` ← Compare: `dein-fork` `fix/challenge-name`

### 6. CodeGuardian Feedback anfordern

Klicke im Pull Request auf das **Copilot-Icon** (✨) neben dem Reviewer-Feld und wähle **"Review pull request"**. CodeGuardian analysiert deinen Diff und postet einen Review-Kommentar mit:

- Welche Bugs/Probleme du gefunden hast
- Ob die Fixes/Refactorings korrekt sind
- Tipps für noch nicht gelöste Probleme
- Deinem Fortschritt (z.B. "3/5 Bugs gefixt")

> Voraussetzung: Du benötigst GitHub Copilot — kostenlos für Studierende über das [GitHub Student Developer Pack](https://education.github.com/pack).

> **Hinweis:** CodeGuardian funktioniert nur bei BugHunt- und Refactoring-Challenges (Ordner mit `.codeguardian.json`).

---

## Verfügbare Challenges

| KT | Challenge | Typ | Dauer | Schwierigkeit |
|----|-----------|-----|-------|---------------|
| 01 | [chaos-app](challenges/chaos-app/) | BugHunt | 30 Min. | Einsteiger |
| 02 | [senior-refactoring](challenges/senior-refactoring/) | Refactoring | 30 Min. | Mittel |
| 04 | [component-io](challenges/component-io/) | BugHunt | 15 Min. | Einsteiger |
| 05 | [bundle-size-optimization](challenges/bundle-size-optimization/) | Team-Wettbewerb | 20 Min. | Mittel |
| 06 | [dark-mode-challenge](challenges/dark-mode-challenge/) | In-Class Coding | 15 Min. | Einsteiger |
| 07 | [api-breaking-change](challenges/api-breaking-change/) | In-Class Coding | 25 Min. | Mittel |
| 08 | [reactive-graph](challenges/reactive-graph/) | Gruppenarbeit | 15 Min. | Mittel |
| 09 | [security-audit](challenges/security-audit/) | Partnerarbeit | 15 Min. | Mittel |
| 10 | [form-bugs](challenges/form-bugs/) | BugHunt | 15 Min. | Einsteiger |
| 11 | [vulnerable-app](challenges/vulnerable-app/) | Homework | HW + 20 Min. | Fortgeschritten |
| 12 | [regression-roulette](challenges/regression-roulette/) | In-Class Coding | 20 Min. | Mittel |

---

## Regeln

- Fixe nur die Bugs / löse nur die gestellte Aufgabe — ändere nicht die grundlegende Struktur des Codes
- Jeder Bug-Fix sollte in einem eigenen Commit sein (best practice)
- Du darfst `console.log` und den VS Code Debugger verwenden
- Bei Homework-Challenges: KI-Einsatz ist erlaubt, aber dokumentiere was du getan hast
