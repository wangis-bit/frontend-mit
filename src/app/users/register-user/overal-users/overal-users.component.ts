import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { principalmodel } from 'src/app/models/principal.model';
import { registerModel } from 'src/app/models/register.model';
import { student_login } from 'src/app/models/student_login.model';
import { LoginRegistrationService } from '../../login-registration.service';
import { User } from '../../user.model';
import { RegisterUserService } from '../register-user.service';

@Component({
  selector: 'app-overal-users',
  templateUrl: './overal-users.component.html',
  styleUrls: ['./overal-users.component.css']
})
export class OveralUsersComponent implements OnInit {
  status!:number;
  course_name:any;
  pass!:string;
  princy:any
  course_id:any;
  data:any;
  msg!:string;
  deptcourse:any;
  loginData !: User
  roles!:any;
  student_users !:student_login;
  hodnames!:any[]
  users_name :any;
  users!:FormGroup;
  principal!:principalmodel;
  studentforlogin:any
  user =new  registerModel

  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['id','names','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  
  constructor(private _fb:FormBuilder, private serve:LoginRegistrationService, private route:Router, private userRoles:RegisterUserService) { }

  ngOnInit(): void {
 this.princy = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(5)]),
    names:new FormControl('', Validators.required),
    role_id:new FormControl('', Validators.required),
 })
 
    
    this.userRoles.getRoles().subscribe(res=>{
      this.roles = res;
      
    })

    this.student_users={
      role_id:'',
      id:'',
      course_level_id:''
    }

    this.loginData={
      id:'',
      name:'',
      password:'',
      email:'',
      role_id:'',
    }
    this.principal={
      names:'',
      id:'',
      role_id:''
    }

    this.userRoles.getPrincipal().subscribe(res=>{
      this.source_info = res;
      this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
      this.StudentsAccountsInfo.sort = this.sort;
    this.StudentsAccountsInfo.paginator = this.paginator;
    })

  }

  insertPrincipal(){

this.serve.principalLoginReg( this.principal).subscribe((res:any)=>{
 this.data=res;
 this.status = this.data.status;
 
 if(this.status==1){
  this.msg = res.message;
  this.userRoles.getPrincipal();
}else{
 this.msg = res.message;
}
 console.log(this.data)
  
})
  }

  applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
  }
  
 
 
}