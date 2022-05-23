import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user/user-auth/user-auth.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { UserMainPageComponent } from './user/user-main-page/user-main-page.component';
import { UserComponent } from './user/user.component';
import { UserAccountComponent } from './user/user-account/user-account.component';
import { AuthForgotPasswordComponent } from './user/user-auth/auth-forgot-password/auth-forgot-password.component';
import { ProductDetailComponent } from './user/user-main-page/main-page-product/product-detail/product-detail.component';
import { MainPageCheckoutComponent } from './user/user-main-page/main-page-checkout/main-page-checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserMainPageComponent },
      { path: 'login', component: UserAuthComponent },
      { path: 'account', component:UserAccountComponent},
      { path:'forgot-password', component:AuthForgotPasswordComponent},
      { path:'product', component:ProductDetailComponent},
      { path: 'checkout', component:MainPageCheckoutComponent}
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo:'login',pathMatch:'prefix' },
      { path: 'login', component: AdminLoginComponent },
    ],
  },
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
