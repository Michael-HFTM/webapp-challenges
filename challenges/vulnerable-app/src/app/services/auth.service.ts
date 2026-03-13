import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal(!!localStorage.getItem('auth_token'));

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Simple mock auth -- in production this would call a backend
    if (username === 'admin' && password === 'admin123') {
      // Create a mock JWT-like token (base64 encoded)
      const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
      const payload = btoa(JSON.stringify({
        sub: '1',
        username: 'admin',
        role: 'admin',
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
        iat: Math.floor(Date.now() / 1000),
      }));
      const signature = btoa('mock-signature-not-verified');
      const token = `${header}.${payload}.${signature}`;

      localStorage.setItem('auth_token', token);
      this.loggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn.set(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn();
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  getUser(): { username: string; role: string } | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return { username: payload.username, role: payload.role };
    } catch {
      return null;
    }
  }
}
