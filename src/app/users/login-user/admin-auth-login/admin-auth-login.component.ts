import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { LoginModel } from 'src/app/y.model';

@Component({
  selector: 'app-admin-auth-login',
  templateUrl: './admin-auth-login.component.html',
  styleUrls: ['./admin-auth-login.component.css']
})
export class AdminAuthLoginComponent implements OnInit {
  isLoginError:boolean = false;
  users!:FormGroup;
  user = new LoginModel;
  status!:number;
  role_id!:number;
  pass!:string;
  hod:any;
  data:any;
  userToken:any;
  message!:string;
  constructor(private _fb: FormBuilder, private serve:FormService, private route:Router, private http:HttpClient) { }

  ngOnInit(): void {
   
  


    this.users = this._fb.group({
      
      password: [''],
      email: [''] 
    })
  }

  loginUser(){

  const formData = this.users.getRawValue();
  const data={
    email:formData.email,
    password : formData.password
  }
    this.http.post('http://127.0.0.1:8000/api/login', data).subscribe((res:any)=>{
      this.data= res;
      this.userToken = this.data.token;
     let tk =  localStorage.setItem('token',this.userToken)
      console.log(tk);
     this.message = res.message;
     this.userToken = this.data.token;
     this.status = this.data.status;
     this.user = new LoginModel;
      if(this.status==1){
      this.role_id = this.data.role_id.role_id;
      
       if(this.status==1 && this.role_id == 3330){
         localStorage.setItem('token',this.userToken);
        this.route.navigate(['../users/registerUser']);
       }
          }
      else 
        {
          this.route.navigate(['/forbidden']);
      }
      
   
     console.log(this.data);
    },
    (error:HttpErrorResponse) =>{
      this.isLoginError = true;
    }
    );
  
  }
  

}
