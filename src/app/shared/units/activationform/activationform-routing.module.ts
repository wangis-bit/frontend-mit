import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeactivationComponent } from './feeactivation/feeactivation.component';
import { SysComponent } from './sys/sys.component';

const routes: Routes = [
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivationformRoutingModule { }
