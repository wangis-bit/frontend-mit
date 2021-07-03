import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashbaordComponent } from '../student-dashbaord.component';
import { StudentInfoComponent } from '../student-info/student-info.component';
import { StudentinformationComponent } from '../studentinformation/studentinformation.component';

const routes: Routes = [
  {path:'', component:StudentDashbaordComponent,
    children: [
      {path:'', component:StudentinformationComponent},
      {path:'student-details/:id', component:StudentInfoComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentModuleRoutingModule { }
