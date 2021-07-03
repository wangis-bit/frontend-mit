import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeactivationComponent } from './feeactivation.component';

describe('FeeactivationComponent', () => {
  let component: FeeactivationComponent;
  let fixture: ComponentFixture<FeeactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeactivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
