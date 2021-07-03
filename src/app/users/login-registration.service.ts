import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) { }

  principalLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/principal-reg', data);
  }

  getDepts(){
   
    return this.http.get('http://127.0.0.1:8000/api/loginDept');
  }

  AdminLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/admin-reg', data);
  }
  DirectorLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/director-reg', data);
  }
  DpLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/depty-reg', data);
  }
  TutorLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/tutor-reg', data);
  }
  RegistarLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/registrar-reg', data);
  }
  AccountantLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/accountant-reg', data);
  }
  HodLoginReg(data:any){
   
    return this.http.post('http://127.0.0.1:8000/api/hod-reg', data);
  }
}
