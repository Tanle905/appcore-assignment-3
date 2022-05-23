import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.sass']
})
export class CheckoutAddressComponent implements OnInit {
  addressList:Address[] = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAddress(localStorage['token']).subscribe((res:any)=>{
      console.log(res)
      this.addressList = res.data
    })
  }

}
