import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deputy-principal-dashboard',
  templateUrl: './deputy-principal-dashboard.component.html',
  styleUrls: ['./deputy-principal-dashboard.component.css']
})
export class DeputyPrincipalDashboardComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  sideToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}