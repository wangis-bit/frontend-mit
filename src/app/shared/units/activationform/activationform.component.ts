import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { Regnew } from 'src/app/layout/default/acounts/regnew.model';
import { StudentsModel } from 'src/app/models/accounts.model';
import { activationModel } from '../activate/activtion.model';

@Component({
  selector: 'app-activationform',
  templateUrl: './activationform.component.html',
  styleUrls: ['./activationform.component.css']
})
export class ActivationformComponent implements OnInit {
  id:any;
  id2:any;
  activate = new StudentsModel;
  AccountsData!:activationModel;
  activate2 = new StudentsModel;
  otherDetails:any
  testing:any;
  data:any;
  courses:any;
  defer:any;
  levels:any;
  msg:any;
  tst:any;
  message:any;
  status:any;
  AmountPaid:number=0;
  Semester:any[]=[
    "Jan-Apri", "May-august","Sep-Dec", "Dec Holiday","April Holiday","August Holiday"
  ]

  constructor(public students:FormService, private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {

    
    

    this.id=this.route.snapshot.params.id;
    this.id2=this.route.snapshot.params.id;
    this.SearchDeferForDetails();
    this.SearchDeferForStudents();

    
  }

  InsertActivatedStudent(){
   
    this.students.InsertActivatedStudent(this.activate).subscribe(res=>{
      this.defer = res;
      
    })
   }
   SearchDeferForDetails(){
    this.students. SearchDeferForDetails(this.id).subscribe(res=>{
      this.data=res;
      this.activate=this.data;
      console.log(this.activate)
    })
  }
  //inserting student's table from accounts 9into api
  postStudent(){
            
    this.students.insertData(this.AccountsData).subscribe(res=>{
      this.msg=res;
      this.status=this.msg.status;
      this.message=this.msg.message;
      

    
    })
  }

  SearchDeferForStudents(){
    this.students.SearchDeferForStudents(this.id2).subscribe(res=>{
      this.data=res;
      this.activate2=this.data;
      console.log(this.activate2)
    })
  }

  updateRegDetails(){
   
    this.students.updateReg(this.id,this.activate).subscribe(res=>{
      
    })
   
  }
  getData(){
    this.students.details.getRawValue();
  }

  
 computeBal(){
  this.AccountsData.NewBal = parseFloat((this.AccountsData.oldBal - this.AccountsData.AmountPaid).toFixed(2))
}

postRegDetails(){
   
  this.students.getReg(this.activate2).subscribe(res=>{
    this.message = res;
    this.msg=this.message.message
    this.status =this.message.status;
    
  })
 }


}
