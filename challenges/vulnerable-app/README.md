# SecureNotes -- Vulnerable Angular App

> *SecureNotes -- eine kleine Notiz-App. Das Entwicklungsteam hat sie schnell zusammengebaut und sagt: "Funktioniert doch!" Aber ist sie wirklich sicher? Deine Mission: Finde die Sicherheitslücken, bevor es ein Angreifer tut.*

**Kurstag:** 11 -- Responsive Design & Angular Security
**Typ:** Homework + Kurzpräsentation (2--3 Min.)
**Schwierigkeitsgrad:** ★★★ (Mittel bis Schwer)
**Dauer:** ca. 60 Min. Homework + 2--3 Min. Präsentation im Unterricht
**Format:** Einzelarbeit oder Partnerarbeit

---

## Setup

```bash
npm install
npm start
```

Die App läuft auf `http://localhost:4200`.

**Login-Daten:** `admin` / `admin123`

---

## Deine Mission

Die App enthält **7 Sicherheitslücken** aus verschiedenen Kategorien. Deine Aufgabe:

### Phase 1: Hacken (zu Hause, ca. 60 Min.)

1. Starte die App und erkunde sie
2. Finde so viele Sicherheitslücken wie möglich
3. **Für jede gefundene Lücke dokumentierst du:**
   - **Was** ist die Schwachstelle?
   - **Wie** kann man sie ausnutzen? (Schritt-für-Schritt)
   - **Warum** ist das gefährlich? (Risiko für echte Nutzer)
   - **Wie** würdest du sie fixen?

### Phase 2: Dokumentieren

Erstelle ein kurzes Dokument (Markdown, max. 2 Seiten) mit deinen Findings. Pro Schwachstelle:

```markdown
## Schwachstelle X: [Name]

**Kategorie:** XSS / Auth / Token / ...
**Wo:** Kurze Beschreibung, wo in der App
**Exploit:** Schritt-für-Schritt-Anleitung
**Risiko:** Was könnte ein Angreifer damit tun?
**Fix:** Wie würdest du es beheben?
```

### Phase 3: Präsentieren (im Unterricht, KT 11)

- **2--3 Min. pro Person/Team**
- Zeige deinen besten/interessantesten Angriff **live**
- Erkläre den Fix
- Kurze Diskussion mit der Klasse

---

## Hinweise

Die 7 Schwachstellen verteilen sich auf diese Kategorien -- aber du musst selbst herausfinden, wo genau sie stecken:

- **Cross-Site Scripting (XSS)** -- Kann ein Angreifer eigenen Code einschleusen?
- **Authentication / Authorization** -- Sind alle Bereiche richtig geschützt?
- **Token Handling** -- Wie wird das Login-Token gespeichert und geprüft?
- **Redirects** -- Kann die App den Benutzer auf eine bösartige Seite umleiten?
- **DOM Security** -- Werden Angulars Sicherheitsmechanismen korrekt genutzt -- oder umgangen?

---

## KI-Einsatz ausdrücklich erlaubt

Du darfst **ChatGPT, Claude, GitHub Copilot** oder andere KI-Tools verwenden, um:

- Den Code zu analysieren
- Schwachstellen zu identifizieren
- Exploits zu verstehen
- Fixes vorzuschlagen

**Aber:** Dokumentiere kurz, wie du KI eingesetzt hast. Das ist Teil der Lernreflexion.

---

## Regeln

- Arbeite **nur lokal** -- greife keine externen Systeme an
- Konzentriere dich auf **Angular-spezifische** Schwachstellen
- Es geht nicht um Perfektion -- wenn du 4--5 von 7 findest, ist das bereits sehr gut

---

## Bewertung

Keine Note -- aber die Erkenntnisse fliessen direkt in dein Verständnis der Security-Themen ein, die auch in ZP 2 relevant sind.

---

## Checkliste

- [ ] App lokal gestartet und erkundet
- [ ] Mindestens 4 Schwachstellen gefunden
- [ ] Für jede Schwachstelle: Was, Exploit, Risiko, Fix dokumentiert
- [ ] KI-Einsatz dokumentiert (falls verwendet)
- [ ] Dokument erstellt (Markdown, max. 2 Seiten)
- [ ] Besten Angriff für Live-Demo vorbereitet
- [ ] 2--3 Min. Präsentation vorbereitet
