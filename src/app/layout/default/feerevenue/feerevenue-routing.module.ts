import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeerevenueComponent } from './feerevenue.component';

const routes: Routes = [{ path: '', component: FeerevenueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeerevenueRoutingModule { }
