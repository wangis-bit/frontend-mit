import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'src/app/layout/default/acounts/account.service';

@Component({
  selector: 'app-sys',
  templateUrl: './sys.component.html',
  styleUrls: ['./sys.component.css']
})
export class SysComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','NewBal','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:AccountService, private dialog:MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
   
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
     
      this.http.get('http://127.0.0.1:8000/api/activestude',  {headers:headers}).subscribe(res=>{
        this.source_info = res;
        this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
        this.StudentsAccountsInfo.sort = this.sort;
        this.StudentsAccountsInfo.paginator = this.paginator;
        
      });


  //For Mat Table
  //   this.lst.ActiveDetails().subscribe(res=>{
  //     this.source_info = res;
  //     this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
  //     this.StudentsAccountsInfo.sort = this.sort;
  //   this.StudentsAccountsInfo.paginator = this.paginator;
  //   })
  }



  //For Appplying filter
applySearch(event:any){
  const searchValue = (event.target as HTMLInputElement).value;
  this.StudentsAccountsInfo.filter = searchValue.trim().toLowerCase();
}


}