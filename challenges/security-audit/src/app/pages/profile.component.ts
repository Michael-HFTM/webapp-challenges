import { Component, inject } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h1>Profil</h1>
    @if (auth.user(); as user) {
      <div class="profile-card">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>E-Mail:</strong> {{ user.email }}</p>
        <p><strong>Rollen:</strong> {{ user.roles.join(', ') }}</p>
        <p><strong>ID:</strong> {{ user.sub }}</p>
      </div>
    }
  `,
})
export default class ProfileComponent {
  protected auth = inject(AuthService);
}
