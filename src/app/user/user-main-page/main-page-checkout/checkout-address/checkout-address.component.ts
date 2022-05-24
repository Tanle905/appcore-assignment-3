import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.sass'],
})
export class CheckoutAddressComponent implements OnInit {
  addressList: Address[] = [];
  error: boolean = false;
  selectedAddress: Address = new Address();
  selectedAddressId: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getAddress(localStorage['token'])
      .pipe(
        catchError((err) => {
          return throwError(() => {
            this.error = true;
          });
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        this.addressList = res.data;
        this.addressList.forEach((address) => {
          if (address.isDefault) {
            this.selectedAddress = address;
            this.selectedAddressId = address.id;
          }
        });
        console.log(this.selectedAddressId);
      });
  }
  onSelected(address: Address) {
    this.selectedAddress = address;
    this.selectedAddressId = address.id;
  }
}
