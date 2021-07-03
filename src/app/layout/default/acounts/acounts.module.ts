import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcountsRoutingModule } from './acounts-routing.module';
import { RegnewComponent } from './regnew/regnew.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/materials/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedStudentsComponent } from './activated-students/activated-students.component';
import { ActivateFeeComponent } from './activate-fee/activate-fee.component';


@NgModule({
  declarations: [],
  entryComponents:[RegnewComponent, ActivateFeeComponent],
  imports: [
    CommonModule,
    AcountsRoutingModule, 
    RouterModule,
    ReactiveFormsModule
  ], exports:[
    
   
  ]
})
export class AcountsModule { }
