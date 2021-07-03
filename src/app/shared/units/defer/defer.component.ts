import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { RegModel } from 'src/app/layout/default/acounts/reg-model.model';
import { Regnew } from 'src/app/layout/default/acounts/regnew.model';
import { RegnewComponent } from 'src/app/layout/default/acounts/regnew/regnew.component';
import { UpdateComponent } from 'src/app/layout/default/acounts/update/update.component';
import { StudentsModel } from 'src/app/models/accounts.model';
import { FeeDetailsComponent } from 'src/app/student/fee-details/fee-details.component';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','gender','course_level','NewBal', 'dept','enrolyr', 'complettionYear','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:FormService, private http:HttpClient, private confirm:DialogService) { }

  ngOnInit(): void {
    // this.getList()
    



  //For Mat Table
    // this.lst.DeferStudent().subscribe(res=>{
    //   this.source_info = res;
    //   this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
    //   this.StudentsAccountsInfo.sort = this.sort;
    // this.StudentsAccountsInfo.paginator = this.paginator;
    // })

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://127.0.0.1:8000/api/studentStop',  {headers:headers}).subscribe(res=>{
      this.source_info = res;
      this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
      this.StudentsAccountsInfo.sort = this.sort;
    this.StudentsAccountsInfo.paginator = this.paginator;
    })





  }



  //For Appplying filter
applySearch(event:any){
  const searchValue = (event.target as HTMLInputElement).value;
  this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}

   delRegistration(id:number){
    this.lst.delReg(id).subscribe(res=>{
          
         
          })
      }

      //Deltes Accounts
    delAccounts(id:number){
        this.lst.delteAccount(id).subscribe(res=>{
             
             
              })
              this.confirm.onpenConfirmDialog("Are you sure you want to defer this student?").afterClosed().subscribe(res => {
                if(res){
                  this.lst.delteAccount(id).subscribe(res=>{
                    
                   
                    })
                }  
              })
          }

             //Deltes Accounts
    delActive(id:number){
       this.confirm.onpenConfirmDialog("Are you sure you want to defer this student?").afterClosed().subscribe(res => {
              if(res){
                this.lst.delactive(id).subscribe(res=>{
                  
                })
              }  
            })
        }

          //Deleting Cleared Student
ClearStudent(AdmNumber:number){
  this.confirm.onpenConfirmDialog("Are you sure you want to defer this student?").afterClosed().subscribe(res => {
    // if(res){
    //   this.lst.delReg(AdmNumber).subscribe(res=>{
    //       this.detDeptDetailInfo();
             
    //          })
    //        }
          })
    }


}
 