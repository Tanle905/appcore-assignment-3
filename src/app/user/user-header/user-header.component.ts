import { Component, OnInit } from '@angular/core';
import {
  faBell,
  faCartShopping,
  faClipboardList,
  faSearch,
  faTag,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.sass'],
})
export class UserHeaderComponent implements OnInit {
  iconsArray: {name: IconDefinition, content: string}[] = [
    { name: faTag, content: 'Khuyến mãi' },
    { name: faClipboardList, content: 'Đơn hàng' },
    { name: faUser, content: 'Đăng nhập' },
    { name: faBell, content: 'Thông báo' },
    { name: faCartShopping, content: 'Giỏ hàng' },
  ];
  searchIcon = faSearch;
  constructor() {}

  ngOnInit(): void {}
}
