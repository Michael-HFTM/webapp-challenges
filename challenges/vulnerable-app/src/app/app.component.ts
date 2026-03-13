import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <nav>
        <a routerLink="/notes" class="logo">🔒 SecureNotes</a>
        <a routerLink="/notes">Notizen</a>
        @if (auth.isAuthenticated()) {
          <a routerLink="/profile">Profil</a>
          <a routerLink="/admin">Admin</a>
          <a href="#" (click)="logout($event)">Logout</a>
        } @else {
          <a routerLink="/login">Login</a>
        }
      </nav>
    </header>
    <main class="container">
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  auth = inject(AuthService);

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
  }
}
