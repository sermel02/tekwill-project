import { CartService } from './../../services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from './../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  path: string = '';
  products: any = [];

  constructor(private route: ActivatedRoute, private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.url.subscribe(value => this.path = value[1].path);

    this.api.getProduct().subscribe(data => {
      this.products = data.filter((pr: any) => {
        return pr.category == this.path
      });
    });
  }

  onAddToCart(product: any) {
    this.cartService.addToCart(product)
  }
}
