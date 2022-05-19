import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface Category {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  __v: number;
}

@Component({
  selector: 'app-main-page-category',
  templateUrl: './main-page-category.component.html',
  styleUrls: ['./main-page-category.component.sass'],
})
export class MainPageCategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCategories().subscribe((res: any) => {
      this.categories = res.data;
    });
  }
}
