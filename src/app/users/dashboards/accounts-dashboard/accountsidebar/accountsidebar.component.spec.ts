import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsidebarComponent } from './accountsidebar.component';

describe('AccountsidebarComponent', () => {
  let component: AccountsidebarComponent;
  let fixture: ComponentFixture<AccountsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
