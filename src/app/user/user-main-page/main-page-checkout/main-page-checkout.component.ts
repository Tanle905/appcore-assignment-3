import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page-checkout',
  templateUrl: './main-page-checkout.component.html',
  styleUrls: ['./main-page-checkout.component.sass'],
})
export class MainPageCheckoutComponent implements OnInit {
  itemsList: CartItem[] = [];
  isLoggedIn: boolean = false;
  totalPrice: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn;
    this.userService.authState.subscribe(
      () => (this.isLoggedIn = this.userService.isLoggedIn)
    );
    this.itemsList = localStorage['items'] && JSON.parse(localStorage['items']);
    this.itemsList &&
      this.itemsList.forEach((item) => {
        this.totalPrice = this.totalPrice + item.price * item.quantity;
      });
  }
  onDeleteItem(id: string) {
    this.itemsList = this.itemsList.filter((item) => item.id !== id);
    this.itemsList[0]
      ? this.itemsList.forEach((item) => {
          this.totalPrice = this.totalPrice + item.price * item.quantity;
        })
      : (this.totalPrice = 0);
    localStorage['items'] = JSON.stringify(this.itemsList);
  }
}
