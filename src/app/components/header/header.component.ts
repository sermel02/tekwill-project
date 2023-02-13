import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItems: number = 0;

  constructor(private cartService: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cartService.getProducts().
    subscribe(res => {
      this.totalItems = res.length;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
