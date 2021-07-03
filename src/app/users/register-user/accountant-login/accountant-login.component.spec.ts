import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantLoginComponent } from './accountant-login.component';

describe('AccountantLoginComponent', () => {
  let component: AccountantLoginComponent;
  let fixture: ComponentFixture<AccountantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
