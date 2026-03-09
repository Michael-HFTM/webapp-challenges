# API Breaking Change — Live-Demo + Coding

**Kurstag:** 07 — Anbindung von Backend APIs
**Typ:** In-Class Coding (Live-Demo)
**Dauer:** 25 Min.
**Format:** Einzelarbeit

---

## Setup

**2 Terminals nötig:**

```bash
# Terminal 1: Mock-API starten
cd mock-api
npm install
npm start
# → http://localhost:3000

# Terminal 2: Angular-App starten
npm install
npm start
# → http://localhost:4200
```

Die App zeigt eine Produktliste an — alles funktioniert mit API v1.

---

## Ausgangslage

Du hast eine Angular-App, die Produktdaten von einer REST-API abruft und anzeigt. Alles funktioniert einwandfrei mit **API v1**.

Dann passiert es: Das Backend-Team deployt **API v2** — und deine App crasht.

## Ablauf

### Phase 1: Alles funktioniert (5 Min.)
- Starte die App und überprüfe, dass alles korrekt funktioniert
- Die App ruft `/api/v1/products` auf und zeigt eine Produktliste an

### Phase 2: Der Crash (5 Min.)
- Der Dozent gibt das Signal: **"API v2 ist live!"**
- Ändere die API-URL in `src/environments/environment.ts` von `/api/v1/products` zu `/api/v2/products`
- Beobachte, was passiert — analysiere die Fehler in der Browser-Konsole

### Phase 3: Breaking Changes entdecken (15 Min.)
- Öffne die Browser DevTools (Network-Tab) und vergleiche die v1- und v2-Responses
- Dokumentiere alle Unterschiede: Was hat sich geändert? Was ist der Effekt auf die App?
- **Bonus**: Versuche, die App mit manuellem TypeScript-Code zu fixen — was fällt dir auf?

### Phase 4: Besprechung (im Plenum, separat)
Die Besprechung findet direkt im Anschluss als eigene Aktivität statt — der Dozent zeigt den Zod-Fix live.

## Breaking Changes in v2

Das wirst du in der Konsole sehen — aber du musst selbst herausfinden, was genau sich geändert hat:
- Felder könnten umbenannt worden sein
- Typen könnten sich geändert haben
- Pflichtfelder könnten fehlen
- Die Response-Struktur könnte anders sein

## Lerneffekte

1. **TypeScript-Typen schützen nur zur Compile-Zeit** — nicht zur Laufzeit
2. **API-Verträge können brechen** — defensive Programmierung ist nötig
3. **Zod als Runtime-Validierung**: `z.object({ name: z.string(), price: z.number() })`
4. **Sinnvolle Fehlermeldungen** statt Crash (Error-Handling UX)
