import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-defered-student-list',
  templateUrl: './defered-student-list.component.html',
  styleUrls: ['./defered-student-list.component.css']
})
export class DeferedStudentListComponent implements OnInit {
  list:any;


  StudentsAccountsInfo!: MatTableDataSource<any>
  source_info!:any
  columns: string[]=['AdmNumber','names','gender','course_level','NewBal', 'dept','enrolyr', 'deferReason','operations'] 
  @ViewChild(MatSort, {static:true}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator!:MatPaginator;


  constructor(private lst:FormService, private http:HttpClient) { }

  ngOnInit(): void {

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://127.0.0.1:8000/api/DeferedStude',  {headers:headers}).subscribe(res=>{
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
          }

             //Deltes Accounts
    delActive(id:number){
      this.lst.delactive(id).subscribe(res=>{
           
           
            })
        }

          //Deleting Cleared Student
ClearStudent(AdmNumber:number){
  this.lst.delReg(AdmNumber).subscribe(res=>{
    
       
        })
    }

     
   

}
 