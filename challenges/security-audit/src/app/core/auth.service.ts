import { inject, Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

// --- OIDC Configuration ---
const OIDC_CONFIG = {
  authority: 'https://auth.example.com/realms/blog',
  clientId: 'blog-spa-client',
  redirectUri: 'http://localhost:4200/callback',
  scope: 'openid profile email',
};

export type UserInfo = {
  sub: string;
  name: string;
  email: string;
  roles: string[];
};

type TokenPayload = {
  sub: string;
  name: string;
  email: string;
  roles?: string[];
  iat: number;
  exp: number;
  iss: string;
  aud: string;
  azp: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);

  // --- State (Signals) ---
  user = signal<UserInfo | null>(null);
  isAuthenticated = computed(() => this.user() !== null);
  roles = computed(() => this.user()?.roles ?? []);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      const payload = this.decodeToken(token);
      if (payload) {
        this.user.set({
          sub: payload.sub,
          name: payload.name,
          email: payload.email,
          roles: payload.roles ?? [],
        });
      }
    }
  }

  login(username: string, _password: string): boolean {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      sub: 'user-' + username,
      name: username === 'admin' ? 'Admin User' : 'Max Muster',
      email: `${username}@example.com`,
      roles: username === 'admin' ? ['admin', 'user'] : ['user'],
      iat: now,
      exp: now + 3600,
      iss: OIDC_CONFIG.authority,
      aud: OIDC_CONFIG.clientId,
      azp: OIDC_CONFIG.clientId,
    };

    const token = this.createMockJwt(payload);

    localStorage.setItem('access_token', token);
    localStorage.setItem('refresh_token', 'mock-refresh-' + Date.now());
    localStorage.setItem('id_token', token);

    this.user.set({
      sub: payload.sub,
      name: payload.name,
      email: payload.email,
      roles: payload.roles,
    });

    return true;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('id_token');
    this.user.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private decodeToken(token: string): TokenPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      return JSON.parse(atob(parts[1]));
    } catch {
      return null;
    }
  }

  private createMockJwt(payload: object): string {
    const header = btoa(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify(payload));
    const signature = btoa('mock-signature-do-not-trust');
    return `${header}.${body}.${signature}`;
  }
}
