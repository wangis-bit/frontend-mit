import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  getRoles(){
   return this.http.get('http://127.0.0.1:8000/api/roles')
  }

  getRolesForTutorAndHod(){
    return this.http.get('http://127.0.0.1:8000/api/hodtutorroles')
   }
  getHodNames(data:any){
    return this.http.post('http://127.0.0.1:8000/api/hod-names', data)
  }
  getHodDepartment(data:any){
    return this.http.post('http://127.0.0.1:8000/api/hod-Departments', data)
  }


  getLoggedInStudentInfromation(id:any){
    return this.http.get('http://127.0.0.1:8000/api/searchStudentView/'+id)
  }

  getLoggedInTutorInfromation(id:any){
    return this.http.get('http://127.0.0.1:8000/api/searchTutorView/'+id)
  }



  getTutorDepartment(data:any){
    return this.http.post('http://127.0.0.1:8000/api/tutor-Departments', data)
  }

  getprinciaplNme(data:any){
    return this.http.post('http://127.0.0.1:8000/api/prinipal-name', data)
  }

  getdpName(data:any){
    return this.http.post('http://127.0.0.1:8000/api/dpprinipal-name', data)
  }

  studentName(){
    return this.http.get('http://127.0.0.1:8000/api/student_users_login')
  }
  adminName(data:any){
    return this.http.post('http://127.0.0.1:8000/api/admin-name', data)
  }

  RegistrarName(data:any){
    return this.http.post('http://127.0.0.1:8000/api/registrar-name', data)
  }
  DirectorName(data:any){
    return this.http.post('http://127.0.0.1:8000/api/director-name', data)
  }
  tutorName(data:any){
    return this.http.post('http://127.0.0.1:8000/api/tutor-name', data)
  }
  accountantName(data:any){
    return this.http.post('http://127.0.0.1:8000/api/acountant-name', data)
  }

  AllUsersLoginInsert(data:any){
    return this.http.post('http://127.0.0.1:8000/api/All_users_Insert', data)
  }

  StudentLoginInsert(data:any){
    return this.http.post('http://127.0.0.1:8000/api/student_login_Insert', data)
  }
  OveralUsersLoginInsert(data:any){
    return this.http.post('http://127.0.0.1:8000/api/otherUsers_login_Insert', data)
  }
  
  HodLoginInsert(data:any){
    return this.http.post('http://127.0.0.1:8000/api/hod_login_Insert', data)
  }
  TutorLoginInsert(data:any){
    return this.http.post('http://127.0.0.1:8000/api/tutor_login_Insert', data)
  }
  getStudentDeptCourse(data:any){
    return this.http.post('http://127.0.0.1:8000/api/student-course-dept', data)
  }
  insertUserRegister(data:any) 
  {
    return this.http.post('http://127.0.0.1:8000/api/register2',data);
  }


  getPrincipal(){
    return this.http.get('http://127.0.0.1:8000/api/principal')
   }
   getDP(){
    return this.http.get('http://127.0.0.1:8000/api/dpprincipal')
   }
   getDirector(){
    return this.http.get('http://127.0.0.1:8000/api/director')
   }
   getHOD(){
    return this.http.get('http://127.0.0.1:8000/api/h.o.d')
   }
   getAdmin(){
    return this.http.get('http://127.0.0.1:8000/api/getAdmin')
   }
   getAccountant(){
    return this.http.get('http://127.0.0.1:8000/api/accountant')
   }
   getRegistrar(){
    return this.http.get('http://127.0.0.1:8000/api/registrar')
   }
   getTutor(){
    return this.http.get('http://127.0.0.1:8000/api/tutor')
   }

   //get those that can log in
   getLogininginTutor(){
    return this.http.get('http://localhost:8000/api/tutorforlogin')
   }

   getloginhod(){
    return this.http.get('http://127.0.0.1:8000/api/hodforlogin')
   }

   getLoginStudent(){
    return this.http.get('http://localhost:8000/api/studentforlogin')
   }

   DeleteLoginstudent(id:number){
    return this.http.delete('http://localhost:8000/api/delstudent/'+id)
   }
   DeleteLoginstudentFromUsers(id:number){
    return this.http.delete('http://localhost:8000/api/delstudentfromUsers/'+id)
   }

   //De Student
   DeleteLoginhod(id:number){
    return this.http.delete('http://localhost:8000/api/delhod/'+id)
   }
   DeleteLoginhodFromUsers(id:number){
    return this.http.delete('http://localhost:8000/api/delhodfromUsers/'+id)
   }


   //Del Hod
   DeleteLoginTutororhod(id:number){
    return this.http.delete('http://localhost:8000/api/delTutor/'+id)
   }
   DeleteLoginTutororhodFromUsers(id:number){
    return this.http.delete('http://localhost:8000/api/delTutorfromUsers/'+id)
   }

}
