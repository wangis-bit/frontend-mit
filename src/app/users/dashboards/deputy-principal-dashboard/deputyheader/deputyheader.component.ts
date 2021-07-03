import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deputyheader',
  templateUrl: './deputyheader.component.html',
  styleUrls: ['./deputyheader.component.css']
})
export class DeputyheaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}
