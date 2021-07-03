import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  myForm!:FormGroup;
  Gender!: FormGroup;
  radioGender: FormControl = new FormControl('');

  constructor(private http:HttpClient, private _fb:FormBuilder,) { }

  details=this._fb.group({
    names: new FormControl(''),
    AdmNumber: [''],
    dept_id: [''],
    course_level_id: [''],
    enrolyr: [''],
    complettionYear: [''],
    gender: this.radioGender, 
    })





  //call back for Account Admission Numbers
  GetAccountInfo(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/insertDetails', data, {headers:headers});
  }

  //Route for matTable
  getDetails()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/whole', {headers:headers});

  };
  //Route for matTable
  getCompletedstudents()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/completedStidents', {headers:headers});

  };

  //Inserting data from accounts into students table
  insertData(data:any) 
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/FeeActivationInsert', data, {headers:headers});
  }

  //For getting details of admsioion in acll back account form
  getNamesForAccount(data:any) 
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/getregDetails', data, {headers:headers});
  }

   //For getting details of admsioion in acll back account form
   PostAlumniStudent(data:any) 
   {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
     return this.http.post('http://127.0.0.1:8000/api/insertAlumni', data, {headers:headers});
   }

  //Updating details for accounts table
  updateAccounts(id:number, data:any)
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.patch('http://127.0.0.1:8000/up/'+id, data, {headers:headers});
  }

  //For deaprtment details in accounts
  DeptDetails()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/deptdet', {headers:headers});

  };

  //For deaprtment details in accounts
  ActiveDetails()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/activestude', {headers:headers});

  };

   //Searchning and updating routes for fees
   SearchActive(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/searchactive/'+id, {headers:headers});
  }

  //Searchning details for alumni
  SearchAlumni(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/searchalumni/'+id, {headers:headers});
  }
}
