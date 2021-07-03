import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';

@Component({
  selector: 'app-editregister',
  templateUrl: './editregister.component.html',
  styleUrls: ['./editregister.component.css']
})
export class EditregisterComponent implements OnInit {
  id:any;
  reg = new StudentsModel;
  otherDetails:any
  testing:any;
  data:any;
  courses:any;
  levels:any;
  tst:any;

  constructor(public students:FormService, private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getSearchedStudent()

    
    
  }
  getSearchedStudent(){
    this.students.SearchReg(this.id).subscribe(res=>{
      this.data=res;
      this.reg=this.data;
      console.log(this.reg)
    })
  }

  updateRegDetails(){
   
    this.students.updateReg(this.id,this.reg).subscribe(res=>{
      
    })
   
  }

}
