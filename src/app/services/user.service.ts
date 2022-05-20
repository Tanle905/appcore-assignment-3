import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL: string = 'https://phongvu-api.herokuapp.com/api/v1';
  userApi = {
    categories: '/categories',
    products: '/products',
    userLogin: '/auth/login',
    userRegister: '/auth/register',
    userProfile: '/users/me/profile',
  };

  private isLogedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {}

  get isLoggedIn(){
    return this.isLogedIn.asObservable()
  }

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
  getOwnProfile(token: string | null) {
    return this.http.get(this.URL + this.userApi.userProfile, {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }
  auth(params: any) {
    return this.http.post(this.URL + this.userApi.userLogin, params);
  }
  register(params: any) {
    return this.http.post(this.URL + this.userApi.userRegister, params);
  }
}
