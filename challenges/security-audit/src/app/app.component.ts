import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/blogs" class="nav-brand">Blog App</a>
      <div class="nav-links">
        <a routerLink="/blogs">Blogs</a>
        <a routerLink="/create">Neuer Beitrag</a>
        @if (auth.isAuthenticated()) {
          <a routerLink="/profile">{{ auth.user()?.name }}</a>
          <button (click)="auth.logout()">Logout</button>
        } @else {
          <a routerLink="/login">Login</a>
        }
      </div>
    </nav>
    <main class="container">
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  protected auth = inject(AuthService);
}
