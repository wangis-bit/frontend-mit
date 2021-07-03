import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormService } from 'src/app/form.service';
import { StudentsModel } from 'src/app/models/accounts.model';
import { FeeDetailsComponent } from 'src/app/student/fee-details/fee-details.component';
import { RegModel } from '../reg-model.model';
import { Regnew } from '../regnew.model';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-regnew',
  templateUrl: './regnew.component.html',
  styleUrls: ['./regnew.component.css']
})
export class RegnewComponent implements OnInit {
  formData!:RegModel
  AccountsData!:Regnew
  nm!:RegModel[]
  depts!:RegModel[]
  status!:number;
  msg:any;
  message:any;
  myForm!:FormGroup;
  yr = new Date();
  SelectVal:any;
  AccountsArr:any;
  id:any;
  acm = new StudentsModel;
  info:any;
  val:any;
  detailsAccount:any
 
  otherDetails:any;
  Semester:any[]=[
    "Jan-Apri", "May-august","Sep-Dec", "Dec Holiday","April Holiday","August Holiday"
  ]
  Years:any[]=[
    2019, 2020,2021, 2022,2023,2024,2025,2026,2027,2028,2029,2030
  ]


  
    //Contructor starts here
  
  constructor(public serve:FormService, 
    private _fb:FormBuilder,
     private http:HttpClient, 
     private dialog:MatDialog,
     private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogref:MatDialogRef<FeeDetailsComponent>
     ) {
    
}

  

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
   
    this.serve.getDetailsDept().subscribe(res=>this.nm = res as RegModel[]);
    // this.serve.getDetailsDept().subscribe(res=>this.depts = res as RegModel[])
  
    this.formData={
      student_id:0,
      oldBal:0,
      RenewalDate:'',
      session:'',
      AdmNumber:0,
      course_level_id:0,
      AmountPaid:0,
      NewBal:0,
      names:'',
      gender:'',
      dept:'',
      course:'',
      complettionYear:'',
      enrolyr:'',
      pdate:'',
      level:'',
      dept_id:0,
      course_level:''
    }
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
  
//For searchning and update
this.id=this.route.snapshot.params.student_id;
console.log(this.route.snapshot.params.student_id);
 

 //initialized functions
    this.getStudent();
    this.getAllDetails();
    this.getStudentAccount();
  };


  //functions starts here
  openReg(){
    this.dialog.open(RegnewComponent, {
      width:'1000px'
    
    })
  }

  //Opens dialog for Fee Receiving payment
  openUpdate(){
    this.dialog.open( UpdateComponent, {
      width:'1000px'
    
    })
  }


  getVal(otherDetails:any){
    let i = otherDetails.Fees;
    // console.log(i)

  }

            //Getting data from the accounts api
            getStudent(){
              this.serve.getData().subscribe(res=>{
                this.AccountsArr=res;   
              })
            }
          

          //inserting student's table from accounts 9into api
            postStudent(){
            
                this.serve.insertData(this.AccountsData).subscribe(res=>{
                  this.msg=res;
                  this.status=this.msg.status;
                  this.message=this.msg.message;
                  this.formData = new RegModel
                  this.AccountsData = new Regnew

                
                })
              }


          displayFn(sub:any){
            return sub?sub.AdmNo: undefined;
          }
          displayFn2(sub:any){
            return sub?sub.names: undefined;
          }



          getAllDetails(){
            this.serve.getDetailsDept().subscribe(res=>{
              this.detailsAccount = res;
              console.log(this.detailsAccount);
            })
          }
          getOthers(event:any){
            var obj={
              student_id: event.target.value,
            }
            this.serve.getOthers(obj).subscribe(res=>{
                this.otherDetails = res;
                // console.log(this.otherDetails)
            });
          }


getNames(event:any){
  var obj={
    AdmNumber: event.target.value,
  }
  this.serve.regnameData(obj).subscribe(res=>{
      this.otherDetails = res;
      // console.log(this.otherDetails)
     
  });
}

//For Updating
updateData(){
   
  this.serve.updateData(this.id,this.acm).subscribe(res=>{
    
  })}


  //Getting details from aco8unt  
  getStudentAccount(){
    this.serve.getlevel().subscribe(res=>{
      this.info = res;
    })
  }


  UpdatePay(ctrl:any){
    if(ctrl.selectedIndex==0){
      this.formData.AdmNumber = 0;
      this.formData.names = '--Student Names--';
      this.formData.student_id = 0;
      this.formData.gender = '--gender--';
      this.formData.course='--course--';
      this.formData.course_level='--course level--';
      this.formData.dept = '--Department--';
      
    }else{
      this.formData.AdmNumber=this.nm[ctrl.selectedIndex-1].AdmNumber
      this.formData.student_id = this.nm[ctrl.selectedIndex-1].student_id

      this.AccountsData.AdmNumber=this.nm[ctrl.selectedIndex-1].AdmNumber
      this.AccountsData.student_id = this.nm[ctrl.selectedIndex-1].student_id
      this.formData.course=this.nm[ctrl.selectedIndex-1].course
      this.formData.course_level=this.nm[ctrl.selectedIndex-1].course_level
      this.formData.gender = this.nm[ctrl.selectedIndex-1].gender
      this.formData.level=this.nm[ctrl.selectedIndex-1].level
      this.formData.dept = this.nm[ctrl.selectedIndex-1].dept
      this.formData.names =this.nm[ctrl.selectedIndex-1].names
      this.formData.course_level_id =this.nm[ctrl.selectedIndex-1].course_level_id
      this.AccountsData.course_level_id =this.nm[ctrl.selectedIndex-1].course_level_id
    }
    this.computeBal()
 }


 changeDept(event:any){
  if(event.selectedIndex==0){
    this.formData.dept = '--Department--';
    this.formData.AdmNumber = 0;
      this.formData.student_id = 0;
      this.formData.gender = '--gender--';
      this.formData.level='--course--'

      
    this.AccountsData.AdmNumber = 0;
      this.AccountsData.student_id = 0;
     
    
  }else{
    // this.formData.dept=this.depts[event.selectedIndex-1].dept
  }
  this.computeBal()
}
 

 computeBal(){
   this.AccountsData.NewBal = parseFloat((this.AccountsData.oldBal - this.AccountsData.AmountPaid).toFixed(2))
 }




//  onSubmit(form: NgForm){
// this.serve.feePayment.push(form.value);
// this.dialogref.close()
//  }
 printForm(){
   this.AccountsData
   console.log(this.AccountsData)
 }
//  postStudent(){
            
//   this.serve.insertData(this.formData).subscribe(res=>{
//     console.log(res);
  
//   })
// }
 
}
 

