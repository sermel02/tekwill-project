import { Product } from './../../shared/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  productsSubscribtion?: Subscription;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscribtion = this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    console.log(this.products);
  }

  onCart(product: Product) {
    this.products[product.id].inCart = !this.products[product.id].inCart
  }


  ngOnDestroy(): void {
    if (this.productsSubscribtion) {
      this.productsSubscribtion.unsubscribe();
    };
  }
}
