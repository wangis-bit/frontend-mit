import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/form.service';
import { UpdateComponent } from 'src/app/layout/default/acounts/update/update.component';
import { StudentsModel } from 'src/app/models/accounts.model';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','gender','NewBal','enrolyr', 'complettionYear','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:FormService) { }

  ngOnInit(): void {
    // this.getList()
    this.detDeptDetailInfo();



  //For Mat Table
    this.lst.getdeferedstudents().subscribe(res=>{
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



  // getList(){
  //   this.lst.getdeferedstudents().subscribe(res=>{
      
  //     console.log(res)
      
  //   });
  // }
   //Information for Detail and Depts table
   detDeptDetailInfo(){
    this.lst.getdeferedstudents().subscribe(res=>{
      this.list=res;

    })
   }

   delRegistration(id:number){
    this.lst.delReg(id).subscribe(res=>{
          this.detDeptDetailInfo();
         
          })
      }
      delDefer(id:number){
        this.lst.delDefer(id).subscribe(res=>{
              
             
              })
          }

      //Deltes Accounts
    delAccounts(id:number){
        this.lst.delteAccount(id).subscribe(res=>{
              this.detDeptDetailInfo();
             
              })
          }

          //Deleting Cleared Student
ClearStudent(AdmNumber:number){
  this.lst.delReg(AdmNumber).subscribe(res=>{
    this.detDeptDetailInfo();
       
        })
    }

     
   

}
 