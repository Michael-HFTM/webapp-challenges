import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
        import('./pages/home/home.component')
            .then(m => m.HomeComponent),
  },
  {
    path: 'event/:id',
    loadComponent: () =>
        import('./pages/event-detail/event-detail.component')
            .then(m => m.EventDetailComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
        import('./pages/create-event/create-event.component')
            .then(m => m.CreateEventComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
        import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
        import('./pages/settings/settings.component')
            .then(m => m.SettingsComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
        import('./pages/about/about.component')
            .then(m => m.AboutComponent),
  }
];
