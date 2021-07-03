import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AcountsComponent } from './acounts/acounts.component';
import { UpdateComponent } from './acounts/update/update.component';
import { BalancesComponent } from './balances/balances.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeputyPrincipalComponent } from './deputy-principal/deputy-principal.component';

import { FeereportsComponent } from './feereports/feereports.component';
import { FeerevenueComponent } from './feerevenue/feerevenue.component';
import { RegisteredListComponent } from './registration/registered-list/registered-list.component';


const routes: Routes = [
  {path:'',component:DashboardComponent, canActivate:[AuthGuard],},
  {path:'accounts',component:AcountsComponent, canActivate:[AuthGuard],},
  {path:'deputy', component:DeputyPrincipalComponent, canActivate:[AuthGuard],},
  {path: 'bal',component:BalancesComponent, canActivate:[AuthGuard],},
  {path:'departments', component:DepartmentsComponent, canActivate:[AuthGuard],},
  {path:'revenue',component:FeerevenueComponent, canActivate:[AuthGuard],},
  {path:'reports', component:FeereportsComponent, canActivate:[AuthGuard],},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Default2RoutingModule { }
