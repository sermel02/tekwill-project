import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private service: CategoriesService) { }

  ngOnInit(): void {
    this.service.getCategories().
    subscribe(data => {
      this.categories = data;

      this.categories.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price})
      });
    });
  }

}
