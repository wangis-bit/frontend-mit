import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  

  constructor(private notify:MatSnackBar) { }
  config:MatSnackBarConfig= {
    duration:5000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
  
  }
  success(msg:any){
    this.config['panelClass']=['notification','success'];
    this.notify.open(msg, '', this.config);

  }
  delete(msg:any){
    this.config['panelClass']=['notification2','delete'];
    this.notify.open(msg, '', this.config);

  }
  
}