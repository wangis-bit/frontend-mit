import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-principalheader',
  templateUrl: './principalheader.component.html',
  styleUrls: ['./principalheader.component.css']
})
export class PrincipalheaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}