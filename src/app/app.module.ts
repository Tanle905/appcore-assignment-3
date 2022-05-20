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
<<<<<<< HEAD
import { UserAuthComponent } from './user/user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';
import { HeaderProfileComponent } from './user/user-header/header-profile/header-profile.component';
=======
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
>>>>>>> 0077f56f1dfaa54ef858796b0c4def16656c5def


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserMainPageComponent,
    UserHeaderComponent,
    UserFooterComponent,
    MainPageCategoryComponent,
    MainPageProductComponent,
<<<<<<< HEAD
    UserAuthComponent,
    HeaderProfileComponent,
=======
    UserLoginComponent,
    AdminComponent,
    AdminLoginComponent
>>>>>>> 0077f56f1dfaa54ef858796b0c4def16656c5def
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
