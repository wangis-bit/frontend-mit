import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
  user:any;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient, private token:FormService) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });

    this.token.getUsers().subscribe(res=>{
      this.user = res;
      console.log(this.user)
    })
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}
