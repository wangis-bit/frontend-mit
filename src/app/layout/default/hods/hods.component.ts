import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Regnew } from '../acounts/regnew.model';
import { DepartmentService } from '../departments/department.service';

@Component({
  selector: 'app-hods',
  templateUrl: './hods.component.html',
  styleUrls: ['./hods.component.css']
})
export class HodsComponent implements OnInit {
  userdepts:any
  user :any;
  val:any;
  AccountsData!:Regnew;
  userDetails:any;
  username:string='DavidWangila'


  public isCollapsed = true;

  @Input()
  public expanded: boolean=false;

  @Output()
  public expandedChange: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.next(this.expanded);
  }

  
  constructor(private http:HttpClient, private rolesofHods:DepartmentService, private router:Router) { }

  ngOnInit(): void {

  $(document).ready( function(){
    $('#open').click( function(){
    
      $('#div').hide();

    })
  
  })
    this.AccountsData={
      student_id:0,
      oldBal:0,
      RenewalDate:'',
      session:'',
      AdmNumber:0,
      course_level_id:0,
      AmountPaid:0,
      NewBal:0,
      pdate:''
    }
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/getloggedIn',  {headers:headers}).subscribe(res=>{
        this.user = res;
      })
      this.getRolesForHods()
  }
  getRolesForHods(){
    this.rolesofHods.getroleswithdepts().subscribe(res=>{
      this.userdepts=res;
      
    })
  }
  clicked(event:any){
    
    var obj={
      role_id: event.target.value
       
    }
       this.rolesofHods.getuserinfo(obj).subscribe(res=>{
        this.userDetails = res;
        // console.log(this.userDetails)
       
    });
  }
  detailsPage(user:any)
  {
    this.router.navigate(['/HOD/Dashboard/department-details', user.role_id])
  }
}
