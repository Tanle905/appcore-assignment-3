import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  faBell,
  faCartShopping,
  faClipboardList,
  faSearch,
  faTag,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.sass'],
})
export class UserHeaderComponent implements OnInit, OnDestroy {
  faTag = faTag;
  faClipboardList = faClipboardList;
  faUser = faUser;
  faBell = faBell;
  faCartShopping = faCartShopping;
  searchIcon = faSearch;
  isAccountHovered: boolean = false;
  isCartHovered: boolean = false;
  itemList: CartItem[] = [];
  totalQuantity: number = 0;
  authStateSub: Subscription = new Subscription();
  onUpdateCartSub: Subscription = new Subscription();

  userData: UserProfile | undefined;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.itemList = JSON.parse(localStorage['items']);
    this.itemList.forEach((item) => {
      this.totalQuantity = this.totalQuantity + item.quantity;
    });
    if (localStorage['items']) {
      this.onUpdateCartSub = this.userService.onUpdateCart.subscribe(
        (items) => {
          let quantity = 0;
          items.forEach((item) => {
            quantity = quantity + item.quantity;
          });
          this.totalQuantity = quantity;
        }
      );
    }
    if (localStorage.getItem('token'))
      this.userService
        .getOwnProfile(localStorage.getItem('token'))
        .subscribe((res: any) => {
          this.userData = res.data;
        });
    this.authStateSub = this.userService.authState.subscribe((value: any) => {
      this.userData = value;
    });
  }

  onAccountHover(value: boolean) {
    this.isAccountHovered = value;
  }
  onCartHover(value: boolean) {
    this.isCartHovered = value;
  }
  ngOnDestroy(): void {
    this.authStateSub.unsubscribe();
    this.onUpdateCartSub.unsubscribe();
  }
}
