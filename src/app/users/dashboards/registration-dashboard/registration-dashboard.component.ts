import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-dashboard',
  templateUrl: './registration-dashboard.component.html',
  styleUrls: ['./registration-dashboard.component.css']
})
export class RegistrationDashboardComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  sideToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
