import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deputysiderbar',
  templateUrl: './deputysiderbar.component.html',
  styleUrls: ['./deputysiderbar.component.css']
})
export class DeputysiderbarComponent implements OnInit {
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