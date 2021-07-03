import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';

import { UpdateComponent } from 'src/app/layout/default/acounts/update/update.component';
import { StudentsModel } from 'src/app/models/accounts.model';

@Component({
  selector: 'app-clear-students',
  templateUrl: './clear-students.component.html',
  styleUrls: ['./clear-students.component.css']
})
export class ClearStudentsComponent implements OnInit {


  
  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','gender','NewBal','course_level','complettionYear', 'operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  
 //Type Declaration section
  myForm!:FormGroup;
  yr = new Date();
  SelectVal:any;
  AccountsArr:any;
  id:any;
  acm = new StudentsModel;
  try:any;
  val:any;
  nm:any;
  yer:any;
  otherDetails:any;
  studentnames :any;
  alldetails:any;
 


  
    //Contructor starts here
  
  constructor(public serve:FormService,
    private http:HttpClient, 
     private dialog:MatDialog,
     private route: ActivatedRoute) {
    
}

  

  ngOnInit(): void {
//For searchning and update
this.id=this.route.snapshot.params.student_id;

 
const headers = new HttpHeaders({
  'Authorization':`Bearer ${localStorage.getItem('token')}`
});
this.http.get('http://127.0.0.1:8000/api/listOfAumni',  {headers:headers}).subscribe(res=>{
  this.source_info = res;
   this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
   this.StudentsAccountsInfo.sort = this.sort;
   this.StudentsAccountsInfo.paginator = this.paginator;
    
})




    // this.getAllDetails();
    
    
    
  };
   
  //Caluclating Yea of Study

  calcYear(row:any){
    let CurrentYear = new Date().getTime();
    let YearOfCompletion = new Date(row.complettionYear).getTime();
    let yearOfStudy =  YearOfCompletion-CurrentYear ;
   
    let RemDuration = Math.floor(yearOfStudy /(1000*60*60*24))+1;
    
    let months = Math.floor(RemDuration/30);
    let RemDays = RemDuration%30;
    let yearsRem = Math.floor(months/12);

    let monthsthatrem = months%12;
    

    if(yearsRem>1  && monthsthatrem > 1 &&  RemDays > 1){
      
      return yearsRem + " yrs " + monthsthatrem + " Months " + RemDays + " Days";
    }
    
    else if(yearsRem == 1 && monthsthatrem > 1 &&  RemDays > 1 ){
      return yearsRem + " yr " + monthsthatrem + " Months " + RemDays + " Days";
    }

    else if(yearsRem == 1 && monthsthatrem == 1 &&  RemDays > 1 ){
      return yearsRem + " yr " + monthsthatrem + " Month " + RemDays + " Days";
    }
    else if(yearsRem == 1 && monthsthatrem == 1 &&  RemDays == 1 ){
      return yearsRem + " yr " + monthsthatrem + " Month " + RemDays + " Day";
    }

    else if(yearsRem == 1 && monthsthatrem == 0 &&  RemDays == 0 ){
      return yearsRem + " yr ";
    }

    else if(yearsRem >  1 && monthsthatrem == 1 &&  RemDays > 1 ){
      return yearsRem + " yrs " + monthsthatrem + " Month " + RemDays + " Days";
    }

  
    else if(yearsRem >  1 && monthsthatrem == 1 &&  RemDays == 1 ){
      return yearsRem + " yrs " + monthsthatrem + " Month " + RemDays + " Day";
    }
    
    
    else if(yearsRem == 0 && monthsthatrem > 1 &&  RemDays > 1){
      return monthsthatrem + " Months " + RemDays + " Days";
    }

    else if(yearsRem == 0 && monthsthatrem == 1 &&  RemDays == 0){
      return monthsthatrem + " Month ";
    }
    else if(yearsRem == 0 && monthsthatrem > 1 &&  RemDays == 0){
      return monthsthatrem + " Months ";
    }
    else if(yearsRem == 0 && monthsthatrem == 1 &&  RemDays ==1){
      return monthsthatrem + " Month " + RemDays + " Day "
    }
    else if(yearsRem == 0 && monthsthatrem == 1 &&  RemDays >1){
      return monthsthatrem + " Month " + RemDays + " Days "
    }

     
    else if(yearsRem == 0 && monthsthatrem == 1 &&  RemDays > 1){
      return monthsthatrem + " Month " + RemDays + " Days";
    }

     
    else if(yearsRem == 0 && monthsthatrem > 1 &&  RemDays == 1){
      return monthsthatrem + " Months " + RemDays + " Day";
    }
     
    else if(yearsRem == 0 && monthsthatrem > 1 &&  RemDays > 1){
      return monthsthatrem + " Months " + RemDays + " Days";
    }
    
    else if (monthsthatrem == 1 &&  yearsRem == 0  &&  RemDays > 1){
        return monthsthatrem + " Month " + RemDays + " Days";
    }
    else if (monthsthatrem == 0&& RemDays>1 &&   yearsRem == 0 ){
      return RemDays + " Days ";
  }
    
  else if (monthsthatrem == 0 && RemDays == 1 &&   yearsRem == 0){
    return RemDays + " Day";
}
      else{
      return "Student completed course";
    }

  }

  //Calculating Remining Days 
  calCulateDays(row:any){
    let payDate = new Date().getTime()
    let expiryDate = new Date(row.RenewalDate).getTime();
    let diff = expiryDate - payDate;
    

    let daysRem = Math.floor((diff)/(1000*60*60*24)) +1;
    // let HoursRem = Math.floor( diff % (1000*60*60)/(1000*60*60*24));
    // let MinutesRem = Math.floor((diff)%(1000*60*60)/(1000*60));
    // let SecdRem = Math.floor((diff)%(1000*60)/(1000));
    // this.val = daysRem + " Days "+ HoursRem+ " Hours "+MinutesRem+" Minutes "+SecdRem+" Seconds"

    if(daysRem<0){
      return "Class Attendance expired";
    }else if(daysRem==1){
      return daysRem+" Day Remaining"
    }else{
      return daysRem + " Days Remaining";
    }
  }

  //Setting default valu of pay date
  todayDate(row:any){
    let todayDate = new Date(row.pdate).getTime();
    

  }
  

  //Opens dialog for Fee Receiving payment
  openUpdate(){
    this.dialog.open( UpdateComponent, {
      width:'1000px'
    
    })
  }

          

       


//For Appplying filter 
applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}

//Deleting Cleared Student
ClearStudent(AdmNumber:number){
  this.serve.delReg(AdmNumber).subscribe(res=>{
       
       
        })
    }

      //Deltes Accounts
      delAccounts(id:number){
        this.serve.delteAccount(id).subscribe(res=>{
          
             
              })
          }

}
 


