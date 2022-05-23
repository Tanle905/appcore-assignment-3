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
  faTag = faTag;
  faClipboardList = faClipboardList;
  faUser = faUser;
  faBell = faBell;
  faCartShopping = faCartShopping;
  searchIcon = faSearch;
  isAccountHovered: boolean = false;
  isCartHovered: boolean = false;

  userData: UserProfile | undefined;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token'))
      this.userService
        .getOwnProfile(localStorage.getItem('token'))
        .subscribe((res: any) => {
          this.userData = res.data;
        });
    this.userService.authState.subscribe((value: any) => {
      this.userData = value;
    });
  }

  onAccountHover(value: boolean) {
    this.isAccountHovered = value;
  }
  onCartHover(value:boolean){
    this.isCartHovered = value;
  }
}
