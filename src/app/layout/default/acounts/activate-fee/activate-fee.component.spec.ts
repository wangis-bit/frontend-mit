import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateFeeComponent } from './activate-fee.component';

describe('ActivateFeeComponent', () => {
  let component: ActivateFeeComponent;
  let fixture: ComponentFixture<ActivateFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
