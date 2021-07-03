import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsheaderComponent } from './accountsheader.component';

describe('AccountsheaderComponent', () => {
  let component: AccountsheaderComponent;
  let fixture: ComponentFixture<AccountsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
