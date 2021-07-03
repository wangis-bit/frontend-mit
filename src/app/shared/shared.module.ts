import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../materials/material/material.module';
import { PrincipalComponent } from '../layout/default/principal/principal.component';
import { UnitsComponent } from './units/units.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcountsComponent } from '../layout/default/acounts/acounts.component';

import { RegistrationComponent } from '../layout/default/registration/registration.component';
import { RegisteredListComponent } from '../layout/default/registration/registered-list/registered-list.component';
import { RegnewComponent } from '../layout/default/acounts/regnew/regnew.component';
import { UpdateComponent } from '../layout/default/acounts/update/update.component';
import { EditregisterComponent } from '../layout/default/registration/editregister/editregister.component';
import { ClearStudentsComponent } from './units/clear-students/clear-students.component';
import { ClearFinanceComponent } from './units/clear-finance/clear-finance.component';
import { UnitsModule } from './units/units.module';
import { DeferComponent } from './units/defer/defer.component';
import { DeferedListComponent } from './units/defered-list/defered-list.component';
import { ActivateComponent } from './units/activate/activate.component';
import { ActivationformComponent } from './units/activationform/activationform.component';
import { ActivatedStudentsComponent } from '../layout/default/acounts/activated-students/activated-students.component';
import { ActivateFeeComponent } from '../layout/default/acounts/activate-fee/activate-fee.component';
import { FeeactivationComponent } from './units/activationform/feeactivation/feeactivation.component';
import { SysComponent } from './units/activationform/sys/sys.component';
import { DeferedStudentListComponent } from './units/defered-student-list/defered-student-list.component';
import { AlumniFormComponent } from './units/alumni-form/alumni-form.component';
import { ConfrimDialogComponent } from './confrim-dialog/confrim-dialog.component';
import { AccountsDashboardComponent } from '../users/dashboards/accounts-dashboard/accounts-dashboard.component';
import { DeputyPrincipalDashboardComponent } from '../users/dashboards/deputy-principal-dashboard/deputy-principal-dashboard.component';
import { HeadOfDepartmentDashboardComponent } from '../users/dashboards/head-of-department-dashboard/head-of-department-dashboard.component';
import { OveralAdminComponent } from '../users/dashboards/overal-admin/overal-admin.component';
import { PrincipalDashboardComponent } from '../users/dashboards/principal-dashboard/principal-dashboard.component';
import { RegistrationDashboardComponent } from '../users/dashboards/registration-dashboard/registration-dashboard.component';
import { StudentDashbaordComponent } from '../users/dashboards/student-dashbaord/student-dashbaord.component';
import { TutorDashboardComponent } from '../users/dashboards/tutor-dashboard/tutor-dashboard.component';
import { LoginUserComponent } from '../users/login-user/login-user.component';
import { UsersComponent } from '../users/users.component';
import { PrincipalsidebarComponent } from '../users/dashboards/principal-dashboard/principalsidebar/principalsidebar.component';
import { PrincipalheaderComponent } from '../users/dashboards/principal-dashboard/principalheader/principalheader.component';
import { AdminheaderComponent } from '../users/dashboards/overal-admin/adminheader/adminheader.component';
import { AdminsiderbarComponent } from '../users/dashboards/overal-admin/adminsiderbar/adminsiderbar.component';
import { DeputyheaderComponent } from '../users/dashboards/deputy-principal-dashboard/deputyheader/deputyheader.component';
import { DeputysiderbarComponent } from '../users/dashboards/deputy-principal-dashboard/deputysiderbar/deputysiderbar.component';
import { AccountsidebarComponent } from '../users/dashboards/accounts-dashboard/accountsidebar/accountsidebar.component';
import { AccountsheaderComponent } from '../users/dashboards/accounts-dashboard/accountsheader/accountsheader.component';
import { HodheadComponent } from '../users/dashboards/head-of-department-dashboard/hodhead/hodhead.component';
import { HodsidebarComponent } from '../users/dashboards/head-of-department-dashboard/hodsidebar/hodsidebar.component';
import { RegheadComponent } from '../users/dashboards/registration-dashboard/reghead/reghead.component';
import { RegsidebarComponent } from '../users/dashboards/registration-dashboard/regsidebar/regsidebar.component';
import { HodsComponent } from '../layout/default/hods/hods.component';
import { HodsDetailsComponent } from '../layout/default/hods/hods-details/hods-details.component';
import { AccountantLoginComponent } from '../users/register-user/accountant-login/accountant-login.component';
import { DirectorComponent } from '../users/register-user/director/director.component';
import { DploginComponent } from '../users/register-user/dplogin/dplogin.component';
import { HODLoginComponent } from '../users/register-user/hodlogin/hodlogin.component';
import { OveralUsersComponent } from '../users/register-user/overal-users/overal-users.component';
import { RegistrarloginComponent } from '../users/register-user/registrarlogin/registrarlogin.component';
import { TutorsComponent } from '../users/register-user/tutors/tutors.component';
import { AdminLoginComponent } from '../users/register-user/admin-login/admin-login.component';
import { AdminAuthLoginComponent } from '../users/login-user/admin-auth-login/admin-auth-login.component';
import { StudentHeaderComponent } from '../users/dashboards/student-dashbaord/student-header/student-header.component';
import { StudentSidebarComponent } from '../users/dashboards/student-dashbaord/student-sidebar/student-sidebar.component';
import { StudentinformationComponent } from '../users/dashboards/student-dashbaord/studentinformation/studentinformation.component';
import { TutorSidebarComponent } from '../users/dashboards/tutor-dashboard/tutor-sidebar/tutor-sidebar.component';
import { TutorHeaderComponent } from '../users/dashboards/tutor-dashboard/tutor-header/tutor-header.component';
import { TutorhomeComponent } from '../users/dashboards/tutor-dashboard/tutorhome/tutorhome.component';
import { TutorfeesbalComponent } from '../users/dashboards/tutor-dashboard/tutorfeesbal/tutorfeesbal.component';







@NgModule({
  declarations: [
    HeaderComponent,
    UnitsComponent,
    FooterComponent,
    SidebarComponent,
    PrincipalComponent,
    AcountsComponent,
    RegistrationComponent,
    RegisteredListComponent, 
    RegnewComponent,
    UpdateComponent,
    EditregisterComponent,
    ClearStudentsComponent,
    ClearFinanceComponent,
    DeferComponent,
    DeferedListComponent,
    ActivateComponent,
    ActivationformComponent,
    ActivatedStudentsComponent,
    ActivateFeeComponent,
    FeeactivationComponent,
    SysComponent,
    DeferedStudentListComponent,
    AlumniFormComponent,
    ConfrimDialogComponent,
    HodsComponent,
    HodsDetailsComponent,
   
    
    OveralAdminComponent, 
    PrincipalDashboardComponent, 
    DeputyPrincipalDashboardComponent, 
    RegistrationDashboardComponent, 
    HeadOfDepartmentDashboardComponent, 
    TutorDashboardComponent, 
    StudentDashbaordComponent, 
    AccountsDashboardComponent,
    PrincipalsidebarComponent,
    PrincipalheaderComponent,
    AdminheaderComponent, 
    AdminsiderbarComponent, 
    DeputyheaderComponent, 
    DeputysiderbarComponent,
    AccountsidebarComponent, 
    AccountsheaderComponent,
    HodheadComponent, 
    HodsidebarComponent,
    RegheadComponent, 
    RegsidebarComponent,
    HodsDetailsComponent,
    OveralUsersComponent, 
    TutorsComponent, 
    DirectorComponent, 
    HODLoginComponent, 
    AccountantLoginComponent, 
    DploginComponent, 
    RegistrarloginComponent,
    AdminLoginComponent,
    StudentSidebarComponent, 
    StudentHeaderComponent,
    StudentinformationComponent,
    AdminAuthLoginComponent,
    TutorSidebarComponent, 
    TutorHeaderComponent,
    TutorhomeComponent,
    TutorfeesbalComponent,

],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    UnitsModule,
    ReactiveFormsModule,
      

    
  ],
  exports: [
    UnitsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PrincipalComponent,
    AcountsComponent,
    RegistrationComponent,
    RegisteredListComponent,
    RegnewComponent,
    UpdateComponent,
    EditregisterComponent,
    ClearStudentsComponent,
    ClearFinanceComponent,
    DeferedListComponent,
    ActivateComponent,
    ActivationformComponent,
    ActivatedStudentsComponent,
    ActivateFeeComponent,
    FeeactivationComponent,
    DeferedStudentListComponent,
    AlumniFormComponent,
    OveralAdminComponent, 
    PrincipalDashboardComponent, 
    DeputyPrincipalDashboardComponent, 
    RegistrationDashboardComponent, 
    HeadOfDepartmentDashboardComponent, 
    TutorDashboardComponent, 
    StudentDashbaordComponent, 
    AccountsDashboardComponent,
    PrincipalsidebarComponent,
    PrincipalheaderComponent,
    AdminheaderComponent, 
    AdminsiderbarComponent,
    DeputyheaderComponent, 
    DeputysiderbarComponent,
    AccountsidebarComponent, 
    AccountsheaderComponent,
    HodheadComponent, 
    HodsidebarComponent,
    RegheadComponent, 
    RegsidebarComponent,
    HodsComponent,
    OveralUsersComponent, 
    TutorsComponent, 
    DirectorComponent, 
    HODLoginComponent, 
    AccountantLoginComponent, 
    DploginComponent, 
    RegistrarloginComponent, 
    AdminLoginComponent,
    AdminAuthLoginComponent,
    StudentSidebarComponent,
    StudentinformationComponent,
    StudentHeaderComponent,
    TutorSidebarComponent, 
    TutorHeaderComponent,
    TutorhomeComponent, 
    TutorfeesbalComponent,
    
  ],
  entryComponents:[
    ConfrimDialogComponent
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class SharedModule { }
