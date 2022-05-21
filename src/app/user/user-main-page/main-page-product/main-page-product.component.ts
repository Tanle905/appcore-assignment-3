import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-main-page-product',
  templateUrl: './main-page-product.component.html',
  styleUrls: ['./main-page-product.component.sass']
})
export class MainPageProductComponent implements OnInit {
  products: Product[] = []

  constructor(private userService:UserService, private route:Router) { }

  ngOnInit(): void {
    this.userService.getProducts().subscribe((res:any)=>{
      this.products = res.data
    })
  }

  onNavigate(productId:string){
    this.route.navigate(['/product'], {queryParams:{id:productId}})
  }

}
