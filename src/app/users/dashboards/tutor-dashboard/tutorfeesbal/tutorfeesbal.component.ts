import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/layout/default/departments/department.service';
import { RegisterUserService } from 'src/app/users/register-user/register-user.service';

@Component({
  selector: 'app-tutorfeesbal',
  templateUrl: './tutorfeesbal.component.html',
  styleUrls: ['./tutorfeesbal.component.css']
})
export class TutorfeesbalComponent implements OnInit {
  courses:any;
  user:any;
  val:any;
  info:any;
  Std:any;
  levels:any;
  studentsFees:any;
  TodayDate = new Date().getTime();
  
  StudentsAccountsInfo!: MatTableDataSource<any>
  StudentsAccountsInfo2!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['student_id','names','gender','enrolyr', 'complettionYear'] 
  columns2: string[]=['student_id','NewBal','RenewalDate','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router, public serve:DepartmentService, private registerService:RegisterUserService) { }

  ngOnInit(): void {
    this.info=this.route.snapshot.params.id;

    this.info=this.route.snapshot.params.id;
    this.registerService.getLoggedInTutorInfromation(this.info).subscribe((res:any)=>{
      this.Std=res[0];
      console.log(this.Std);
      
      
    })

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.user = res;
        
      })
  }
  User(){
    console.log('has changed');
    
  }
  getDept(){
    console.log('Value changed');
    
  }
  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/users'])
  }
  loadLevelsForCourseSelected(event:any){
   
    var obj={
      course_id: event.target.value
       
    }
    
       this.serve.loadLevelsForCourseSelected(obj).subscribe(res=>{
        this.levels = res;
        
       
    });
  }
  loadCourses(event:any){
    var obj={
      dept_id: event.target.value
       
    }
    this.serve.getCoursesinfoForDept(obj).subscribe(res=>{
      this.courses = res;
     
     
  });
    
  }

  loadStudentsPerLevel(event:any){
    var obj={
      course_level_id: event.target.value
       
    }
    this.serve.loadStudentsPerLevel(obj).subscribe(res=>{
     
      this.source_info = res;
        console.log(this.source_info);
        
        this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
        this.StudentsAccountsInfo.sort = this.sort;
      this.StudentsAccountsInfo.paginator = this.paginator;
     
     
  });
    
  }
  applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
    this.StudentsAccountsInfo2.filter = searchValue.trim().toLowerCase();
  }
  dayRem(row:any){
    let payDate = new Date().getTime()
    let expiryDate = new Date(row.RenewalDate).getTime();
    let diff = expiryDate - payDate;
    let overDue = payDate - expiryDate;
    let overdueDays = Math.floor(overDue/(1000*60*60*24))

    let daysRem = Math.floor((diff)/(1000*60*60*24)) +1;
    // let HoursRem = Math.floor( diff % (1000*60*60)/(1000*60*60*24));
    // let MinutesRem = Math.floor((diff)%(1000*60*60)/(1000*60));
    // let SecdRem = Math.floor((diff)%(1000*60)/(1000));
    // this.val = daysRem + " Days "+ HoursRem+ " Hours "+MinutesRem+" Minutes "+SecdRem+" Seconds"

    if(daysRem<0 && overdueDays ==1){
      return overdueDays;
    }else if(daysRem==1){
      return daysRem
    }
    else if(daysRem<0 && overdueDays >1){
      return overdueDays
    }
    else{
      return daysRem
    }
  }

  loadFees(event:any){
    var obj={
      student_id: event.target.value
       
    }
    this.serve.loadStudentsFees(obj).subscribe(res=>{
     
      this.studentsFees = res;
      
     console.log(this.studentsFees);
     
     this.StudentsAccountsInfo2 = new MatTableDataSource(this.studentsFees);
     this.StudentsAccountsInfo2.sort = this.sort;
   this.StudentsAccountsInfo2.paginator = this.paginator;
  });
    
  }


}


