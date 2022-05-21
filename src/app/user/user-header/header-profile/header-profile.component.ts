import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.sass']
})
export class HeaderProfileComponent implements OnInit {
  @Input() userData:UserProfile | undefined

  constructor(private route: Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.clear()
    this.userService.onLoggedIn.next(null)
    this.route.navigate([''])
  }

}
