import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/form.service';
import { AccountService } from '../account.service';
import { ActivateFeeComponent } from '../activate-fee/activate-fee.component';

@Component({
  selector: 'app-activated-students',
  templateUrl: './activated-students.component.html',
  styleUrls: ['./activated-students.component.css']
})
export class ActivatedStudentsComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','NewBal','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:AccountService,private http:HttpClient, private dialog:MatDialog,) { }

  ngOnInit(): void {
   
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
      
  
      this.http.get('http://127.0.0.1:8000/api/activestude',  {headers:headers}).subscribe(res=>{
        this.source_info = res;
        this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
        this.StudentsAccountsInfo.sort = this.sort;
        this.StudentsAccountsInfo.paginator = this.paginator;
    
      })
      


  //For Mat Table
    // this.lst.ActiveDetails().subscribe(res=>{
    //   this.source_info = res;
    //   this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
    //   this.StudentsAccountsInfo.sort = this.sort;
    // this.StudentsAccountsInfo.paginator = this.paginator;
    // })
  }



  //For Appplying filter
applySearch(event:any){
  const searchValue = (event.target as HTMLInputElement).value;
  this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}


}