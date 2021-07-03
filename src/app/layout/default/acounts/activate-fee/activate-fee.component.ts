import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';
import { AccountService } from '../account.service';
import { Regnew } from '../regnew.model';


@Component({
  selector: 'app-activate-fee',
  templateUrl: './activate-fee.component.html',
  styleUrls: ['./activate-fee.component.css']
})
export class ActivateFeeComponent implements OnInit {
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
  Years:any[]=[
    2019, 2020,2021, 2022,2023,2024,2025,2026,2027,2028,2029,2030
  ]
 


  
    //Contructor starts here
  
  constructor(public serve:AccountService,
     private route: ActivatedRoute, 
     private http:HttpClient) {}

  

  ngOnInit(): void {


      

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
    this.getStudent();
    
    
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
 

