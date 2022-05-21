import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './auth-forgot-password.component.html',
  styleUrls: ['./auth-forgot-password.component.sass'],
})
export class AuthForgotPasswordComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.forgotPassword(form.value).subscribe((res) => {
        console.log(res);
        alert('Gửi email xác thực thành công.');
      });
      form.reset();
    }
  }
}
