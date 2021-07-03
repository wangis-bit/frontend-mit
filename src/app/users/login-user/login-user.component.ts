import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Key } from 'selenium-webdriver';
import { FormService } from 'src/app/form.service';

import { LoginModel } from 'src/app/y.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
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
     let tk =  sessionStorage.setItem('token',this.userToken)
      console.log(tk);
     this.message = res.message;
     this.userToken = this.data.token;
     this.status = this.data.status;
     this.user = new LoginModel;
      if(this.status==1){
      this.role_id = this.data.role_id.role_id;
      
       if(this.status==1 && this.role_id == 3330){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/']);
       }
       else if(this.status==1 && this.role_id == 3331){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/principal/Dashboard'])
       }
       else if(this.status==1 && this.role_id == 3332){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/Deputy-Principal/Dashboard'])
       }
       else if(this.status==1 && this.role_id == 3333){
         sessionStorage.setItem('token',this.userToken);
         
        this.route.navigate(['/HOD/Dashboard'])
       }
       else if(this.status==1 && this.role_id == 3334){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/tutors/MainDashboard'])
       }
       else if(this.status==1 && this.role_id == 3335){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/students/Dashboard'])
       }
       else if(this.status==1 && this.role_id == 3336){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/accountsPanel/Dashboard'])
       }
       else if(this.status==1 && this.role_id == 3337){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/registration/Dashboard'])
       }
       else if(this.status==1 && this.role_id == 3338){
         sessionStorage.setItem('token',this.userToken);
        this.route.navigate(['/main'])
       }
        
     }
     else 
      {
       this.message;
     }
      
   
     console.log(this.data);
    },
    (error:HttpErrorResponse) =>{
      this.isLoginError = true;
    }
    );
  
  }
  

}
