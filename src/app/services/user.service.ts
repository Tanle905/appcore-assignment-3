import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL: string = 'https://phongvu-api.herokuapp.com/api/v1';
  userApi = {
    categories: '/categories',
    products: '/products',
    userLogin: '/auth/login',
    userForgotPassword: '/auth/forgot-password',
    userRegister: '/auth/register',
    userProfile: '/users/me/profile',
  };
  authState: Subject<Object | null> = new Subject();
  isLoggedIn: boolean = false
  onUpdateCart: Subject<boolean> = new Subject();
  constructor(private http: HttpClient, private router:Router) {}

  getCategories() {
    return this.http.get(
      this.URL +
        this.userApi.categories +
        '?page=1&limit=10&search=&sort[createdAt]=asc'
    );
  }
  getProducts() {
    return this.http.get(
      this.URL +
        this.userApi.products +
        '?page=1&limit=10&search=&sort[createdAt]=asc'
    );
  }
  getProductDetails(productId: string) {
    return this.http.get(this.URL + this.userApi.products + '/' + productId);
  }
  getOwnProfile(token: string | null) {
    return this.http.get(this.URL + this.userApi.userProfile, {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }
  updateOwnProfile(token: string | null, params: UserProfile) {
    return this.http.put(this.URL + this.userApi.userProfile, params, {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }
  auth(params: any) {
    return this.http.post(this.URL + this.userApi.userLogin, params);
  }
  autoLogout(expireIn: number) {
    setTimeout(() => {
      alert("Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại")
      localStorage.removeItem('token');
      this.isLoggedIn = false
      this.authState.next(null);
      this.router.navigate([''])
    },expireIn);
  }
  forgotPassword(params: any) {
    return this.http.post(this.URL + this.userApi.userForgotPassword, params);
  }
  register(params: any) {
    const httpParams = new HttpParams({ fromObject: params });
    return this.http.post(this.URL + this.userApi.userRegister, httpParams, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
