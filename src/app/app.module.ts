import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserMainPageComponent } from './user/user-main-page/user-main-page.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { MainPageCategoryComponent } from './user/user-main-page/main-page-category/main-page-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageProductComponent } from './user/user-main-page/main-page-product/main-page-product.component';
import { UserAuthComponent } from './user/user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';
import { HeaderProfileComponent } from './user/user-header/header-profile/header-profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserAccountComponent } from './user/user-account/user-account.component';
import { AuthForgotPasswordComponent } from './user/user-auth/auth-forgot-password/auth-forgot-password.component';
import { ProductDetailComponent } from './user/user-main-page/main-page-product/product-detail/product-detail.component';
import { HeaderCartComponent } from './user/user-header/header-cart/header-cart.component';
import { MainPageCheckoutComponent } from './user/user-main-page/main-page-checkout/main-page-checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserMainPageComponent,
    UserHeaderComponent,
    UserFooterComponent,
    MainPageCategoryComponent,
    MainPageProductComponent,
    UserAuthComponent,
    HeaderProfileComponent,
    AdminComponent,
    AdminLoginComponent,
    UserAccountComponent,
    AuthForgotPasswordComponent,
    ProductDetailComponent,
    HeaderCartComponent,
    MainPageCheckoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxStripeModule.forRoot(
      'pk_test_51KxEc0JsyzcmxeMthvDJvy8lLHbDXIU3uggTgPC4oXvUDwL1DNt7srJwYKzzJyG7NLDv9MjprFy7DZPgoHxieMaS00tFsI8FNI'
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
