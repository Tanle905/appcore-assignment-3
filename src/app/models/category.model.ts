export class Category {
  constructor(
    public _id: string = '',
    public name: string = '',
    public description: string = '',
    public image: string = '',
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public slug: string = '',
    public __v: number = 0
  ) {}
}
