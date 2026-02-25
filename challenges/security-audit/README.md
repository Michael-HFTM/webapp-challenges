# Security Audit — Auth-Lücken finden

**Kurstag:** 09 — Authentication / Authorization
**Typ:** Partnerarbeit
**Dauer:** 15 Min.
**Format:** In-Class, zu zweit

---

## Ausgangslage

Ihr erhaltet eine Angular-App mit einer implementierten Authentifizierung. Auf den ersten Blick sieht alles sicher aus — Login funktioniert, geschützte Bereiche sind nur nach dem Login erreichbar.

Aber die Implementierung hat **Sicherheitslücken**.

## Aufgabe

Arbeitet zu zweit und findet so viele **Auth-Schwachstellen** wie möglich in der App:

### Wonach ihr suchen sollt

- **Fehlende Route Guards**: Gibt es Routen, die geschützt sein sollten, aber nicht sind?
- **Unsichere Token-Speicherung**: Wo und wie wird das JWT gespeichert?
- **Interceptor-Logik**: Wird das Token korrekt an alle Requests angehängt? Gibt es Ausnahmen?
- **Token-Validierung**: Wird das Token-Ablaufdatum geprüft?
- **Fehlerbehandlung**: Was passiert bei einem 401-Response? Wird der User korrekt weitergeleitet?

## Vorgehen

1. **5 Min.**: Studiert den Code — Routing, Guards, Interceptor, Token-Service
2. **5 Min.**: Dokumentiert die gefundenen Schwachstellen (Datei, Zeile, Problem, Risiko)
3. **5 Min.**: Besprechung im Plenum — welche Lücken habt ihr gefunden?

## Dokumentation

Erstellt für jede gefundene Schwachstelle einen kurzen Eintrag:

| # | Datei | Problem | Risiko | Fix-Vorschlag |
|---|-------|---------|--------|---------------|
| 1 | ... | ... | ... | ... |

## Hinweis

Denkt wie ein Angreifer: Was könnte ein böswilliger User ausnutzen?
