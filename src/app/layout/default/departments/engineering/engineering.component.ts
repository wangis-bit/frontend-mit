import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { StudentsModel } from 'src/app/models/accounts.model';
import { UpdateComponent } from '../../acounts/update/update.component';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {
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
  columns: string[]=['student_id','session', 'Bal','RenewalDate','pdate', 'operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  
 //Type Declaration section
  myForm!:FormGroup;
  yr = new Date();
  allDepartments:any;
  AccountsArr:any;
  id:any;
  acm = new StudentsModel;
  courses:any;
  val:any;
  levels:any;
  yer:any;
  otherDetails:any;
  alDetails:any;
  otherDetails1:any;
  studentInfo:any;
 


  
    //Contructor starts here
  
  constructor(public serve:DepartmentService, 
    private _fb:FormBuilder,
     private http:HttpClient, 
    
     private dialog:MatDialog,
     private route: ActivatedRoute) {
    
}

  

  ngOnInit(): void {

//For searchning and update
this.id=this.route.snapshot.params.student_id;
console.log(this.route.snapshot.params.student_id);
 

 //For Fetching Accounts Details into Accounts Table
//  this.serve.getDepartments().subscribe(res=>{
//    this.source_info = res;
//    this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
//    this.StudentsAccountsInfo.sort = this.sort;
//  this.StudentsAccountsInfo.paginator = this.paginator;
//  })

 //initialized functions
 

//  $('.calc').on('input', function(){
//    $('#num1, #num2').keyup(function(){
//      var bal=0;
//      var n1 = Number($('#num1').val());
//      var n2 = Number($('#num2').val());
//      var bal = n1-n2;
//      $('#num3').val(bal)
//    })
//  })
    
    this.getAllDetails();
    // this.getcourselevels();
    this.getCourses();
    this.getAllDepartments();
    
    
  };
   
  //Caluclating Yea of Study

  calcYear(row:any){
    let CurrentYear = row.currentyear;
    let YearEnrolled = row.enrolyr;
    let yearOfStudy = CurrentYear - YearEnrolled;
    if(yearOfStudy<=1){
      return "Year 1"
    }else{
      return "Year " +yearOfStudy;
    }

  }

  //Calculating Remining Days 
  calCulateDays(row:any){
    let payDate = new Date().getTime()
    let expiryDate = new Date(row.RenewalDate).getTime();
    let diff = expiryDate - payDate;

    // console.log(diff)

    let daysRem = Math.floor((diff)/(1000*60*60*24)) +1;
    // let HoursRem = Math.floor( diff % (1000*60*60)/(1000*60*60*24));
    // let MinutesRem = Math.floor((diff)%(1000*60*60)/(1000*60));
    // let SecdRem = Math.floor((diff)%(1000*60)/(1000));
    // this.val = daysRem + " Days "+ HoursRem+ " Hours "+MinutesRem+" Minutes "+SecdRem+" Seconds"
    let daysAgo = payDate- expiryDate;
    let days = Math.floor(daysAgo/(1000*3600*24));
    let bal = row.Bal;
    let monthsrem =Math.floor(daysRem/30)
    let dayInClass=daysRem%30
    let mths = Math.floor(days/30);
        let d = days%30;
    console.log(days)
    if(days==0 && daysRem==0){
      return "Payment of KES. " + bal +" is due Today"
    }else if(daysRem<0  && days> 1 && days <= 30){
      return  'Ended '+days + " Days ago";
    }else if((daysRem<0 && days>30  &&  mths==1 && d==0)){
      return 'Ended '+mths+ " Month ago"
    }
    else if((daysRem<0 && days>30  &&  mths>1 && d==0)){
      return 'Ended '+mths+ " Months ago"
    }
    else if(daysRem<0 && days>30  &&  mths==1 && d==1){
      return 'Ended '+mths+ " Months "+d+' Day ago'
    }else if(daysRem<0 &&  days>30  &&  mths>1 && d>1){
      return 'Ended '+mths + ' Months '+d+ ' Days ago'
    }else if(daysRem==1 && days <0){
      return daysRem+" Day Remaining"
    }else if (daysRem>30 && monthsrem==1 && dayInClass==0){
      return monthsrem + " month reamining" 
    }
    else if (daysRem>30 && monthsrem>1 && dayInClass==0){
      return monthsrem + " months reamining" 
    }
    else if (dayInClass==1){
      return dayInClass + " day reamining" 
    }
    else if (dayInClass>1 && dayInClass <=30){
      return dayInClass + " days reamining" 
    }
    else if (daysRem>30 && monthsrem>1 && dayInClass>1){
      return monthsrem + " months reamining "+ dayInClass+" days remaining" 
    }
    else if (daysRem>30 && monthsrem>1 && dayInClass==1){
      return monthsrem + " months reamining "+ dayInClass+" day remaining" 
    }  
    else{
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

  

          displayFn(sub:any){
            return sub?sub.AdmNo: undefined;
          }
          displayFn2(sub:any){
            return sub?sub.names: undefined;
          }


          //Retrieves details from student and details tables
          getAllDetails(){
            this.serve.getDetails().subscribe(res=>{
              this.alDetails = res;
              // console.log(this.alDetails);
            })
          }
          getCourse(event:any){
            var obj={
              dept_id: event.target.value,
            }
            this.serve.getOthers(obj).subscribe(res=>{
                this.otherDetails = res;
                console.log(this.otherDetails)
            });
          }


getCourseLevels(event:any){
  var obj={
    course_id: event.target.value,
  }
  this.serve.getLevelsCourses(obj).subscribe(res=>{
      this.otherDetails1 = res;
      // console.log(this.otherDetails)
     
  });
}

//For Appplying filter 
applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}

//Get Departments
getAllDepartments(){
  this.serve.getDepartments().subscribe(res=>{
    this.allDepartments = res;
    // console.log(this.nm);
  })
}

//Get Courses
getCourses(){
  this.serve.getCourse().subscribe(res=>{
    this.courses = res;
    // console.log(this.courses);
  })
}

//Get level of courses
//Retrieves details from student and details tables
// getcourselevels(){
//   this.serve.getlevel().subscribe(res=>{
//     this.levels = res;
//     // console.log(this.nm);
//   })
// }


getStudents(event:any){
  var obj={
    course_level_id: event.target.value,
  }
  this.serve.getStudentAtCourseLevel(obj).subscribe(res=>{
      // this.studentInfo = res;
      
      this.source_info = res;
      this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
      this.StudentsAccountsInfo.sort = this.sort;
    this.StudentsAccountsInfo.paginator = this.paginator;

    console.log(this.source_info)
  });
}
}
 

