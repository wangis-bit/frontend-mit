import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IctComponent } from './ict.component';

const routes: Routes = [{ path: '', component: IctComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IctRoutingModule { }
