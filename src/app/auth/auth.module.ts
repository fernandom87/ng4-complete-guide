import {NgModule} from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthenticatedDirective } from  './authenticated.directive';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthenticatedDirective,
    SignupComponent,
    SigninComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    AuthenticatedDirective
  ]

})
export class AuthModule{}
