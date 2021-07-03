import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './register-user/admin-login/admin-login.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AccountantLoginComponent } from './register-user/accountant-login/accountant-login.component';
import { DirectorComponent } from './register-user/director/director.component';
import { DploginComponent } from './register-user/dplogin/dplogin.component';
import { HODLoginComponent } from './register-user/hodlogin/hodlogin.component';
import { OveralUsersComponent } from './register-user/overal-users/overal-users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegistrarloginComponent } from './register-user/registrarlogin/registrarlogin.component';
import { TutorsComponent } from './register-user/tutors/tutors.component';

import { UsersComponent } from './users.component';
import { AdminAuthLoginComponent } from './login-user/admin-auth-login/admin-auth-login.component';

const routes: Routes = [
  {path:'',component:UsersComponent,
  children:[
    {path:'registerUser', component:RegisterUserComponent},
    {path:'',component:LoginUserComponent},
    {path:'registerUser/principal-login-reg',component:OveralUsersComponent},
    {path:'registerUser/tutors-reg', component:TutorsComponent},
    {path:'registerUser/hod-login-reg',component:HODLoginComponent},
    {path:'registerUser/accountant-login-reg', component:AccountantLoginComponent},
    {path:'registerUser/registar-login', component:RegistrarloginComponent},
    {path:'registerUser/dp-login-reg',component:DploginComponent},
    {path:'registerUser/director-login-reg',component:DirectorComponent},
    {path:'registerUser/admin-login-reg', component:AdminLoginComponent},
    {path:'admin-auth-login', component:AdminAuthLoginComponent}
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
