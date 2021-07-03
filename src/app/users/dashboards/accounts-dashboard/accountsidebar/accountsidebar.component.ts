import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accountsidebar',
  templateUrl: './accountsidebar.component.html',
  styleUrls: ['./accountsidebar.component.css']
})
export class AccountsidebarComponent implements OnInit {
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