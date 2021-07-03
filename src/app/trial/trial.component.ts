import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FormService } from '../form.service';
import { StudentsModel } from '../models/accounts.model';
import { testModel } from './testModel.model';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  formData = new testModel;
  form!: FormGroup;
  acm = new StudentsModel;
  student_info:any;
  nm:any;
  test:any;
  arr = new Array;
  otherDetails:any;
  constructor(public service:FormService, private f:FormBuilder) { }

  ngOnInit(): void {
   

    $('.calc').on('input', function(){
      var sum=0;
      $('#num1, #num2').click(function(){
        var n = Number($('#num1').val());
        var n2 = Number($('#num2').val());
        sum = n+n2;
        $('#sum').click(function(){
        
          $('#num3').val(sum)
        })
        
      })  
    })



    this.form = this.f.group({
      num1: [''],
      num2: [''],
      num3: [''],

    })

    this.getStudent()
    // this.resetForm()
    this.getAllDetails()
  }

  // resetForm(form?:NgForm){
  //   if(form==null)
  //   form!.resetForm();
  //   this.formData ={
  //     names:'',
  //     AdmNumber:null,
  //     Fees:0,
  //     AmtPd:0,
  //     Bal:0
  
  //   }
  // }
 

  getStudent(){
    this.service.getDetails().subscribe(res=>{
      this.student_info = res;
    })
  }
  loadAdmNo(ctrl:any){
    // console.log(ctrl.selectedIndex)
    if(ctrl.selectedIndex==0){
      this.service.student.Fees =0
      this.service.student.AdmNumber =0
    }else{
      this.service.student.Fees = this.service.student.names;
      this.service.student.AdmNumber = this.service.student.names;
      // console.log(this.service.student.AdmNumber)
    }
  }
  getAllDetails(){
    this.service.PopulatingAccountsRegistartion().subscribe(res=>{
      this.nm = res;
      // console.log(this.nm);
    })
  }
  getOthers(event:any){
    var obj={
      student_id: event.value,
      
    }
  
    this.service.getOthers(obj).subscribe(res=>{
        this.otherDetails = res;
        this.formData = this.otherDetails;
         let n = this.otherDetails.AdmNumber
        // console.log(this.formData)
        // console.log(event.selectedIndex)
        if(event.selectedIndex==0){
          this.service.student.Fees =0
          this.service.student.AdmNumber =0
          
        }else{
          // this.service.student.Fees = this.service.student.names;
          this.service.student.AdmNumber = obj.student_id;
          console.log(this.service.student.AdmNumber)
        }
        // console.log(this.otherDetails)
    });
  }
  
  displayFn(sub:any){
    return sub?sub.AdmNumber: undefined;
  }

  getValues(){
    console.log(this.form.getRawValue())
  }
}
