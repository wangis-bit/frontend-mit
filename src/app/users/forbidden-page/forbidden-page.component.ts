import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { LoginModel } from 'src/app/y.model';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.css']
})
export class ForbiddenPageComponent implements OnInit {
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
   
 setTimeout('RedirectPage()',3000)

    this.users = this._fb.group({
      
      password: [''],
      email: [''] 
    })
    this.RedirectPage();
  }

  RedirectPage(){
    this.route.navigate(['/users'])
  }
  

}
