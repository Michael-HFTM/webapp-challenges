import { Component } from '@angular/core';
import { RegistrationFormComponent } from './components/registration-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationFormComponent],
  template: `
    <header>
      <h1>Registrierung</h1>
      <p class="subtitle">Erstelle dein Konto</p>
    </header>
    <main>
      <app-registration-form />
    </main>
  `,
  styles: [`
    header {
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 1.75rem;
      margin-bottom: 0.25rem;
    }
    .subtitle {
      color: #666;
    }
    main {
      max-width: 480px;
    }
  `]
})
export class AppComponent {}
