import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public products: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });

    if(this.products.length <= 0) {
      this.router.navigate(['/', 'cart']);
      this.snackBar.open('Корзина пуста', '', {duration: 1000})
    }
  }

  onRemoveItem(item: any) {
    if(confirm('Вы точно хотите удалить продук из корзины?')) {
      this.cartService.removeCartItem(item);
    }
  }

}
