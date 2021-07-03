import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeereportsComponent } from './feereports.component';

const routes: Routes = [{ path: '', component: FeereportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeereportsRoutingModule { }
