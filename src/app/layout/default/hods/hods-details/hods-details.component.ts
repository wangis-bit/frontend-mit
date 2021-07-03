import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { DepartmentService } from '../../departments/department.service';

@Component({
  selector: 'app-hods-details',
  templateUrl: './hods-details.component.html',
  styleUrls: ['./hods-details.component.css']
})
export class HodsDetailsComponent implements OnInit {
  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['student_id','names','gender','RenewalDate','NewBal','enrolyr', 'complettionYear','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  @Input()
  deptview:any;
  role_id:any
  arr:any;
  Name:any;
  DepartmentCourses:any;
  DepartmentCourseLevels:any;
today=new Date().getTime()
  constructor(private route:ActivatedRoute, private views:FormService, private http:HttpClient, private rolesofHods:DepartmentService) { }

  ngOnInit(): void {
    this.role_id=this.route.snapshot.params.id;
    
    this.views.SearchviewforUser(this.role_id).subscribe(res=>{
    this.deptview = res;
    this.arr = this.deptview[0];
    this.Name = this.arr.name;
    console.log(this.Name);
    
      
    })

 

  }

   //For Appplying filter
  applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
  }
  

  getDepartmentCourses(event:any){
    var obj={
      dept_id: event.target.value
       
    }
       this.rolesofHods.getCoursesofDepratments(obj).subscribe(res=>{
        this.DepartmentCourses = res;
      
       
    });
    
  }
  getLevelsOfCourses(event:any){
    var obj={
      course_id: event.target.value
       
    }
    this.rolesofHods.getCourselevels(obj).subscribe(res=>{
      this.DepartmentCourseLevels = res;
      console.log(this.DepartmentCourseLevels)
     
  });
  }
  getStudents(event:any){
    var obj={
      course_level_id: event.target.value,
    }
    this.rolesofHods.gettudentAtEachLevel(obj).subscribe(res=>{
        // this.studentInfo = res;
        
        this.source_info = res;
        
        this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
        this.StudentsAccountsInfo.sort = this.sort;
      this.StudentsAccountsInfo.paginator = this.paginator;
  
      console.log(this.source_info)
    });
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
}
