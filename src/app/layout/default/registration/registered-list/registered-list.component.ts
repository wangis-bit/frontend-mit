import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-registered-list',
  templateUrl: './registered-list.component.html',
  styleUrls: ['./registered-list.component.css']
})
export class RegisteredListComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','gender','course_level', 'dept','enrolyr', 'complettionYear','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:FormService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getList()
    this.detDeptDetailInfo();

    // const headers = new HttpHeaders({
    //   'Authorization':`Bearer ${localStorage.getItem('token')}`
      
    //   });
    //   this.http.get('http://127.0.0.1:8000/api/studentStop',  {headers:headers}).subscribe(res=>{
    //     this.source_info = res;
    //     this.StudentsAccountsInfo = new MatTableDataSource(this.source_info);
    //     this.StudentsAccountsInfo.sort = this.sort;
    //     this.StudentsAccountsInfo.paginator = this.paginator;
      
    //   });



  //For Mat Table
    this.lst.getDetailsDept().subscribe(res=>{
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



  getList(){
    this.lst.getDetails().subscribe(res=>{
      
      // console.log(this.list)
      
    });
  }
   //Information for Detail and Depts table
   detDeptDetailInfo(){
    this.lst.getDetailsDeptAccounts().subscribe(res=>{
      this.list=res;
    })
   }

   delRegistration(id:number){
    this.lst.delReg(id).subscribe(res=>{
          this.detDeptDetailInfo();
         
          })
      }
   

}
