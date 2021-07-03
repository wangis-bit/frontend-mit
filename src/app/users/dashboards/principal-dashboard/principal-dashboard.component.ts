import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-dashboard',
  templateUrl: './principal-dashboard.component.html',
  styleUrls: ['./principal-dashboard.component.css']
})
export class PrincipalDashboardComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  sideToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}