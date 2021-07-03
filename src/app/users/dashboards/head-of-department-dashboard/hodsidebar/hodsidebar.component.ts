import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/layout/default/departments/department.service';

@Component({
  selector: 'app-hodsidebar',
  templateUrl: './hodsidebar.component.html',
  styleUrls: ['./hodsidebar.component.css']
})
export class HodsidebarComponent implements OnInit {
  userDetails:any;
  user:any;
  val:any
  public isCollapsed = true;

  @Input()
  public expanded: boolean=false;

  @Output()
  public expandedChange: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.next(this.expanded);
  }

  constructor(private http:HttpClient,private router:Router, public serve:DepartmentService,) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
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
    sessionStorage.removeItem('token');
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

  // getCourseLevels(event:any){
  //   var obj={
  //     course_id: event.target.value,
  //   }
  //   this.serve.getLevelsCourses(obj).subscribe(res=>{
  //       this.otherDetails1 = res;
  //       // console.log(this.otherDetails)
       
  //   });
  // }

}