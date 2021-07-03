import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hodhead',
  templateUrl: './hodhead.component.html',
  styleUrls: ['./hodhead.component.css']
})
export class HodheadComponent implements OnInit {
  user:any;
  
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.user = res;
      })
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}

