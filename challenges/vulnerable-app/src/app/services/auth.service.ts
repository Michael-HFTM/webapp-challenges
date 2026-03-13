import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

// Vulnerability #6: JWT stored in localStorage (accessible via XSS)
// Vulnerability #5: No expiry check on token

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
        // Token expired 30 days ago -- but we never check this!
        exp: Math.floor(Date.now() / 1000) - (30 * 24 * 60 * 60),
        iat: Math.floor(Date.now() / 1000) - (60 * 24 * 60 * 60),
      }));
      const signature = btoa('mock-signature-not-verified');
      const token = `${header}.${payload}.${signature}`;

      // Store in localStorage -- not ideal for security
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
    // TODO: validate token properly
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
      // We just decode and return -- no expiry check, no signature verification
      return { username: payload.username, role: payload.role };
    } catch {
      return null;
    }
  }
}
