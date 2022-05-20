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
  isMouseEnter:boolean = false

  userData: UserProfile | undefined;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getOwnProfile(localStorage.getItem('token'))
      .subscribe((data: any) => {
        this.userData = data.data;
      });
  }

  onMouseEnter(value:boolean){
    this.isMouseEnter = value
  }
}
