import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user/user-auth/user-auth.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { UserMainPageComponent } from './user/user-main-page/user-main-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserMainPageComponent },
      { path: 'login', component: UserAuthComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
