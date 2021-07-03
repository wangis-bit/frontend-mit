import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
frm:any;
user:any;

Department = [
  {id:1, value: 'ICT'},
  {id:2, value: 'SocialWork'},
  {id:3, value: 'Beauty'},
  {id:4, value: 'Engineering'},
  {id:5, value: 'Hospitality'},
  {id:6, value: 'Nutrition'},
]


  constructor(public servefrm:FormService, private http:HttpClient) { }
  
  ngOnInit(): void {
    this.frm = new FormGroup({
      'name': new FormControl,
      'Residence': new FormControl,
      'Course': new FormControl
    })

    // const headers = new HttpHeaders({
    //   'Authorization':`Bearer ${localStorage.getItem('token')}`
    // });

    // this.http.get('http://127.0.0.1:8000/api/listOfUsers',  {headers:headers}).subscribe(res=>{
    //   this.user = res;
    //   console.log(this.user)
    // })
  }

}


