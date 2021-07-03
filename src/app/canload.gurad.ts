import { Injectable } from "@angular/core";
import { CanLoad, Router, Route, UrlSegment } from "@angular/router";
import { FormService } from "./form.service";

@Injectable()
export class AuthGuard2 implements CanLoad{


    constructor(private router:Router, private form:FormService){}
    canLoad(route: Route, segments: UrlSegment[]): boolean{
      
      if(sessionStorage.getItem('token')!=null){
        return true;
      }else{
        const navigation = this.router.getCurrentNavigation();
        console.log('nave',navigation);
        
        let url ='/';
        if(navigation)
        {
          url = navigation.extractedUrl.toString();
        }
        console.log('got url',url);
        this.router.navigate(['/',{queryParams:{returnto:url}}]);
        return false
      }
    }
    
  }