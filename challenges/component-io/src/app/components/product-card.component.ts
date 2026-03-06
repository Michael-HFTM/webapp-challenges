import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ product().name }}</h3>
      <p class="price">CHF {{ product().price.toFixed(2) }}</p>
      <p class="description">{{ product().description }}</p>
      <div class="actions">
        <button (click)="onLike()">
          ❤️ Like
        </button>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h3 {
      margin-bottom: 0.5rem;
    }
    .price {
      font-size: 1.25rem;
      font-weight: bold;
      color: #2563eb;
      margin-bottom: 0.5rem;
    }
    .description {
      color: #666;
      margin-bottom: 1rem;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
    }
    button {
      background: #fee2e2;
      border: none;
      border-radius: 6px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 0.9rem;
    }
    button:hover {
      background: #fecaca;
    }
  `]
})
export class ProductCardComponent {
  product = input.required<Product>();
  liked = output<number>();

  onLike() {
    this.liked.emit(this.product().id);
  }
}
