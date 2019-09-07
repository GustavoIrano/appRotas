import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  save(isNew: boolean, product: Product) {
    if (isNew)
      return this.http.post('http://localhost:3000/products', product);

    return this.http.put(`http://localhost:3000/products/${product.id}`, product)
  }

  delete(product: Product) {
    return this.http.delete(`http://localhost:3000/products/${product.id}`);
  }
}
