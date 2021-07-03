import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { FeeDetails } from 'src/app/shared2/fee-details.model';
import { FeeDtailsService } from 'src/app/shared2/fee-dtails.service';
import { FeesService } from 'src/app/shared2/fees.service';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit {
  formData!:FeeDetails
  student!:FeeDetails[]

  constructor(
    private fee :FeesService,
    private cs:FeeDtailsService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogref:MatDialogRef<FeeDetailsComponent>
  ) { }

  ngOnInit(): void {

    this.cs.getId().subscribe(res=>this.student = res as FeeDetails[]) 
    
  
    this.formData={
      CourseName:'',
      FeesPaid:0,
      studentID:this.data.FeeId,
      FeeBal:0,
      Name:'',
      Fees:0
      

    }
  }
  UpdatePay(ctrl:any){
    if(ctrl.selectedIndex==0){
      this.formData.Fees = 0;
      this.formData.studentID = 0;
      this.formData.Name = 'student name';
    }else{
      this.formData.Fees=this.student[ctrl.selectedIndex-1].Fees
      this.formData.studentID = this.student[ctrl.selectedIndex-1].studentID
      this.formData.Name = this.student[ctrl.selectedIndex-1].Name
    }
    this.computeBal()
 }

 computeBal(){
   this.formData.FeeBal = parseFloat((this.formData.Fees - this.formData.FeesPaid).toFixed(2))
 }

 onSubmit(form: NgForm){
this.fee.feePayment.push(form.value);
this.dialogref.close()
 }
 printForm(){
   this.formData
   console.log(this.formData)
 }
 postStudent(){
            
  this.cs.insertData(this.formData).subscribe(res=>{
    console.log(res);
  
  })
}
 
}
