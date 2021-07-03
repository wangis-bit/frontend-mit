import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { IctComponent } from './ict/ict.component';
import { FashionComponent } from './fashion/fashion.component';
import { SocialComponent } from './social/social.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { BeautyComponent } from './beauty/beauty.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { BusinessComponent } from './business/business.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BeautyModule } from './beauty/beauty.module';
import { HospitalityComponent } from './hospitality/hospitality.component';


@NgModule({
  declarations: [
    IctComponent,
    FashionComponent,
    SocialComponent,
    EngineeringComponent,
    BeautyComponent,
    NutritionComponent,
    BusinessComponent, 
    HospitalityComponent
  ],
  exports: [
    IctComponent,
    FashionComponent,
    SocialComponent,
    EngineeringComponent,
    BeautyComponent,
    NutritionComponent,
    BusinessComponent,
    HospitalityComponent

  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, 
    MatGridListModule,
    MatTableModule, 
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    NgbModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    BeautyModule
  
  ]
})
export class DepartmentsModule { }
