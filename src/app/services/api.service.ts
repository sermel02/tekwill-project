import { RtlScrollAxisType } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cartUrl: string = 'http://localhost:3000/cart'
  productsUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>(this.productsUrl).
    pipe(map(res => {
      return res;
    }))
  };
}
