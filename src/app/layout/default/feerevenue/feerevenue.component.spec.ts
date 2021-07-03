import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeerevenueComponent } from './feerevenue.component';

describe('FeerevenueComponent', () => {
  let component: FeerevenueComponent;
  let fixture: ComponentFixture<FeerevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeerevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeerevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
