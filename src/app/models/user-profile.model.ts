export class UserProfile{
    constructor(
        public _id:string,
        public avatar:string,
        public email:string,
        public phone:string,
        public isEmailVerified:boolean,
        public isPhoneVerified:boolean,
        public firstName:string,
        public lastName:string,
        public role:string,
        public dob:Date,
        public gender:string,
        public status:string
    ){}
}