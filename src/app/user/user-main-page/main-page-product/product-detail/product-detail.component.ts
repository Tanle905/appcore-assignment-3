import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { UserService } from 'src/app/services/user.service';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
})
export class ProductDetailComponent implements OnInit {
  productDetails: Product = new Product();
  quantityLeft: number = 0;
  id: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.userService.getProductDetails(params.id).subscribe((res: any) => {
        this.productDetails = res.data;
        this.id = this.productDetails._id;
      });
    });
  }

  onBuyNow() {}
  onAddToCart() {
    const items: CartItem[] =
      (localStorage['items'] && JSON.parse(localStorage['items'])) || [];
    this.quantityLeft =
      this.productDetails.quantity -
      ((checkForDuplicate(items, this.id)[0] &&
        checkForDuplicate(items, this.id)[0].quantity) ||
        0);
    if (this.quantityLeft > 0) {
      if (checkForDuplicate(items, this.id).length !== 0) {
        checkForDuplicate(items, this.id)[0].quantity++;
      } else {
        items.push({
          id: this.id,
          name: this.productDetails.name,
          price: this.productDetails.price,
          image: this.productDetails.image,
          quantity: 1,
        });
      }
      localStorage.setItem('items', JSON.stringify(items));
      this.quantityLeft--;
      this.userService.onUpdateCart.next(true)
    } else alert('Da het hang');

    function checkForDuplicate(items: CartItem[], id: string) {
      return items.filter((item: any) => item.id.includes(id));
    }
  }
}
