import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearFinanceComponent } from './clear-finance.component';

describe('ClearFinanceComponent', () => {
  let component: ClearFinanceComponent;
  let fixture: ComponentFixture<ClearFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
