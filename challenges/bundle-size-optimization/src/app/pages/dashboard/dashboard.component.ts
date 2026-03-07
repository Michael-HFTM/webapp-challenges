import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';   // nicht verwendet
import { MatSortModule } from '@angular/material/sort';     // nicht verwendet
import { EVENTS, calculateStats } from '../../data/mock-data';
import { StatsWidgetComponent } from './stats-widget.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule, // importiert, aber nicht im Template verwendet
    MatSortModule,  // importiert, aber nicht im Template verwendet
    StatsWidgetComponent,
  ],
  template: `
    <h1>Dashboard</h1>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px">
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>event</mat-icon>
          <mat-card-title>{{ stats.totalEvents }}</mat-card-title>
          <mat-card-subtitle>Events total</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>people</mat-icon>
          <mat-card-title>{{ stats.totalAttendees }}</mat-card-title>
          <mat-card-subtitle>Teilnehmer total</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>payments</mat-icon>
          <mat-card-title>CHF {{ stats.averagePrice }}</mat-card-title>
          <mat-card-subtitle>Durchschnittspreis</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
    </div>

    <mat-divider />

    <!-- Diese Statistik-Komponente ist schwer und wird nur sichtbar,
         wenn der User nach unten scrollt. Kandidat für @defer. -->
    <app-stats-widget [stats]="stats" />
  `,
})
export class DashboardComponent {
  stats = calculateStats(EVENTS);
}
