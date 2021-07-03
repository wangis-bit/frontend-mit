import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FeesService } from 'src/app/shared2/fees.service';
import { FeeDetailsComponent } from '../fee-details/fee-details.component';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  constructor(public service:FeesService, private dilog:MatDialog) { }

  ngOnInit(): void {
    this.resetForm()
  }
resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.service.formData={
    feesID:0,
    ReceiptNo:Math.floor(100000+Math.random()*900000).toString(),
    studentID:'',
    PMethod:'',
    FeeBal:0


  }
  this.service.feePayment =[];
}
addoredtitfees(feeIndex:any, FeeId:any){
  const dialogconfig = new MatDialogConfig();
  dialogconfig.autoFocus = true;
  dialogconfig.disableClose = true;
  dialogconfig.width="50%";
  dialogconfig.data={feeIndex, FeeId};
  this.dilog.open(FeeDetailsComponent, dialogconfig)

}
}
