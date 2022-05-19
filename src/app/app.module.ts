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
import { UserLoginComponent } from './user/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserMainPageComponent,
    UserHeaderComponent,
    UserFooterComponent,
    MainPageCategoryComponent,
    MainPageProductComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
