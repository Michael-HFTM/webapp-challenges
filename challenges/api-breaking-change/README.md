# API Breaking Change — Live-Demo + Coding

**Kurstag:** 07 — Anbindung von Backend APIs
**Typ:** In-Class Coding (Live-Demo)
**Dauer:** 25 Min.
**Format:** Einzelarbeit

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
- Ändere die API-URL von `/api/v1/products` zu `/api/v2/products`
- Beobachte, was passiert — analysiere die Fehler in der Browser-Konsole

### Phase 3: Der Fix mit Zod (10 Min.)
- Installiere Zod: `npm install zod`
- Erstelle ein **Zod-Schema** für die erwartete API-Response
- Validiere die API-Antwort mit `schema.safeParse(response)`
- Zeige sinnvolle Fehlermeldungen statt Crash

### Phase 4: Besprechung (5 Min.)
- Was hat Zod gefangen?
- Was wäre ohne Validierung passiert?

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
