import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentsModel } from 'src/app/models/accounts.model';
import { AdmService } from 'src/app/adm.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegnewComponent } from './regnew/regnew.component';
import {MatTableDataSource} from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import * as $ from 'jquery'
import { AccountService } from './account.service';
interface idata{
  student_id?:number;
  AmtPd?:number;
  pdate?: string;
  Bal?:number;
  RenewalDate?:string;
  session?:string;
  yrstudy?:string;
}

@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css'],
  providers:[AdmService]
})
export class AcountsComponent implements OnInit {
  public isCollapsed = true;

  @Input()
  public expanded: boolean=false;

  @Output()
  public expandedChange: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.next(this.expanded);
  }
   


  Semester:any[]=[
    "Jan-Apri", "May-august","Sep-Dec", "Dec Holiday","April Holiday","August Holiday"
  ]
  Years:any[]=[
    2019, 2020,2021, 2022,2023,2024,2025,2026,2027,2028,2029,2030
  ]


  
  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['student_id','names','enrolyr','level','session', 'NewBal','RenewalDate', 'pdate', 'operations'] 
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
  
  constructor(public serve:AccountService, 
     private dialog:MatDialog,
     private route: ActivatedRoute,
     private http:HttpClient) {
    
}

  

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    
     
//For searchning and update
this.id=this.route.snapshot.params.student_id;
console.log(this.route.snapshot.params.student_id);
 

 //For Fetching Accounts Details into Accounts Table
 this.serve.getDetails().subscribe(res=>{
   this.source_info = res;
   this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
   this.StudentsAccountsInfo.sort = this.sort;
 this.StudentsAccountsInfo.paginator = this.paginator;
 })


    
    this.getAllDetails();
    this.deptDetail();
  };
   
//Caluclating Yea of Study

calcYear1(row:any){
  let CurrentYear = new Date().getTime();
  let YearOfCompletion = new Date(row.complettionYear).getTime();
  let yearOfStudy =  YearOfCompletion-CurrentYear ;

 
  let RemDuration = Math.floor(yearOfStudy /(1000*60*60*24))+1;
  
  let months = Math.floor(RemDuration/30);
  let RemDays = RemDuration%30;
  let yearsRem = Math.floor(months/12);

  let monthsthatrem = months%12;
  // console.log(monthsthatrem)

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


  //Caluclating Yea of Study

  calcYear(row:any){
    let CurrentYear = new Date().getTime();
    let YearEnrolled = new Date(row.enrolyr).getTime();
    let endyr = new Date(row.complettionYear).getTime();
    let yearOfStudy = CurrentYear - CurrentYear;
    // console.log(YearEnrolled);
    let period = CurrentYear -YearEnrolled;
    // console.log(period);
    let DaysOfStay = Math.floor(period/(1000*3600*24))
    // console.log(DaysOfStay)
    let MonthsOfStay=Math.floor(DaysOfStay/30);
    // console.log(MonthsOfStay)
    let remDaysAfterMonth = DaysOfStay%30;
    // console.log(remDaysAfterMonth)
    let YearOfStay = Math.floor(MonthsOfStay/12);
    // console.log(YearOfStay)
    let RemMonthAfterYear = MonthsOfStay%12;
    // console.log(RemMonthAfterYear)
    if(DaysOfStay > 1 && DaysOfStay <30 ){
      return "Enrolled "+DaysOfStay+ " days ago"

    }else if(DaysOfStay ==1 && DaysOfStay <30 ){
      return "Enrolled "+DaysOfStay+ " day ago"
    }
    else if(DaysOfStay <=360 && DaysOfStay >30 && MonthsOfStay ==1 && remDaysAfterMonth ==0  ){
      return "Enrolled "+MonthsOfStay+ " Month ago"
    }
    else if(DaysOfStay <=360 && DaysOfStay >30 && MonthsOfStay >1 && remDaysAfterMonth ==0 ){
      return "Enrolled "+MonthsOfStay+ " Months ago"
    }
    else if(DaysOfStay <=360 && DaysOfStay >30 && MonthsOfStay ==1 && remDaysAfterMonth ==1 ){
      return "Enrolled "+MonthsOfStay+ " Month " + remDaysAfterMonth+ " day ago"
    }
    else if(DaysOfStay <=360 && DaysOfStay >30 && MonthsOfStay ==1 && remDaysAfterMonth >1){
      return "Enrolled "+MonthsOfStay+ " Month " + remDaysAfterMonth+ " days ago"
    }
    else if(DaysOfStay <=360 && DaysOfStay >30 && MonthsOfStay >1 && remDaysAfterMonth ==1  ){
      return "Enrolled "+MonthsOfStay+ " Months " + remDaysAfterMonth+ " day ago"
    }
    else if(DaysOfStay <=360 && DaysOfStay >30 && MonthsOfStay >1 && remDaysAfterMonth >1 ){
      return "Enrolled "+MonthsOfStay+ " Months " + remDaysAfterMonth+ " days ago"
    }

    
    else if(DaysOfStay >360 && RemMonthAfterYear >1 && YearOfStay==1 ){
      return "Enrolled "+YearOfStay+ " Year " + RemMonthAfterYear+ " Months ago"
    }

     
    else if(DaysOfStay >360 && RemMonthAfterYear >1 && YearOfStay>1 ){
      return "Enrolled "+YearOfStay+ " Years " + RemMonthAfterYear+ " Months ago"
    }

    else if(DaysOfStay >360 && RemMonthAfterYear ==1 && YearOfStay>1 ){
      return "Enrolled "+YearOfStay+ " Year " + RemMonthAfterYear+ " Months ago"
    }

    else if(DaysOfStay >360 && RemMonthAfterYear ==1 && YearOfStay==1 ){
      return "Enrolled "+YearOfStay+ " Year " + RemMonthAfterYear+ " Month ago"
    }

    else{
      return "Year undefined"
    }
  }

  //Calculating Remining Days 
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

  //Setting default valu of pay date
  todayDate(row:any){
    let todayDate = new Date(row.pdate).getTime();
    

  }
  //functions starts here
  openReg(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width="60%";
    this.dialog.open(RegnewComponent, dialogconfig)
  }

  //Opens dialog for Fee Receiving payment
  openUpdate(){
    this.dialog.open( UpdateComponent, {
      width:'1000px'
    
    })
  }

          //inserting student's table from accounts 9into api
            postStudent(){
            
                this.serve.insertData(this.acm).subscribe(res=>{
                  // console.log(res);
                
                })
              }


          displayFn(sub:any){
            return sub?sub.AdmNo: undefined;
          }
          displayFn2(sub:any){
            return sub?sub.names: undefined;
          }


          //Retrieves details from student and details tables
          getAllDetails(){
            this.serve.getDetails().subscribe(res=>{
              this.alldetails = res;
              // console.log(this.alldetails);
            })
          }


          getOthers(event:any){
            var obj={
              student_id: event.target.value,
            }
            this.serve.GetAccountInfo(obj).subscribe(res=>{
                this.otherDetails = res;
                // console.log(this.otherDetails)
            });
          }


getNames(event:any){
  var obj={
    AdmNumber: event.target.value,
  }
  this.serve.getNamesForAccount(obj).subscribe(res=>{
      this.studentnames = res;
      // console.log(this.studentnames)
     
  });
}

//For Appplying filter 
applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}

//For Updating
updateData(){
   
  this.serve.updateAccounts(this.id,this.acm).subscribe(res=>{
    
  })}
  deptDetail(){
    this.serve.DeptDetails().subscribe(res=>{
      // console.log(res);
    })
  }


}
 

