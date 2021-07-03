import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';
import * as $ from 'jquery'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  mssg:any;
  myForm!:FormGroup;
  yr = new Date();
  SelectVal:any;
  AccountsArr:any;
  id:any;
  acm = new StudentsModel;
  fee = new StudentsModel;
  updateBal = new StudentsModel;
  try:any;
  val:any;
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
  
  constructor(public serve:FormService,
     private route: ActivatedRoute, private http:HttpClient) {}

  

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
  
//For searchning and update
this.id=this.route.snapshot.params.id;

 
// $('.calc').on('input', function(){
//   $('#bal, #feePaid').keyup(function(){
//     var bal=0;
//     var n1 = Number($('#bal').val());
//     var n2 = Number($('#feePaid').val());
//     var bal = n1-n2;
//     $('#latestBal').val(bal)
//   })
// })
//  //initialized functions
    this.getStudent();
    this. getStudent2();
    
  };

//Getting data from the accounts api
getStudent(){
   this.serve.SearchData(this.id).subscribe(res=>{
      this.AccountsArr=res;
      this.acm=this.AccountsArr; 
      // console.log(this.acm)
       })
  }
  updateData(){
   
    this.serve.updateData(this.id,this.acm).subscribe(res=>{
      // console.log(res)
      
    })}


    getStudent2(){
      this.serve.SearchData2(this.id).subscribe(res=>{
         this.val=res;
         this.fee=this.val; 
        //  console.log(this.fee)
          })
     }
     
     updateData2(){
      
       this.serve.updateData2(this.id,this.fee).subscribe(res=>{
        this.mssg = res;
        console.log(this.mssg)
        this.message=this.mssg.message;
        this.status = this.mssg.status;
       })}

}
 

