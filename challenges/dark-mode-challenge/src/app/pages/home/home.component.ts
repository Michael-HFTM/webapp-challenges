import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface DashboardCard {
  title: string;
  description: string;
  icon: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards: DashboardCard[] = [
    {
      title: 'Angular 21 Release',
      description:
        'Die neueste Version von Angular bringt spannende Features: Signals sind jetzt stabil, Zoneless Change Detection ist produktionsreif und die Build-Performance wurde massiv verbessert.',
      icon: 'rocket_launch',
      category: 'News',
      date: '5. März 2026',
    },
    {
      title: 'Material 3 Theming',
      description:
        'Mit Material 3 lassen sich Themes komplett über CSS Custom Properties steuern. Light und Dark Mode sind nur eine Klasse entfernt — probiere es selbst aus!',
      icon: 'palette',
      category: 'Tutorial',
      date: '2. März 2026',
    },
    {
      title: 'Standalone Components',
      description:
        'NgModules gehören der Vergangenheit an. Standalone Components sind der neue Standard und machen Angular-Apps schlanker, schneller und einfacher zu verstehen.',
      icon: 'widgets',
      category: 'Best Practice',
      date: '28. Feb 2026',
    },
    {
      title: 'DevTools Update',
      description:
        'Die Angular DevTools Extension unterstützt jetzt Signal-Debugging und zeigt den Reactive Graph direkt im Browser. Ein Muss für jeden Angular-Entwickler.',
      icon: 'bug_report',
      category: 'Tools',
      date: '25. Feb 2026',
    },
  ];
}
