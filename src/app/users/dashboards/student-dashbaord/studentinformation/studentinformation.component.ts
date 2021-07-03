import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/layout/default/departments/department.service';
import { RegisterUserService } from 'src/app/users/register-user/register-user.service';

@Component({
  selector: 'app-studentinformation',
  templateUrl: './studentinformation.component.html',
  styleUrls: ['./studentinformation.component.css']
})
export class StudentinformationComponent implements OnInit {
  userDetails:any;
  user:any;
  val:any;
  info:any;
  Std:any;
  public isCollapsed = true;

  @Input()
  public expanded: boolean=false;

  @Output()
  public expandedChange: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.next(this.expanded);
  }

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router, public serve:DepartmentService, private registerService:RegisterUserService) { }

  ngOnInit(): void {
    this.info=this.route.snapshot.params.id;

  

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.user = res;
        console.log(this.user)
      })
  }
  User(){
    console.log('has changed');
    
  }
  getDept(){
    console.log('Value changed');
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/users'])
  }
  clicked(event:any){
    console.log('i was clicked');
    var obj={
      role_id: event.target.value
       
    }
       this.serve.getuserinfo(obj).subscribe(res=>{
        this.userDetails = res;
        console.log(this.userDetails)
       
    });
  }



}

