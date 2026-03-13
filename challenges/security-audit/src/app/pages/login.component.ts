import { Component, inject, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h1>Login</h1>
    <form class="form" (submit)="onLogin($event)">
      <label>Benutzername</label>
      <input
        type="text"
        [value]="username()"
        (input)="username.set(asInput($event).value)"
        placeholder="z.B. max oder admin"
      />
      <label>Passwort</label>
      <input
        type="password"
        [value]="password()"
        (input)="password.set(asInput($event).value)"
        placeholder="beliebig"
      />
      <button type="submit">Einloggen</button>
    </form>
    <p class="hint">
      Tipp: Nutze "max" oder "admin" als Benutzername (Passwort beliebig)
    </p>
  `,
})
export default class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  username = signal('');
  password = signal('');

  onLogin(event: Event): void {
    event.preventDefault();
    if (this.auth.login(this.username(), this.password())) {
      const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') || '/blogs';
      this.router.navigateByUrl(returnUrl);
    }
  }

  asInput(event: Event): HTMLInputElement {
    return event.target as HTMLInputElement;
  }
}
