import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferListComponent } from './defer-list.component';

describe('DeferListComponent', () => {
  let component: DeferListComponent;
  let fixture: ComponentFixture<DeferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
