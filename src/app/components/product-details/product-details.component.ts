import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$!: Observable<any>;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    const productId$ = this.route.params.pipe(map((params: any) => params?.["id"]));
    this.product$ = this.productService.getProduct(productId$);
    console.log(this.product$);
  }

  onAddToCart(product: any) {
    this.cartService.addToCart(product)
  }

}
