export class CartItem {
  constructor(
    public id: string = '',
    public name: string = '',
    public price: number = 0,
    public image: string = '',
    public quantity: number = 0,
    public sku:string = ''
  ) {}
}
