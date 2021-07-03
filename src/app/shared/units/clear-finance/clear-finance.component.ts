import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/form.service';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-clear-finance',
  templateUrl: './clear-finance.component.html',
  styleUrls: ['./clear-finance.component.css']
})
export class ClearFinanceComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','gender','dept','course_level','enrolyr','complettionYear'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:AlumniService, private http:HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://127.0.0.1:8000/api/completedStidents',  {headers:headers}).subscribe(res=>{
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
  
}
 
