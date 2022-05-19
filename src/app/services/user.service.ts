import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL:string = 'https://phongvu-api.herokuapp.com/api/v1'
  userApi = {
    categories: '/categories',
    products: '/products'
  }

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.URL + this.userApi.categories + '?page=1&limit=10&search=&sort[createdAt]=asc')
  }
  getProducts(){
    return this.http.get(this.URL + this.userApi.products + '?page=1&limit=10&search=&sort[createdAt]=asc')
  }
}
