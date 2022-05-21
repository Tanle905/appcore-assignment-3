export class UserProfile {
  constructor(
    public _id: string = '',
    public avatar: string = '',
    public email: string = '',
    public phone: string = '',
    public isEmailVerified: boolean = false,
    public isPhoneVerified: boolean = false,
    public firstName: string = '',
    public lastName: string = '',
    public role: string = '',
    public dob: Date = new Date(),
    public gender: string = '',
    public status: string = ''
  ) {}
}
