import { Component, inject, signal, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule],
  template: `
    @if (loading()) {
      <mat-progress-bar mode="indeterminate" />
    }
    @if (error()) {
      <div class="error-message">
        <mat-icon>error</mat-icon>
        <p>{{ error() }}</p>
      </div>
    }
    <h2>{{ products().length }} Produkte gefunden</h2>
    <div class="product-grid">
      @for (product of products(); track product.id) {
        <mat-card>
          <mat-card-header>
            <mat-card-title>{{ product.title }}</mat-card-title>
            <mat-card-subtitle>{{ product.price | currency:'CHF':'symbol':'1.2-2' }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>{{ product.description }}</p>
            <div class="product-meta">
              <mat-chip-set>
                <mat-chip>{{ product.category }}</mat-chip>
              </mat-chip-set>
              <span class="stock-status" [class.in-stock]="product.inStock" [class.out-of-stock]="!product.inStock">
                <mat-icon>{{ product.inStock ? 'check_circle' : 'cancel' }}</mat-icon>
                {{ product.inStock ? 'Auf Lager' : 'Nicht verfügbar' }}
              </span>
            </div>
          </mat-card-content>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    :host { display: block; padding: 24px; }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }
    mat-card { height: 100%; }
    mat-card-content p { margin: 16px 0; }
    .product-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 8px;
    }
    .stock-status {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
    }
    .in-stock { color: #2e7d32; }
    .out-of-stock { color: #c62828; }
    .error-message {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px;
      background: #ffebee;
      border-radius: 8px;
      margin-bottom: 16px;
      color: #c62828;
    }
  `],
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  async ngOnInit() {
    this.loading.set(true);
    try {
      const data = await this.productService.getProducts();
      this.products.set(data);
    } catch (e) {
      this.error.set('Fehler beim Laden der Produkte.');
      console.error('API Error:', e);
    } finally {
      this.loading.set(false);
    }
  }
}
