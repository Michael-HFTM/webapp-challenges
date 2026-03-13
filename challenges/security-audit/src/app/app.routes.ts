import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  {
    path: 'blogs',
    loadComponent: () => import('./pages/blog-list.component'),
  },
  {
    path: 'blogs/:id',
    loadComponent: () => import('./pages/blog-detail.component'),
  },
  {
    path: 'create',
    loadComponent: () => import('./pages/create-blog.component'),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile.component'),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login.component'),
  },
];
