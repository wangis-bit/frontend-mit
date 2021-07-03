import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeereportsRoutingModule } from './feereports-routing.module';
import { FeereportsComponent } from './feereports.component';


@NgModule({
  declarations: [FeereportsComponent],
  imports: [
    CommonModule,
    FeereportsRoutingModule
  ]
})
export class FeereportsModule { }
