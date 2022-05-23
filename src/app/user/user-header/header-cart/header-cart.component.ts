import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.sass'],
})
export class HeaderCartComponent implements OnInit {
  itemsList: CartItem[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.itemsList = localStorage['items'] && JSON.parse(localStorage['items']);
    this.userService.onUpdateCart.subscribe(() => {
      this.itemsList =
        localStorage['items'] && JSON.parse(localStorage['items']);
    });
    this.itemsList.forEach((item) => {
      this.totalQuantity = this.totalQuantity + item.quantity;
      this.totalPrice = this.totalPrice + item.price * item.quantity;
    });
  }
  toProduct(id:string){
    this.router.navigate(['/product'], {queryParams:{id:id}})
  }
}
