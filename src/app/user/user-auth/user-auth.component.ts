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

  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
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
          this.isLoading = false;
          localStorage.setItem('token', res.data.accessToken);
          this.route.navigate(['/']);
        });
    } else {
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
          this.isLoading = false;
        });
    }
    authForm.resetForm();
  }
}
