import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  async getProducts(): Promise<Product[]> {
    const response = await firstValueFrom(
      this.http.get<{ data: Product[] }>(environment.apiUrl)
    );
    return response.data;
  }
}
