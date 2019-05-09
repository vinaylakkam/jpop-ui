import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.get(this.url);

  }

  get(productId) {
    return this.httpClient.get(this.url + `/${productId}`);
  }

  update(product: Product) {
    return this.httpClient.put(this.url + `/${product.id}`, product);
  }

  create(product: Product) {
    return this.httpClient.post<Product>(this.url, product);
  }

  delete(productId) {
    const deleteUrl = this.url + `/${productId}`;
    return this.httpClient.delete(deleteUrl);
  }

  getMockProducts(): Product[] {
    return [
      new Product(1, 'Samsung TV', 'Samsung TV', 5, 12345, 'https://via.placeholder.com/150/000000/FFFFFF/?text=Samsung TV'),
      new Product(1, 'Dell Laptop', 'Dell Laptop', 4, 9999, 'https://via.placeholder.com/150/ff12345/FFFFFF/?text=Dell Laptop'),
    ]
  }
}
