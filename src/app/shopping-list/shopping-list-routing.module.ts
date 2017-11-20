import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';

const appRoutes: Routes = [
  {path:'shopping-list',  component: ShoppingListComponent} //have to be the last one
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
    //RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]

})
export class ShoppingListRoutingModule{}
