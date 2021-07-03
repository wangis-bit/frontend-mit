import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearStudentsComponent } from './clear-students.component';

describe('ClearStudentsComponent', () => {
  let component: ClearStudentsComponent;
  let fixture: ComponentFixture<ClearStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
