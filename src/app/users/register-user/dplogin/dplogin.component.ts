import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { principalmodel } from 'src/app/models/principal.model';
import { registerModel } from 'src/app/models/register.model';
import { LoginRegistrationService } from '../../login-registration.service';
import { User } from '../../user.model';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-dplogin',
  templateUrl: './dplogin.component.html',
  styleUrls: ['./dplogin.component.css']
})
export class DploginComponent implements OnInit {
  status!:number;
  course_name:any;
  pass!:string;
  course_id:any;
  data:any;
  msge!:string;
  deptcourse:any;
  loginData !: User
  roles!:any;
  Deputy_prinipal:any;
  hodnames!:any[]
  users_name :any;
  users!:FormGroup;
  Deputy_principal_model!:principalmodel;
  studentforlogin:any
  user =new  registerModel


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['id','names','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  
  constructor(private _fb:FormBuilder, private serve:LoginRegistrationService, private route:Router, private userRoles:RegisterUserService) { }

  ngOnInit(): void {
 
 
    this.Deputy_prinipal= new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(5)]),
      names:new FormControl('', Validators.required),
      role_id:new FormControl('', Validators.required),
   })
    
    this.userRoles.getRoles().subscribe(res=>{
      this.roles = res;
      
    })


    this.loginData={
      id:'',
      name:'',
      password:'',
      email:'',
      role_id:'',
    }
    this.Deputy_principal_model={
      names:'',
      id:'',
      role_id:''
    }

    this.userRoles.getDP().subscribe(res=>{
      this.source_info = res;
      this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
      this.StudentsAccountsInfo.sort = this.sort;
    this.StudentsAccountsInfo.paginator = this.paginator;
    })

  }

  insertDeputyPrincipal(){

this.serve.DpLoginReg( this.Deputy_principal_model).subscribe((res:any)=>{
 this.data=res;
 this.status = this.data.status;
 
 if(this.status==1){
  this.msge = res.message;
  this.userRoles.getDP();
}else{
 this.msge = res.message;
}
 console.log(this.data)
  
})
  }


  
  applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
  } 
 
}