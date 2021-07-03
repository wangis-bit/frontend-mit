import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  myForm!:FormGroup;
  Gender!: FormGroup;
  radioGender: FormControl = new FormControl('');

  get  fees(): FormArray{
  return this.details.get('fees') as FormArray;
  }

  constructor(private http:HttpClient, private _fb:FormBuilder,) { }

  details=this._fb.group({
    names: new FormControl(''),
    AdmNumber: [''],
    student_id: [''],
    Gender: new FormControl(''),
    course: new FormControl(''),
    CourseCode: new FormControl(''),
    dept: new FormControl(''),
    level: new FormControl(''),
    Course_Level: new FormControl(''),
    semester: new FormControl(''),
    AmtPd: new FormControl(''),
    Bal: new FormControl(''),
    RenewalDate: new FormControl(''),
    Fees: new FormControl(''),
    AdmDate: new FormControl(''),
    session: new FormControl(''),
    pdate: new FormControl(''),
    currentyear: new FormControl(''),
    course_level_id:[''],
    enrolyr: [''],
    NewBal:[''],
    gender: this.radioGender,
    yrstudy:new FormControl(''),
    fees : new FormArray([
      this._fb.array([
        this._fb.group({
          Fees: new FormControl(''),
          AmtPd: new FormControl(''),
          Bal: new FormControl(''),
        })
       
      ])
    ])

    
    
  
    
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
