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
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  status!:number;
  course_name:any;
  pass!:string;
  course_id:any;
  data:any;
  ms!:string;
  deptcourse:any;
  loginData !: User
  roles!:any;
director:any
  hodnames!:any[]
  users_name :any;
  users!:FormGroup;
  directorModel!:principalmodel;
  studentforlogin:any
  user =new  registerModel


  
  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['id','names','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;

  
  constructor(private _fb:FormBuilder, private serve:LoginRegistrationService, private route:Router, private userRoles:RegisterUserService) { }

  ngOnInit(): void {
 
    this.director = new FormGroup({
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
    this.directorModel={
      names:'',
      id:'',
      role_id:''
    }

    this.userRoles.getDirector().subscribe(res=>{
      this.source_info = res;
      this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
      this.StudentsAccountsInfo.sort = this.sort;
    this.StudentsAccountsInfo.paginator = this.paginator;
    })

  }

  insertDirector(){

this.serve.DirectorLoginReg( this.directorModel).subscribe((res:any)=>{
 this.data=res;
 this.status = this.data.status;
 
 if(this.status==1){
  this.ms = res.message;
  this.userRoles.getDirector();
}else{
 this.ms = res.message;
}
 console.log(this.data)
  
})
  }


  //For Appplying filter 
  applySearch(event:any){
    const searchValue = (event.target as HTMLInputElement).value;
    this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
  }  
 
 
}