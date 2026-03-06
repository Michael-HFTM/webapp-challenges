import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <header>
      <h1>🛒 TechShop</h1>
    </header>
    <main>
      <app-product-list />
    </main>
  `,
  styles: [`
    header {
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 1.75rem;
    }
  `]
})
export class AppComponent {}
