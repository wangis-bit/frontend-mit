import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { ActivateFeeComponent } from './activate-fee/activate-fee.component';
import { ActivatedStudentsComponent } from './activated-students/activated-students.component';
import { RegnewComponent } from './regnew/regnew.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'regnew', component:RegnewComponent, canActivate:[AuthGuard],},
  {path:'update/:id',component:UpdateComponent, canActivate:[AuthGuard],},
  {path:'activated-student', component:ActivatedStudentsComponent, canActivate:[AuthGuard],},
  {path: 'activateFee/:id', component:ActivateFeeComponent, canActivate:[AuthGuard],}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcountsRoutingModule { }
