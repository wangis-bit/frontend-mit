import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfDepartmentDashboardComponent } from './head-of-department-dashboard.component';

describe('HeadOfDepartmentDashboardComponent', () => {
  let component: HeadOfDepartmentDashboardComponent;
  let fixture: ComponentFixture<HeadOfDepartmentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfDepartmentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfDepartmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
