# Bundle Size Optimization — Team-Wettbewerb

> *Euer CTO ist nicht begeistert: "Die App braucht viel zu lange zum Laden! Das Initial Bundle ist riesig — könnt ihr da was machen?" Ihr habt 30 Minuten, um die Initial Bundle Size so weit wie möglich zu reduzieren.*

**Kurstag:** 05 — DI, Services & Routing
**Typ:** Team-Wettbewerb (2–3 Personen)
**Dauer:** 30 Min.

---

## Setup

```bash
npm install
```

### Teamname und Server eintragen

Öffnet `team.json` und tragt euren Teamnamen und die Server-URL ein (der Dozent gibt euch die URL):

```json
{
  "name": "Euer Teamname",
  "server": "https://xyz.trycloudflare.com"
}
```

### Baseline messen

```bash
npm run build
```

Nach dem Build seht ihr die Bundle-Grösse in der Konsolenausgabe und euer Ergebnis wird automatisch an das **Live-Leaderboard** gesendet. Das ist eure **Baseline**.

## Aufgabe

Die EventHub-App funktioniert einwandfrei — aber das Initial Bundle ist unnötig gross. Eure Aufgabe:

1. **Analysiert** das Bundle: Warum ist es so gross? Wo steckt das Gewicht?
2. **Recherchiert** Angular-Techniken, um die Initial Bundle Size zu reduzieren
3. **Optimiert** die App — wendet eure Erkenntnisse an
4. **Messt** nach jedem Schritt mit `ng build`

**Gewinner ist das Team mit der kleinsten Initial Bundle Size.**

## Regeln

- Die App muss **funktional bleiben** — alle Seiten müssen erreichbar sein, alle Features müssen funktionieren
- Keine Features löschen, keine Kompression, keine Source Maps entfernen
- **Alle Angular-Techniken sind erlaubt** — es gibt mehr als einen Hebel
- `ng build` und die Grösse der **Initial chunk files** zählt
- Zeitlimit: **30 Minuten**

## Tipps

- Schaut euch `app.routes.ts` genau an
- Schaut euch die `imports`-Arrays in den Komponenten an
- Fragt euch: Wird wirklich alles sofort gebraucht, wenn die App startet?
- Die Angular-Dokumentation ist euer Freund

## Ergebnis melden

Jedes Mal wenn ihr `npm run build` ausführt, wird euer Ergebnis automatisch an das **Leaderboard** gesendet. Nur euer bester Wert zählt — ihr könnt so oft builden wie ihr wollt.

Falls der Leaderboard-Server nicht erreichbar ist, notiert euer Ergebnis manuell:
- **Baseline** (Initial bundle vor Optimierung): _____ kB
- **Optimiert** (Initial bundle nach Optimierung): _____ kB
- **Einsparung**: _____ %
- **Angewandte Techniken** (Stichworte): _____

---

## Checkliste

- [ ] Baseline gemessen
- [ ] Mindestens eine Optimierung angewandt
- [ ] App funktioniert noch vollständig
- [ ] Finales Ergebnis notiert und gemeldet
