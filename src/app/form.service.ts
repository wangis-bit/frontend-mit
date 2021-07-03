import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentsModel } from './models/accounts.model';
import { registerModel } from './models/register.model';
import { testModel } from './trial/testModel.model';
import { User } from './users/user.model';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  acm=new StudentsModel;
  student=new testModel;
  myForm!:FormGroup;
  Gender!: FormGroup;
  radioGender: FormControl = new FormControl('', Validators.required);
  

  get  fees(): FormArray{
  return this.details.get('fees') as FormArray;
  }
 
 
  constructor(private _fb:FormBuilder, public http:HttpClient) { 
    
  }
   details=this._fb.group({
    names: new FormControl('', Validators.required),
    password_confirmation: new FormControl(''),
    AdmNumber: [''],
    student_id: ['',Validators.required],
    Gender: new FormControl(''),
    course: new FormControl('', Validators.required),
    CourseCode: new FormControl(''),
    enrolyr: new FormControl('', Validators.required),
    dept: new FormControl(''),
    level: new FormControl(''),
    Course_Level: new FormControl('', Validators.required),
    semester: new FormControl(''),
    AmtPd: new FormControl(''),
    Bal: new FormControl(''),
    RenewalDate: new FormControl(''),
    Fees: new FormControl(''),
    AdmDate: new FormControl(''),
    session: new FormControl(''),
    pdate: new FormControl(''),
    currentyear: new FormControl(''),
    course_level_id: new FormControl('', Validators.required),
    deferDate: new FormControl(''),
    deferBal: new FormControl(''),
    deferReason: new FormControl(''),
    NewBal: new FormControl(''),
    complettionYear: ['', Validators.required],
    role_id: [''],
    gender: this.radioGender,
    yrstudy:new FormControl(''),
    AmountPaid: new FormControl(''),
    dept_id: new FormControl('', Validators.required),
    oldBal: new FormControl(''),
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
    form: FormGroup= new FormGroup({
      names: new FormControl(''),
      AdmNumber: new FormControl(''),
      student_id: new FormControl(''),
      semester: new FormControl(''),
      AmtPd: new FormControl(''),
      Bal: new FormControl(''),
      RenewalDate: new FormControl(''),
      session: new FormControl(''),
      pdate: new FormControl(''),
      yrstudy:new FormControl(''),
  
    });


    frmarray=this._fb.group({
     
    })
    getlevel()
    {
      const headers = new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`
        
        });
      return this.http.get('http://127.0.0.1:8000/api/courselevels', {headers:headers});
  
    };
    //get defered students
    getdeferedstudents()
    {
      const headers = new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`
        
        });
      return this.http.get('http://127.0.0.1:8000/api/defers', {headers:headers});
  
    };
    //Retrivews information from Details table
    getDetailsForStudents()
    {
      const headers = new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`
        
        });
      return this.http.get('http://127.0.0.1:8000/api/details', {headers:headers});
  
    };

    //Retrivews information from Details table
    AlumniListAfterClear()
    {
      const headers = new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`
        
        });
      return this.http.get('http://127.0.0.1:8000/api/listOfAumni', {headers:headers});
  
    };

  getData()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/AccountsFetch', {headers:headers});

  };

  getDp()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/departments', {headers:headers});

  };
  getDept(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/forDepts', data, {headers:headers});
  }

  level_ids(data:any){
    return this.http.post('http://127.0.0.1:8000/api/courseid', data);
  }
  //call  back for courses
  getCourseLevel(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/forCourses', data, {headers:headers});
  }

  //gets courses
  getCourses(){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/courses', {headers:headers});
  } 

  //Insert data into student table
  insertData(data:any) 
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/accountsInsert', data, {headers:headers});
  }

  //Insert data into student table
  insertDefer(data:any) 
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/defer', data, {headers:headers});
  }

  regnameData(data:any) 
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/getregDetails', data, {headers:headers});
  }

  getDetails()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/whole', {headers:headers});

  };

  //Students nd details union 
  getDetailsStudent()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/detailstudent', {headers:headers});

  };
  DeptDetails()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/deptdet', {headers:headers});

  };
  getDetailsDeptAccounts()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/deptdetail', {headers:headers});

  }

  getDetailsDept()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/join', {headers:headers});

  }

  DeferStudent()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/studentStop', {headers:headers});

  }
  coursesInDepts()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/deptCourses', {headers:headers});

  }
  inactiveStudents()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/DeferedStude', {headers:headers});

  }


  //Registered List
  getforRegisteredList()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/Department&details', {headers:headers});

  }

  //Registered List
  PopulatingAccountsRegistartion()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/detailstudent', {headers:headers});

  }

  
  getOthers(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/insertDetails', data, {headers:headers});
  }
  //Insert activated student
  InsertActivatedStudent(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/ActiveStudentInsert', data,  {headers:headers});
  }
  getReg(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/regInsert', data, {headers:headers})
  }

  //Searchning and updating routes
  SearchData(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/search/'+id , {headers:headers});
  }
  updateData(id:number, data:any)
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.patch('http://127.0.0.1:8000/up/'+id, data,  {headers:headers});
  }


  //Searchning and updating routes for fees
  SearchData2(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/search2/'+id, {headers:headers});
  }
  updateData2(id:number, data:any)
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.patch('http://127.0.0.1:8000/api/up2/'+id, data, {headers:headers});
  }

  //Searchning and updating Registered students;
  SearchReg(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/searchRegister/'+id, {headers:headers});
  }
   //user role view
   SearchviewforUser(id:number){
    
    return this.http.get('http://127.0.0.1:8000/api/searchUserView/'+id);
  }

  //Serach defered table
  //Searchning and updating Registered students;
  Searchdefered(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/defered/'+id, {headers:headers});
  }
  updateReg(id:number, data:any)
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.patch('http://127.0.0.1:8000/api/regUpdate/'+id, data, {headers:headers});
  }

  //Deleting student registration details 
  delReg(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.delete('http://localhost:8000/api/del/'+id, {headers:headers});
  }

  //Deleting student registration details 
  delDefer(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.delete('http://localhost:8000/api/delDefer/'+id, {headers:headers});
  }

    //Deleting student registration details 
    delactive(id:number){
      const headers = new HttpHeaders({
        'Authorization':`Bearer ${localStorage.getItem('token')}`
        
        });
      return this.http.delete('http://localhost:8000/api/delactive/'+id, {headers:headers});
    }

   //Deleting student registration details 
   deleteDetail(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.delete('http://localhost:8000/delDetails/'+id, {headers:headers});
  }
   //Deleting accounts 
   delteAccount(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.delete('http://localhost:8000/api/delAccounts/'+id, {headers:headers});
  }
  

  ///inserting data into register table
  insertUser(student: User) 
  {
    const body ={
      name: student.name,
      password: student.password,
      email: student.email,
      role_id : student.role_id,
      id:student.id
      
    }
    

    return this.http.post('http://127.0.0.1:8000/api/register', student);
  }
  // ///inserting data into register table
  // insertUserRegister(user: registerModel) 
  // {
  //   const body ={
  //     names: user.names,
  //     pass: user.pass,
  //     mail: user.mail,
  //     roleNo : user.roleNo
      
  //   }
    

  //   return this.http.post('http://127.0.0.1:8000/api/register2', user);
  // }

  loginUser(data:any) 
  {
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }

  //Get Users
  getUsers()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/listOfUsers', {headers:headers});

  }

   //Searchning and updating routes for fees
   SearchDeferForDetails(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/deferFordetails/'+id, {headers:headers});
  }
   //Searchning and updating routes for fees
   SearchDeferForStudents(id:number){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/deferForStudent/'+id, {headers:headers});
  }

  GetLoggedIn(){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/getloggedIn');
  }
  GetViews(){
    
    return this.http.get('http://127.0.0.1:8000/api/hodrolesdepts');
  }
}
