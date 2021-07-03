import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tutor-header',
  templateUrl: './tutor-header.component.html',
  styleUrls: ['./tutor-header.component.css']
})
export class TutorHeaderComponent implements OnInit {
  tutor:any;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.tutor = res;
      })
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}