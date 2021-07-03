import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getOthers(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/dptCourse', data, {headers:headers});
  }
  getLevelsCourses(data:any) 
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.post('http://127.0.0.1:8000/api/getlevels', data, {headers:headers});
  }
  getDetails()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/coursedept', {headers:headers});

  };
  //get departments
  getDepartments()
  {
     
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/departments', {headers:headers});

  };

  //Get courses
  getCourse()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/api/courses', {headers:headers});

  };
  //Get Course leves
  getlevel()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
    return this.http.get('http://127.0.0.1:8000/courselevels', {headers:headers});

  };
  getroleswithdepts()
  {
   
    return this.http.get('http://127.0.0.1:8000/api/hodrolesdepts');

  };

  //call back for students at their course level
  getStudentAtCourseLevel(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
      
    return this.http.post('http://127.0.0.1:8000/api/student@courselevel', data, {headers:headers});
  }

  gettudentAtEachLevel(data:any){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
      
      });
      
    return this.http.post('http://127.0.0.1:8000/api/studentcourselevels', data, {headers:headers});
  }

  
  getuserinfo(data:any){
    return this.http.post('http://127.0.0.1:8000/api/user_info', data)
  }

   
  getCoursesinfoForDept(data:any){
    return this.http.post('http://127.0.0.1:8000/api/course_info_for_dept', data)
  }


  loadLevelsForCourseSelected(data:any){
    return this.http.post('http://127.0.0.1:8000/api/level_info_for_course', data)
  }
  loadStudentsFees(data:any){
    return this.http.post('http://127.0.0.1:8000/api/loadStudentsFees', data)
  }

  loadStudentsPerLevel(data:any){
    return this.http.post('http://127.0.0.1:8000/api/loadStudentsPerLevel', data)
  }


  getCoursesofDepratments(data:any){
    return this.http.post('http://127.0.0.1:8000/api/user_courses', data)
  }
  getCourselevels(data:any){
    return this.http.post('http://127.0.0.1:8000/api/course_levels_users', data)
  }
}
