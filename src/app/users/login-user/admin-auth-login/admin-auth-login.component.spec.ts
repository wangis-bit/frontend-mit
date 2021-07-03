import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthLoginComponent } from './admin-auth-login.component';

describe('AdminAuthLoginComponent', () => {
  let component: AdminAuthLoginComponent;
  let fixture: ComponentFixture<AdminAuthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
