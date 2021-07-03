import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashbaordComponent } from './student-dashbaord.component';

describe('StudentDashbaordComponent', () => {
  let component: StudentDashbaordComponent;
  let fixture: ComponentFixture<StudentDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
