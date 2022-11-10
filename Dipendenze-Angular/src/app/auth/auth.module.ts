import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common';
// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginPage
//   },
//   {
//     path: 'register',
//     component: RegisterPage
//   },
// ];

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forChild(routes)
  ],
  exports: [
    LoginPage,
    RegisterPage
  ]
})
export class AuthModule { }
