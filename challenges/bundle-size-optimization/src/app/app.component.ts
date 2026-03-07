import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <mat-icon>event</mat-icon>
      <span style="margin-left: 8px">EventHub</span>
      <nav style="margin-left: 32px">
        <a mat-button routerLink="/" routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }">Events</a>
        <a mat-button routerLink="/create" routerLinkActive="active">Erstellen</a>
        <a mat-button routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a mat-button routerLink="/settings" routerLinkActive="active">Settings</a>
        <a mat-button routerLink="/about" routerLinkActive="active">About</a>
      </nav>
    </mat-toolbar>
    <main style="padding: 24px">
      <router-outlet />
    </main>
  `,
  styles: `
    .active {
      font-weight: bold;
      border-bottom: 2px solid white;
    }
    nav { display: flex; gap: 4px; }
  `,
})
export class AppComponent {}
