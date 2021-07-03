import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorfeesbalComponent } from './tutorfeesbal.component';

describe('TutorfeesbalComponent', () => {
  let component: TutorfeesbalComponent;
  let fixture: ComponentFixture<TutorfeesbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorfeesbalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorfeesbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
