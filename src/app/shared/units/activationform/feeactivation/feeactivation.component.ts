import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/layout/default/acounts/account.service';
import { Regnew } from 'src/app/layout/default/acounts/regnew.model';
import { StudentsModel } from 'src/app/models/accounts.model';

@Component({
  selector: 'app-feeactivation',
  templateUrl: './feeactivation.component.html',
  styleUrls: ['./feeactivation.component.css']
})
export class FeeactivationComponent implements OnInit {
  mssg:any;
  myForm!:FormGroup;
  yr = new Date();
  SelectVal:any;
  AccountsArr:any;
  id:any;
  acm = new StudentsModel;
  fee = new StudentsModel;
  updateBal = new StudentsModel;
  AccountsData!:Regnew;
  try:any;
  msg:any;
  nm:any;
  message:any;
  status:any;
  otherDetails:any;

  Semester:any[]=[
    {sem:"Jan-Apri"}, {sem:"May-august"},{sem:"Sep-Dec"},{sem: "Dec Holiday"},{sem:"April Holiday"},{sem:"August Holiday"}
  ]

    //Contructor starts here
  
  constructor(public serve:AccountService, private http:HttpClient,
     private route: ActivatedRoute) {}

  

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
      this.http.post('http://127.0.0.1:8000/getregDetails',  {headers:headers}).subscribe(res=>{
        
      });
      this.http.get('http://127.0.0.1:8000/api/searchactive/'+this.id,  {headers:headers}).subscribe(res=>{
        this.AccountsArr=res;
        this.acm=this.AccountsArr; 
        
      });
      this.http.post('http://127.0.0.1:8000/api/FeeActivationInsert',  {headers:headers}).subscribe(res=>{
         this.msg=res;
          this.status=this.msg.status;
        this.message=this.msg.message;
      
        this.AccountsData = new Regnew
        
      });
//For searchning and update
this.id=this.route.snapshot.params.id;

 
this.AccountsData={
  student_id:0,
  oldBal:0,
  RenewalDate:'',
  session:'',
  AdmNumber:0,
  course_level_id:0,
  AmountPaid:0,
  NewBal:0,
  pdate:''
}

//  //initialized functions
    // this.getStudent();
    
    
  };
  computeBal(){
    this.AccountsData.NewBal = parseFloat((this.AccountsData.oldBal - this.AccountsData.AmountPaid).toFixed(2))
  }

//Getting data from the accounts api
getStudent(){
   this.serve.SearchActive(this.id).subscribe(res=>{
      this.AccountsArr=res;
      this.acm=this.AccountsArr; 
      // console.log(this.acm)
       })
  }
  printForm(){
    this.AccountsData
    console.log(this.AccountsData)
  }
  postStudent(){
            
    this.serve.insertData(this.AccountsData).subscribe(res=>{
      this.msg=res;
      this.status=this.msg.status;
      this.message=this.msg.message;
     
      this.AccountsData = new Regnew

    
    })
  }

 
}
 


