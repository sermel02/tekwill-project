import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private snackBar: MatSnackBar) { }


  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.snackBar.open('Товар добавлен в корзину', '', {duration: 1000})
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total
    });

    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a:any, index: any) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    });

    this.productList.next(this.cartItemList);
    this.snackBar.open('Товар удален из корзины', '', {duration: 1000})
  }


  clearCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
}
