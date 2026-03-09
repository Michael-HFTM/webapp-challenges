import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <mat-icon>store</mat-icon>
      <span style="margin-left: 8px">Product Store</span>
    </mat-toolbar>
    <router-outlet />
  `,
})
export class AppComponent {}
