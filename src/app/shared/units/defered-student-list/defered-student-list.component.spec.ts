import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedStudentListComponent } from './defered-student-list.component';

describe('DeferedStudentListComponent', () => {
  let component: DeferedStudentListComponent;
  let fixture: ComponentFixture<DeferedStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeferedStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferedStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
