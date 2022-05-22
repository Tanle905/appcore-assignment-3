import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.sass'],
})
export class HeaderCartComponent implements OnInit {
  itemsList: CartItem[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.itemsList = localStorage['items'] && JSON.parse(localStorage['items']);
    this.userService.onUpdateCart.subscribe(()=>{
      this.itemsList = localStorage['items'] && JSON.parse(localStorage['items']);
    })
  }
}
