import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-of-department-dashboard',
  templateUrl: './head-of-department-dashboard.component.html',
  styleUrls: ['./head-of-department-dashboard.component.css']
})
export class HeadOfDepartmentDashboardComponent implements OnInit {
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
