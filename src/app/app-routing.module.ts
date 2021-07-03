import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthGuard2 } from './canload.gurad';
import { AcountsComponent } from './layout/default/acounts/acounts.component';
import { DefaultComponent } from './layout/default/default.component';
import { DepartmentsComponent } from './layout/default/departments/departments.component';
import { HodsDetailsComponent } from './layout/default/hods/hods-details/hods-details.component';
import { HodsComponent } from './layout/default/hods/hods.component';
import { EditregisterComponent } from './layout/default/registration/editregister/editregister.component';
import { RegisteredListComponent } from './layout/default/registration/registered-list/registered-list.component';
import { RegistrationComponent } from './layout/default/registration/registration.component';
import { LayoutComponent } from './layout/layout.component';
import { UnitsComponent } from './shared/units/units.component';
import { CourseComponent } from './student/course/course.component';
import { FeeDetailsComponent } from './student/fee-details/fee-details.component';
import { FeesComponent } from './student/fees/fees.component';
import { StudentComponent } from './student/student.component';
import { TrialComponent } from './trial/trial.component';
import { AccountsDashboardComponent } from './users/dashboards/accounts-dashboard/accounts-dashboard.component';
import { DeputyPrincipalDashboardComponent } from './users/dashboards/deputy-principal-dashboard/deputy-principal-dashboard.component';
import { HeadOfDepartmentDashboardComponent } from './users/dashboards/head-of-department-dashboard/head-of-department-dashboard.component';
import { OveralAdminComponent } from './users/dashboards/overal-admin/overal-admin.component';
import { PrincipalDashboardComponent } from './users/dashboards/principal-dashboard/principal-dashboard.component';
import { RegistrationDashboardComponent } from './users/dashboards/registration-dashboard/registration-dashboard.component';
import { StudentDashbaordComponent } from './users/dashboards/student-dashbaord/student-dashbaord.component';
import { TutorDashboardComponent } from './users/dashboards/tutor-dashboard/tutor-dashboard.component';
import { ForbiddenPageComponent } from './users/forbidden-page/forbidden-page.component';









const routes: Routes = [
      // {path:'', redirectTo:'/users', pathMatch:'full'},
      // {path:'users', loadChildren:()=>import('./users/users.module').then(l=>l.UsersModule)},
      {path:'forbidden', component:ForbiddenPageComponent},
      {path:'',component:DefaultComponent,canActivate:[AuthGuard],
          children:[
                
                {path:'',loadChildren:()=>import('./layout/default/default2.module').then(mods=>mods.Default2Module)},
                {path:'departments', loadChildren:()=>import('./layout/default/departments/departments.module').then(load=>load.DepartmentsModule)},
                {path:'units',loadChildren:()=>import('./shared/units/units.module').then(route=>route.UnitsModule)},
                {path:'registration', component:RegistrationComponent,canActivate:[AuthGuard],},
                {path:'list',component:RegisteredListComponent, canActivate:[AuthGuard],},
                {path:'list/editregister/:id', component:EditregisterComponent, canActivate:[AuthGuard],},
                {path:'accounts', loadChildren:()=>import('./layout/default/acounts/acounts.module').then(k=>k.AcountsModule)},
                
                
                {path:'activateform', loadChildren: ()=>import('./shared/units/activationform/activationform.module').then(n=>n.ActivationformModule)},
                {path:'feeDetails',component:FeeDetailsComponent, canActivate:[AuthGuard],}
                
               
      ]},
      {path:'course',component:CourseComponent, canLoad:[AuthGuard2]},
    
      {path:'users', loadChildren:()=>import('./users/users.module').then(l=>l.UsersModule)},
      //Dashboard routes
      {path:'admin/dashboard', component:OveralAdminComponent,canActivate:[AuthGuard],
        children:[
          {path:'departments', loadChildren:()=>import('./layout/default/departments/departments.module').then(load=>load.DepartmentsModule)},
          {path:'units',loadChildren:()=>import('./shared/units/units.module').then(route=>route.UnitsModule)},
        ]
      },
      {path:'principal/Dashboard', component:PrincipalDashboardComponent,canActivate:[AuthGuard],
      children:[
        {path:'departments', loadChildren:()=>import('./layout/default/departments/departments.module').then(load=>load.DepartmentsModule)},
        {path:'units',loadChildren:()=>import('./shared/units/units.module').then(route=>route.UnitsModule)},
      ]
      },
      {path: 'Deputy-Principal/Dashboard', component:DeputyPrincipalDashboardComponent,canActivate:[AuthGuard],
      children:[
        {path:'departments', loadChildren:()=>import('./layout/default/departments/departments.module').then(load=>load.DepartmentsModule)},
        {path:'Deputy-Principal/Dashboard',loadChildren:()=>import('./layout/default/default2.module').then(mods=>mods.Default2Module)},
        {path:'units',loadChildren:()=>import('./shared/units/units.module').then(route=>route.UnitsModule)},
        {path:'users', loadChildren:()=>import('./users/users.module').then(l=>l.UsersModule)},
      ]
      },
      {path:'HOD/Dashboard',component:HeadOfDepartmentDashboardComponent,canActivate:[AuthGuard],
          children:[
            {path:'departments', component:DepartmentsComponent, canActivate:[AuthGuard],},
            {path:'departments', loadChildren:()=>import('./layout/default/departments/departments.module').then(load=>load.DepartmentsModule)},
            // {path:'HOD/Dashboard',loadChildren:()=>import('./layout/default/default2.module').then(mods=>mods.Default2Module)},
            {path:'', component: HodsComponent},
            {path:'department-details/:id', component:HodsDetailsComponent}
          ]
      
      },
      {path:'tutors/MainDashboard', loadChildren:()=>import('./users/dashboards/tutor-dashboard/tutor-dashboard.module').then(m=>m.TutorDashboardModule), canActivate:[AuthGuard],},
      {path:'registration/Dashboard', component:RegistrationDashboardComponent,canActivate:[AuthGuard],
        children:[
          {path:'registration', component:RegistrationComponent,canActivate:[AuthGuard],},
          {path:'list',component:RegisteredListComponent, canActivate:[AuthGuard],},
          {path:'registration/Dashboard',loadChildren:()=>import('./layout/default/default2.module').then(mods=>mods.Default2Module)},
        ]
      },
      {path:'students/Dashboard',loadChildren:()=>import('./users/dashboards/student-dashbaord/student-module/student-module.module').then(mods=>mods.StudentModuleModule)},
      {path:'accountsPanel/Dashboard', component:AccountsDashboardComponent,
      children:[
        {path:'accounts',component:AcountsComponent, canActivate:[AuthGuard],}, 
        {path:'accountsPanel/Dashboard',loadChildren:()=>import('./layout/default/default2.module').then(mods=>mods.Default2Module)},
      ]
      },
      
      
 
      
      
   

     
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
