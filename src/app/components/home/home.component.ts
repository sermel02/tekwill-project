import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Product } from './../../shared/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productList: any = [];

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().
      subscribe(data => {
        this.productList = data;

        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price })
        });
      });
  }

  onAddToCart(product: any) {
    this.cartService.addToCart(product)
  }
}
