import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OveralUsersComponent } from './overal-users.component';

describe('OveralUsersComponent', () => {
  let component: OveralUsersComponent;
  let fixture: ComponentFixture<OveralUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OveralUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OveralUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
