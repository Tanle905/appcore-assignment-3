export class Address{
    constructor(
        public id:string='',
        public fullName:string='',
        public phone:string='',
        public address:string='',
        public ward:string='',
        public district:string='',
        public city:string='',
        public country:string='',
        public latitude:string='',
        public longitude:string='',
        public isDefault?:boolean,
        public fullAddress:string='',
    ){}
}