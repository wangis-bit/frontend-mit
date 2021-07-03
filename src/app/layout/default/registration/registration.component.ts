import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


public popoverTitle:string = 'popoverTitle';
public popoverMessage:string ='popoverDescription';
public confirmClicked:boolean =false;
public cancelClicked:boolean = false;

  Years:any[]=[
    2019, 2020,2021, 2022,2023,2024,2025,2026,2027,2028,2029,2030
  ]
 g:any;
 reg = new StudentsModel;
 otherDetails:any
 testing:any;
 cs:any;
 courses:any;
 levels:any;
 ids:any;
 tst:any;
 message:any;
 status:any;
 msg:any;

  constructor(public students:FormService, public fb:FormBuilder, private notice:NotificationService, private http:HttpClient) { }

  ngOnInit(): void {
   
    this.getCs()
    this.GetDepts();
    this.detDeptDetailInfo()
 
  }

  //Restricting number input
  validateNumber(event:any): boolean{
    let val = event.which?event.which: event.keycode;
    if(val > 31 && (val<48 || val>57)){
      return false;
    }
    return true;
 }
 //validating only letters as input
 validateLetter(event:any): boolean{
  let val = event.which?event.which: event.keycode;
  if(val > 31 && (val<48 || val>57)){
    return true;
  }
  return false;
}
  postRegDetails(){
   
    this.students.getReg(this.reg).subscribe(res=>{
      this.message = res;
      this.msg=this.message.message
      this.status =this.message.status;
      this.reg = new StudentsModel;
      this.notice.success(this.msg)
    })
   }

   getCourses(event:any){
    //  console.log(event.target.value)
    var obj={
      dept_id: event.target.value,
    }
    this.students.getDept(obj).subscribe(res=>{
        this.otherDetails = res;
        
    });
   }

   //Funsction for getting all the departments
   GetDepts(){
    this.students.getDp().subscribe(res=>{
      this.cs = res;
      // console.log(this.cs);
    })
   }
   //get courses for depts
   getCs(){
    this.students.getCourses().subscribe(res=>{
      this.courses = res;
      
    })
   }

   //Call back for course levels
   getCourseslevel(event:any){
    //  console.log(event.target.value)
    var obj={
      course_id: event.target.value,
    }
    this.students.getCourseLevel(obj).subscribe(res=>{
        this.levels = res;
        // console.log(this.levels);
        
    });
   }


   
   
   //Information for Detail and Depts table
   detDeptDetailInfo(){
    this.students.getDetailsDeptAccounts().subscribe(res=>{
      // console.log(res);
    })
   }

}
