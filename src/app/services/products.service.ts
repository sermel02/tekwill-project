import { Product } from './../shared/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  urlProducts: string = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.urlProducts)
  }
}
