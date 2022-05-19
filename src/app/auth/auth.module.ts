import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetComponent } from './forget/forget.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    LogoutComponent,
    ForgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
