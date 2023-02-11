import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlCategories: string = 'http://localhost:3000/categories'

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.urlCategories).
      pipe(map(res => {
        return res;
      }))
  };
}
