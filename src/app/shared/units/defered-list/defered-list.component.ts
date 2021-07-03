import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';

@Component({
  selector: 'app-defered-list',
  templateUrl: './defered-list.component.html',
  styleUrls: ['./defered-list.component.css']
})
export class DeferedListComponent implements OnInit {
  id:any;
  deferred = new StudentsModel;
  otherDetails:any
  testing:any;
  data:any;
  courses:any;
  defer:any;
  levels:any;
  msg:any;
  tst:any;
  status:any;

  constructor(public students:FormService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getStudent();

    
    
  }

  deferStudent(){
   
    this.students.insertDefer(this.deferred).subscribe(res=>{
      this.defer = res;
      
    })
   }
  getStudent(){
    this.students.SearchReg(this.id).subscribe(res=>{
      this.data=res;
      this.deferred=this.data;
      console.log(this.deferred)
    })
  }

  updateRegDetails(){
   
    this.students.updateReg(this.id,this.deferred).subscribe(res=>{
      
    })
   
  }
  getData(){
    this.students.details.getRawValue();
  }

}
