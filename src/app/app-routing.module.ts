import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AuthGuard } from './auth/auth-guard.service';

const authRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'recipes',loadChildren: './recipes/recipes.module#RecipesModule' } //LazyLoading
  //{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(authRoutes)
    //RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
