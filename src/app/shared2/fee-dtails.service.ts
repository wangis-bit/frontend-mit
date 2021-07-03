import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeeDtailsService {

  constructor(private http:HttpClient) { }

  getId(){
   return this.http.get('http://127.0.0.1:8000/api/cs')
  }
  insertData(data:any){
    return this.http.post('http://127.0.0.1:8000/api/poscs', data);
  }
}
