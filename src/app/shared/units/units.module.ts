import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { RouterModule } from '@angular/router';
import { DeferComponent } from './defer/defer.component';
import { DeferedListComponent } from './defered-list/defered-list.component';
import { ActivateComponent } from './activate/activate.component';
import { ActivationformComponent } from './activationform/activationform.component';
import { SysComponent } from './activationform/sys/sys.component';
import { FeeactivationComponent } from './activationform/feeactivation/feeactivation.component';
import { DeferListComponent } from './defer-list/defer-list.component';
import { DeferedStudentListComponent } from './defered-student-list/defered-student-list.component';
import { AlumniFormComponent } from './alumni-form/alumni-form.component';


@NgModule({
  declarations: [
  
DeferListComponent,
  

  
],
  imports: [
    CommonModule,
    UnitsRoutingModule,
    RouterModule
  ],exports:[
    
  ]
})
export class UnitsModule { }
