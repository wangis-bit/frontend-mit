import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import { RegisterUserService } from 'src/app/users/register-user/register-user.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  info:any;
  Std:any;
  constructor(private registerService:RegisterUserService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.info=this.route.snapshot.params.id;
     this.registerService.getLoggedInStudentInfromation(this.info).subscribe((res:any)=>{
       this.Std=res[0];
       console.log(this.Std);
       
       
     })
   
  }

}
