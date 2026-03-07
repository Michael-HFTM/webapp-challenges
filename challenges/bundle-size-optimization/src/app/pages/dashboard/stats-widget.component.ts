import { Component, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { EventStats } from '../../data/mock-data';
import { generateReport, validateEventData, exportToJson } from '../../shared/export-utils';
import { EVENTS } from '../../data/mock-data';

@Component({
  selector: 'app-stats-widget',
  imports: [
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatExpansionModule,
    UpperCasePipe,
  ],
  template: `
    <h2 style="margin-top: 24px">Detailstatistiken</h2>

    <mat-tab-group>
      <mat-tab label="Nach Kategorie">
        <div style="padding: 16px">
          <mat-card>
            <mat-card-content>
              <mat-list>
                @for (cat of stats().categoryCounts; track cat.category) {
                  <mat-list-item>
                    <mat-icon matListItemIcon>folder</mat-icon>
                    <span matListItemTitle>{{ cat.category | uppercase }}</span>
                    <span matListItemLine>{{ cat.count }} Events</span>
                  </mat-list-item>
                }
              </mat-list>
            </mat-card-content>
          </mat-card>
        </div>
      </mat-tab>

      <mat-tab label="Umsatz">
        <div style="padding: 16px">
          <mat-card>
            <mat-card-content>
              @for (rev of stats().revenueByCategory; track rev.category) {
                <div style="margin-bottom: 16px">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px">
                    <span>{{ rev.category | uppercase }}</span>
                    <mat-chip>CHF {{ rev.revenue.toLocaleString() }}</mat-chip>
                  </div>
                  <mat-progress-bar mode="determinate" [value]="(rev.revenue / maxRevenue) * 100" />
                </div>
              }
            </mat-card-content>
          </mat-card>
        </div>
      </mat-tab>

      <mat-tab label="Timeline">
        <div style="padding: 16px">
          <mat-accordion>
            @for (month of stats().monthlyTrend; track month.month) {
              <mat-expansion-panel>
                <mat-expansion-panel-header>
                  <mat-panel-title>{{ month.month }}</mat-panel-title>
                  <mat-panel-description>{{ month.events }} Events</mat-panel-description>
                </mat-expansion-panel-header>
                <p>Im Monat {{ month.month }} fanden {{ month.events }} Events statt.</p>
              </mat-expansion-panel>
            }
          </mat-accordion>
        </div>
      </mat-tab>

      <mat-tab label="Report">
        <div style="padding: 16px">
          <mat-card>
            <mat-card-content>
              <pre style="white-space: pre-wrap; font-size: 0.9em">{{ report }}</pre>
              <p style="color: green" >
                <mat-icon style="vertical-align: middle">check_circle</mat-icon>
                Validierung: {{ validation.valid ? 'Alle Daten OK' : validation.errors.length + ' Fehler' }}
              </p>
            </mat-card-content>
          </mat-card>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class StatsWidgetComponent {
  stats = input.required<EventStats>();

  report = generateReport(EVENTS);
  validation = validateEventData(EVENTS);
  jsonExport = exportToJson(EVENTS);

  get maxRevenue(): number {
    return Math.max(...this.stats().revenueByCategory.map(r => r.revenue));
  }
}
