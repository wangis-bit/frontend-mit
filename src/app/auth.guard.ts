import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { FormService } from "./form.service";

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private router:Router, private form:FormService){}
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        if(sessionStorage.getItem('token')!=null)
      {
        return true;
      }
        this.router.navigate(['/users']);
        return false;
    }

}