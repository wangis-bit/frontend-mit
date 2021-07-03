import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IctRoutingModule } from './ict-routing.module';
import { IctComponent } from './ict.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IctComponent],
  imports: [
    CommonModule,
    IctRoutingModule,
    RouterModule,
  ],
  exports:[
    IctComponent
  ]
})
export class IctModule { }
