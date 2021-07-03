import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { ActivateComponent } from './activate/activate.component';
import { ActivationformComponent } from './activationform/activationform.component';
import { FeeactivationComponent } from './activationform/feeactivation/feeactivation.component';
import { SysComponent } from './activationform/sys/sys.component';
import { AlumniFormComponent } from './alumni-form/alumni-form.component';
import { ClearFinanceComponent } from './clear-finance/clear-finance.component';
import { ClearStudentsComponent } from './clear-students/clear-students.component';
import { DeferComponent } from './defer/defer.component';
import { DeferedListComponent } from './defered-list/defered-list.component';
import { DeferedStudentListComponent } from './defered-student-list/defered-student-list.component';
import { UnitsComponent } from './units.component';

const routes: Routes = [
  {path:'', component: UnitsComponent,canActivate:[AuthGuard],
  children: [
    {path:'', component: ClearStudentsComponent, canActivate:[AuthGuard],},
    {path: 'clearfinance', component: ClearFinanceComponent, canActivate:[AuthGuard],},
    {path: 'defer', component:DeferComponent ,canActivate:[AuthGuard],},
    {path:'defer_list/:id', component:DeferedListComponent, canActivate:[AuthGuard],},
    {path: 'activateStudent', component: ActivateComponent, canActivate:[AuthGuard],},
    {path:'activateform/:id', component:ActivationformComponent, canActivate:[AuthGuard],},
    {path:'activationOfFee/:id', component:FeeactivationComponent, canActivate:[AuthGuard],},
    {path:'ActivatedStudents', component:SysComponent, canActivate:[AuthGuard],},
    {path:'inactiveStudents', component:DeferedStudentListComponent, canActivate:[AuthGuard],},
    {path:"alumni/:id", component:AlumniFormComponent, canActivate:[AuthGuard],},
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
