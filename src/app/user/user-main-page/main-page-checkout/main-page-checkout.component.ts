import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-main-page-checkout',
  templateUrl: './main-page-checkout.component.html',
  styleUrls: ['./main-page-checkout.component.sass'],
})
export class MainPageCheckoutComponent implements OnInit {
  itemList: CartItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.itemList = localStorage['items'] && JSON.parse(localStorage['items']);
  }
}
