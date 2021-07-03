import { Injectable } from '@angular/core';
import {  MatDialog} from '@angular/material/dialog'
import { ConfrimDialogComponent } from './confrim-dialog/confrim-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
 
  onpenConfirmDialog(msg:any){
    return this.dialog.open(ConfrimDialogComponent, {
      width:'500px',
      panelClass: 'confirm-dialog-container',
      disableClose:true,
      data:{
        message:  msg
      }
    })
  }


  ConfirmDialogForDeletingTutor(msg:any){
    return this.dialog.open(ConfrimDialogComponent, {
      width:'500px',
      panelClass: 'confirm-dialog-container',
      disableClose:true,
      data:{
        message:  msg
      }
    })
  }
}
