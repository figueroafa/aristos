import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {RegisterComponent} from './register/register.component';
import {AuthResetPasswordComponent} from './reset-pass/reset-pass.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
