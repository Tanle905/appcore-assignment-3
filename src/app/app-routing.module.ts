import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user/user-auth/user-auth.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
