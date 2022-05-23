import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    localStorage['token'] &&
      this.userService.autoLogout(JSON.parse(localStorage['expireIn']));
  }
}
