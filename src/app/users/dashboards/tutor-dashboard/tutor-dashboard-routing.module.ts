import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorDashboardComponent } from './tutor-dashboard.component';
import { TutorfeesbalComponent } from './tutorfeesbal/tutorfeesbal.component';
import { TutorhomeComponent } from './tutorhome/tutorhome.component';

const routes: Routes = [
  {path:'', component:TutorDashboardComponent,
        children:[
          {path:'',component:TutorhomeComponent},
          {path:'feesfortutors/:id', component:TutorfeesbalComponent},
        ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorDashboardRoutingModule { }
