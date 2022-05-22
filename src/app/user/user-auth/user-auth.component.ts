import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.sass'],
})
export class UserAuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  today: Date = new Date();
  passwordReenter:string = ''

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
    if (authForm.valid) {
      this.isLoading = true;
      if (this.isLoginMode) {
        this.userService
          .auth(authForm.value)
          .pipe(
            catchError((err) => {
              return throwError(() => {
                this.isLoading = false;
                alert('Incorrect username or password');
              });
            })
          )
          .subscribe((res: any) => {
            console.log(res)
            localStorage.setItem('token', res.data.accessToken);
            this.userService
              .getOwnProfile(localStorage.getItem('token'))
              .subscribe((res: any) => {
                this.isLoading = false;
                this.userService.onLoggedIn.next(res.data);
                this.route.navigate(['/']);
              });
          });
      } else {
        if(authForm.value.password === this.passwordReenter){
          this.userService
          .register(authForm.value)
          .pipe(
            catchError((err) => {
              return throwError(() => {
                this.isLoading = false;
                alert('Invalid data');
              });
            })
          )
          .subscribe((data) => {
            alert('Tạo tài khoản thành công');
            this.isLoading = false;
          });
        }else{
          this.isLoading = false
          alert("Nhap lai mat khau khong dung")
        }
      }
      authForm.resetForm();
    }
  }
}
