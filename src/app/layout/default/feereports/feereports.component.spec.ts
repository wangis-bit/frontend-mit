import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeereportsComponent } from './feereports.component';

describe('FeereportsComponent', () => {
  let component: FeereportsComponent;
  let fixture: ComponentFixture<FeereportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeereportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
