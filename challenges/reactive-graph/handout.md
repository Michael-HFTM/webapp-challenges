# Reactive Graph — Handout

**Aufgabe:** Zeichne für jedes Szenario den Reactive Graph. Markiere die Knoten mit den Symbolen aus der Legende. Pfeile zeigen Abhängigkeiten (= "liest von").

## Legende

```
(O)  Signal        — signal()
<>   Computed       — computed()
[ ]  Effect         — effect()
[[ ]] Template      — Template-Binding {{ ... }}
 →   Abhängigkeit   — "liest von"
```

---

## Szenario 1: Dead Signal

```typescript
@Component({ template: `<button (click)="increment()">Click me</button>` })
export class CounterComponent {
  private counter = signal(0);
  increment() { this.counter.update(c => c + 1); }
}
```

**Dein Graph (oder Erklärung):**

&nbsp;

&nbsp;

&nbsp;

---

## Szenario 2: Signal im Template

```typescript
@Component({ template: `<p>Count: {{ counter() }}</p>` })
export class DisplayComponent {
  counter = signal(0);
}
```

**Dein Graph:**

&nbsp;

&nbsp;

&nbsp;

---

## Szenario 3: Computed-Kette + Template

```typescript
@Component({ template: `<p>{{ doubled() }}</p>` })
export class ComputedComponent {
  counter = signal(5);
  doubled = computed(() => this.counter() * 2);
}
```

**Dein Graph:**

&nbsp;

&nbsp;

&nbsp;

---

## Szenario 4: Effect ohne Template

```typescript
@Component({ template: `<p>Static text</p>` })
export class LoggerComponent {
  counter = signal(0);
  constructor() {
    effect(() => console.log('Counter:', this.counter()));
  }
}
```

**Dein Graph:**

&nbsp;

**Frage:** Wird das Template aktualisiert, wenn sich `counter` ändert?

&nbsp;

---

## Szenario 5: Komplexer Graph (Diamant)

```typescript
@Component({
  template: `
    <h2>{{ fullName() }}</h2>
    <p>{{ greeting() }}</p>
  `
})
export class ProfileComponent {
  firstName = signal('Anna');
  lastName = signal('Müller');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  greeting = computed(() => `Hallo, ${this.fullName()}!`);
  constructor() {
    effect(() => { document.title = this.greeting(); });
  }
}
```

**Dein Graph:**

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

## Szenario 6: Broken Reactivity (Falle!)

```typescript
@Component({ template: `<p>{{ message }}</p>` })
export class BrokenComponent {
  counter = signal(0);
  message = `Count is ${this.counter()}`;
}
```

**Dein Graph (oder Erklärung):**

&nbsp;

&nbsp;

&nbsp;

---

## Bonusfrage

Was passiert in Szenario 6, wenn man `message` zu einem `computed()` ändert?

```typescript
message = computed(() => `Count is ${this.counter()}`);
```

Zeichne den neuen Graph:

&nbsp;

&nbsp;

&nbsp;
