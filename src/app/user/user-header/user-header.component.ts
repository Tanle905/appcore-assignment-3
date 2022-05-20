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
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.sass'],
})
export class UserHeaderComponent implements OnInit {
  iconsArray: { name: IconDefinition; content: string; link: string }[] = [
    { name: faTag, content: 'Khuyến mãi', link: '' },
    { name: faClipboardList, content: 'Đơn hàng', link: '' },
    { name: faUser, content: 'Đăng nhập', link: '/login' },
    { name: faBell, content: 'Thông báo', link: '' },
    { name: faCartShopping, content: 'Giỏ hàng', link: '' },
  ];
  searchIcon = faSearch;

  userData: UserProfile | undefined;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getOwnProfile(localStorage.getItem('token'))
      .subscribe((data: any) => {
        this.userData = data.data;
        this.iconsArray[2].content =
          this.userData?.firstName || '';
      });
  }
}
