import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/layout/default/departments/department.service';
import { RegisterUserService } from 'src/app/users/register-user/register-user.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {
  userDetails:any;
  user:any;
  StuentArray:any;
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

  constructor(private http:HttpClient,private router:Router, public serve:DepartmentService, private stude_info:RegisterUserService) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.user = res;
        // console.log(this.user)
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

  detailsPage(user:any)
  {
    this.router.navigate(['/students/Dashboard/student-details', user.id])
  }

  getStudentInformation(event:any){
    var obj ={
      id:event.target.value
    }
    this.stude_info.getLoggedInStudentInfromation(obj).subscribe((res:any)=>{
      this.StuentArray=res[0];
      // console.log(this.StuentArray);
      
      
    })
    
  }

}
