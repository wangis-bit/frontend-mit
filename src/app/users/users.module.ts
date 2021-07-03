import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginUserComponent } from './login-user/login-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAuthLoginComponent } from './login-user/admin-auth-login/admin-auth-login.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { StudentInfoComponent } from './dashboards/student-dashbaord/student-info/student-info.component';






@NgModule({
  declarations: [LoginUserComponent, UsersComponent, ForbiddenPageComponent, StudentInfoComponent,   ],
  imports: [
    CommonModule,
    UsersRoutingModule, 
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  
    
    
  ], exports:[
    UsersComponent,
    LoginUserComponent
  ]
})
export class UsersModule { }
