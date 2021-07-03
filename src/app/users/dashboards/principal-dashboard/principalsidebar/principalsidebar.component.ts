import { Component, OnInit, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-principalsidebar',
  templateUrl: './principalsidebar.component.html',
  styleUrls: ['./principalsidebar.component.css']
})
export class PrincipalsidebarComponent implements OnInit {
  public isCollapsed = true;

  @Input()
  public expanded: boolean=false;

  @Output()
  public expandedChange: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.next(this.expanded);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
