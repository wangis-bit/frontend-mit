import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeerevenueRoutingModule } from './feerevenue-routing.module';
import { FeerevenueComponent } from './feerevenue.component';


@NgModule({
  declarations: [FeerevenueComponent],
  imports: [
    CommonModule,
    FeerevenueRoutingModule
  ]
})
export class FeerevenueModule { }
