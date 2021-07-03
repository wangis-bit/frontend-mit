import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-confrim-dialog',
  templateUrl: './confrim-dialog.component.html',
  styleUrls: ['./confrim-dialog.component.css']
})
export class ConfrimDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialoRef:MatDialogRef<ConfrimDialogComponent>,
  
  ) { }

  ngOnInit(): void {
  }
  closeDialog(){
this.dialoRef.close(false);
  }
}
