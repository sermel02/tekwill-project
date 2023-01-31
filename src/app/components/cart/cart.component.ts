import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      // console.log(res);
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.products.lenght);
    })
  }

  onRemoveItem(item: any) {
    if(confirm('Вы точно хотите удалить продук из корзины?')) {
      this.cartService.removeCartItem(item);
    }
  }

  onClearCart() {
    this.cartService.clearCart()
  }
}
