import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { AccountService } from 'src/app/layout/default/acounts/account.service';
import { Regnew } from 'src/app/layout/default/acounts/regnew.model';
import { StudentsModel } from 'src/app/models/accounts.model';
import { Alumni } from '../alumni.model';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-alumni-form',
  templateUrl: './alumni-form.component.html',
  styleUrls: ['./alumni-form.component.css']
})
export class AlumniFormComponent implements OnInit {
  mssg:any;
  myForm!:FormGroup;
  yr = new Date();
  details:any;
  AccountsArr:any;
  id:any;
  acm = new Alumni;
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
  
  constructor(public serve:AlumniService, public serv:FormService,
     private route: ActivatedRoute,private frm:FormBuilder) {}

  

  ngOnInit(): void {
//For searchning and update
this.id=this.route.snapshot.params.id;

//  //initialized functions
    this.getAlum();
    
    
  };
  computeBal(){
    this.AccountsData.NewBal = parseFloat((this.AccountsData.oldBal - this.AccountsData.AmountPaid).toFixed(2))
  }

//Getting data from the accounts api
getAlum(){
   this.serve.SearchAlumni(this.id).subscribe(res=>{
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
  becomeAlumni(){
    this.serve.PostAlumniStudent(this.acm).subscribe(res=>{
      // this.msg=res;
      // this.status=this.msg.status;
      // this.message=this.msg.message;
     
      // this.AccountsData = new Regnew

    
    })
  }

  prinfFormValue(){
    console.log(this.serve.details.getRawValue());
  }

  //Deleting Cleared Student
ClearStudent(AdmNumber:number){
  this.serv.delReg(AdmNumber).subscribe(res=>{
       
        })
    }

      //Deltes Accounts
      delAccounts(id:number){
        this.serv.delteAccount(id).subscribe(res=>{
          
              })
          }

 
}