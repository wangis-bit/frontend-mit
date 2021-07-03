import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashbaord',
  templateUrl: './student-dashbaord.component.html',
  styleUrls: ['./student-dashbaord.component.css']
})
export class StudentDashbaordComponent implements OnInit {
  user:any;
  sideBarOpen = true;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.user = res;
      })
  
  }
  sideToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}

