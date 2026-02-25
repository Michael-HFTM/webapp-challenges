# Vulnerable Angular App — Homework + Präsentation

**Kurstag:** 11 — Responsive Design & Angular Security
**Typ:** Homework + Kurzpräsentation
**Dauer:** Homework (ca. 60 Min.) + 20 Min. Präsentation im Unterricht
**Format:** Einzelarbeit oder Partnerarbeit, KI-Einsatz erlaubt

---

## Ausgangslage

Du erhältst eine kleine Angular-App mit **5–8 absichtlichen Sicherheitslücken**. Die App sieht auf den ersten Blick normal aus — aber sie ist angreifbar.

## Aufgabe (Homework — vor KT 11)

### Phase 1: Hacken

1. Klone die App und starte sie lokal
2. Finde so viele Sicherheitslücken wie möglich
3. **Für jede Lücke:**
   - Beschreibe den Angriff (was du tust)
   - Zeige den Effekt (was passiert)
   - Erkläre das Risiko (warum ist das gefährlich)
   - Schlage einen Fix vor

### Phase 2: Dokumentieren

Erstelle ein kurzes Dokument (Markdown, max. 2 Seiten) mit deinen Findings.

### Phase 3: Präsentieren (im Unterricht, KT 11)

- **5 Min. pro Team**: Zeige deinen besten Angriff live
- Erkläre den Fix
- Diskussion mit der Klasse

## Schwachstellen-Kategorien (Hinweis)

Die Lücken stammen aus diesen Bereichen — aber du musst selbst herausfinden, wo genau:

- Cross-Site Scripting (XSS)
- Unsichere DOM-Manipulation
- Fehlende Zugriffskontrolle
- Token-Handling
- Redirect-Schwachstellen
- Template Injection

## Regeln

- **KI-Einsatz ist erlaubt** — aber dokumentiere, wie du KI genutzt hast
- Arbeite nur lokal — greife keine externen Systeme an
- Konzentriere dich auf die **Angular-spezifischen** Schwachstellen

## Bewertung

Keine Note — aber die Erkenntnisse fliessen in dein Verständnis für die Security-Themen in ZP 2 ein.
