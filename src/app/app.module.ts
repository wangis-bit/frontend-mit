import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layout/default/default.component';

import { MaterialModule } from './materials/material/material.module';

import { SharedModule } from './shared/shared.module';
import { Default2Module } from './layout/default/default2.module';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit';
import { ChartsModule } from 'ng2-charts';
import { MdbModule } from 'mdb-angular-ui-kit';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MatNativeDateModule } from '@angular/material/core';
import { SearchPipe } from './search.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { TrialComponent } from './trial/trial.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './student/course/course.component';
import { FeesComponent } from './student/fees/fees.component';
import { FeeDetailsComponent } from './student/fee-details/fee-details.component';
import { FeesService } from './shared2/fees.service';
import { SysComponent } from './shared/units/activationform/sys/sys.component';
import{NgxWebstorageModule} from 'ngx-webstorage'
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth.guard';
import { AdminLoginComponent } from './users/register-user/admin-login/admin-login.component';










@NgModule({
  declarations: [
  DefaultComponent,
  AppComponent,
  SearchPipe,
  RegisterUserComponent,
  TrialComponent,
  StudentComponent,
  CourseComponent,
  FeesComponent,
  FeeDetailsComponent,
  LayoutComponent,
 
  
 


  
],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Default2Module,
    RouterModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    MdbModule,
    MdbFormsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'})


    
  
     
   
    
  ],
  entryComponents:[
    FeeDetailsComponent,
  ],
  providers: [FeesService, AuthGuard,
  // {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  ],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
