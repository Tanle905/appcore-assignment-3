import { Category } from "./category.model";

export class Product {
  constructor(
    public _id: string = '',
    public name: string = '',
    public description: string = '',
    public sku: string = '',
    public price: number = 0,
    public quantity: number = 0,
    public image: string = '',
    public category: Category = new Category(),
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public slug: string = '',
    public __v: number = 0
  ) {}
}
