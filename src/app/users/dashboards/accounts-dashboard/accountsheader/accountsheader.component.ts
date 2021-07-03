import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accountsheader',
  templateUrl: './accountsheader.component.html',
  styleUrls: ['./accountsheader.component.css']
})
export class AccountsheaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}