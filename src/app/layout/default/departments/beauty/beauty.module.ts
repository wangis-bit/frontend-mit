import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeautyRoutingModule } from './beauty-routing.module';
import { BeautyComponent } from './beauty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BeautyRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class BeautyModule { }
