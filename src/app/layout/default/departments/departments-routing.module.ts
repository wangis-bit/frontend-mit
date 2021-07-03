import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { BeautyComponent }from './beauty/beauty.component';
import { BusinessComponent } from './business/business.component';
import { DepartmentsComponent } from './departments.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { FashionComponent } from './fashion/fashion.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { IctComponent } from './ict/ict.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SocialComponent } from './social/social.component';


const routes: Routes = [
  {path:'', component:DepartmentsComponent,
  
children: [
  {path:'beauty', component:BeautyComponent , canActivate:[AuthGuard],},
  {path:'ict', component:IctComponent, canActivate:[AuthGuard],},
  {path:'fashion', component:FashionComponent, canActivate:[AuthGuard],},
  {path:'engineering',component:EngineeringComponent, canActivate:[AuthGuard],},
  {path:'social', component:SocialComponent, canActivate:[AuthGuard],},
  {path:'business', component:BusinessComponent, canActivate:[AuthGuard],},
  {path:'nutrition', component:NutritionComponent, canActivate:[AuthGuard],},
  {path:'hospitality', component:HospitalityComponent, canActivate:[AuthGuard],},
]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
