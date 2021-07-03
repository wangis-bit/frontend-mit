import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Default2RoutingModule } from './default2-routing.module';
import { AcountsComponent } from './acounts/acounts.component';
import { BalancesComponent } from './balances/balances.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DeputyPrincipalComponent } from './deputy-principal/deputy-principal.component';
import { FeereportsComponent } from './feereports/feereports.component';
import { FeerevenueComponent } from './feerevenue/feerevenue.component';

import { HodsComponent } from './hods/hods.component';
import { ChartsModule } from 'ng2-charts';












@NgModule({
  declarations: [
    DashboardComponent,
    DepartmentsComponent,
    DeputyPrincipalComponent,
    FeereportsComponent,
    FeerevenueComponent,
    
    BalancesComponent,
    
    
    
  
    
    
    
   
    
    
  ],
  imports: [
    CommonModule,
    Default2RoutingModule,
    ChartsModule,
   
   
    
  ],exports:[
    DashboardComponent,
    
    DepartmentsComponent,
    DeputyPrincipalComponent,
    FeereportsComponent,
    FeerevenueComponent,
   
    BalancesComponent,
    ChartsModule,
    
    
  ]
})
export class Default2Module { }
