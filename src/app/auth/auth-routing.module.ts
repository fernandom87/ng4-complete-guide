import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'singup', component: SignupComponent},
  {path: 'singin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    //RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]

})
export class AuthRoutingModule {}
