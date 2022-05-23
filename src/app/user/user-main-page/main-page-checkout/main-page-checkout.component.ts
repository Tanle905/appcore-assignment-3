import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StripeService } from 'ngx-stripe';
import { switchMap } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page-checkout',
  templateUrl: './main-page-checkout.component.html',
  styleUrls: ['./main-page-checkout.component.sass'],
})
export class MainPageCheckoutComponent implements OnInit {
  itemsList: CartItem[] = [];
  totalPrice: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private stripeService: StripeService
  ) {}

  ngOnInit(): void {
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
  onCheckout() {
    if (localStorage['token']) {
      this.userService
        .createPaymentMethod(localStorage['token'])
        .pipe(
          switchMap((session: any) => {
            return this.stripeService.redirectToCheckout({
              sessionId: session.id,
            });
          })
        )
        .subscribe((result) => {
          console.log(result);
          if (result.error) {
            alert(result.error.message);
          }
        });
    } else this.router.navigate(['/login']);
  }
}
