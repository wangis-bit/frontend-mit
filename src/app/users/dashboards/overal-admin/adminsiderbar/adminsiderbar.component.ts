import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-adminsiderbar',
  templateUrl: './adminsiderbar.component.html',
  styleUrls: ['./adminsiderbar.component.css']
})
export class AdminsiderbarComponent implements OnInit {
  public isCollapsed = true;
  user:any;
  @Input()
  public expanded: boolean=false;

  @Output()
  public expandedChange: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.next(this.expanded);
  }

  constructor(private http:HttpClient,private router:Router, private usrs:FormService) { }

  ngOnInit(): void {


    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });

    // this.http.get('http://127.0.0.1:8000/api/listOfusers',  {headers:headers}).subscribe(res=>{
    //   this.user = res;
    //   console.log(this.user)
    // })

    this.getUsers()
  }

  getUsers(){
    this.usrs.getUsers().subscribe(res=>{
      console.log(res);
      
    })
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/users'])
  }
}

