import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODLoginComponent } from './hodlogin.component';

describe('HODLoginComponent', () => {
  let component: HODLoginComponent;
  let fixture: ComponentFixture<HODLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HODLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HODLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
