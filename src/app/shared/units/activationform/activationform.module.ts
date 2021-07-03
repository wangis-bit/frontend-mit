import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationformRoutingModule } from './activationform-routing.module';
import { RouterModule } from '@angular/router';
import { FeeactivationComponent } from './feeactivation/feeactivation.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivationformRoutingModule,
    RouterModule,
  ], exports:[
    
  ]
})
export class ActivationformModule { }
