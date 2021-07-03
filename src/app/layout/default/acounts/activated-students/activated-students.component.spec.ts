import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedStudentsComponent } from './activated-students.component';

describe('ActivatedStudentsComponent', () => {
  let component: ActivatedStudentsComponent;
  let fixture: ComponentFixture<ActivatedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
