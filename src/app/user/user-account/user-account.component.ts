import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfile } from 'src/app/models/user-profile.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.sass'],
})
export class UserAccountComponent implements OnInit {
  token: string | null = '';
  userData: UserProfile = new UserProfile();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userService.getOwnProfile(this.token).subscribe((res: any) => {
      this.userData = res.data;
    });
  }

  onSubmit(profileForm: NgForm) {
    this.userService
      .updateOwnProfile(this.token, profileForm.value)
      .subscribe((res) => alert("Cập nhật tài khoản thành công"));
  }
}
