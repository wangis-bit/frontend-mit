import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overal-admin',
  templateUrl: './overal-admin.component.html',
  styleUrls: ['./overal-admin.component.css']
})
export class OveralAdminComponent implements OnInit {
  sideBarOpen = true;
  user:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        console.log(res);
      })
  

    
  }



  sideToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
