import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface Product{
  _id:string,
  name:string,
  description:string,
  sku:string,
  price:number,
  quantity:number,
  image:string,
  category:string,
  createdAt:Date,
  updatedAt:Date,
  slug:string,
  __v:number,
}

@Component({
  selector: 'app-main-page-product',
  templateUrl: './main-page-product.component.html',
  styleUrls: ['./main-page-product.component.sass']
})
export class MainPageProductComponent implements OnInit {
  products: Product[] = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getProducts().subscribe((res:any)=>{
      this.products = res.data
      console.log(this.products)
    })
  }

}
