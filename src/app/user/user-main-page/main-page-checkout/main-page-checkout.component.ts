import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page-checkout',
  templateUrl: './main-page-checkout.component.html',
  styleUrls: ['./main-page-checkout.component.sass'],
})
export class MainPageCheckoutComponent implements OnInit,OnDestroy {
  itemsList: CartItem[] = [];
  totalPrice: number = 0;
  onUpdateCartSub: Subscription  = new Subscription()

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    localStorage['token'] &&
      this.userService
        .getPaymentMethod(localStorage['token'])
        .subscribe((data) => console.log(data));
    this.itemsList = localStorage['items'] && JSON.parse(localStorage['items']);
    this.itemsList &&
      this.itemsList.forEach((item) => {
        this.totalPrice = this.totalPrice + item.price * item.quantity;
      });
      this.onUpdateCartSub = this.userService.onUpdateCart.subscribe((items)=>{
        items.forEach((item) => {
          this.totalPrice = this.totalPrice + item.price * item.quantity;
        })
      })
  }
  onDeleteItem(id: string) {
    this.itemsList = this.itemsList.filter((item) => item.id !== id);
    this.itemsList[0]
      ? this.itemsList.forEach((item) => {
          this.totalPrice = this.totalPrice + item.price * item.quantity;
        })
      : (this.totalPrice = 0);
    localStorage['items'] = JSON.stringify(this.itemsList);
    this.userService.onUpdateCart.next(this.itemsList);
  }
  onCheckout() {
    if (localStorage['token']) {
    } else this.router.navigate(['/login']);
  }
  ngOnDestroy(): void {
      this.onUpdateCartSub.unsubscribe()
  }
}
