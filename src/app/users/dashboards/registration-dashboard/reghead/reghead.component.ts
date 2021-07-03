import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reghead',
  templateUrl: './reghead.component.html',
  styleUrls: ['./reghead.component.css']
})
export class RegheadComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSideBarForMe.emit();
  }
}
