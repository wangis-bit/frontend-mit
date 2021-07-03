import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodheadComponent } from './hodhead.component';

describe('HodheadComponent', () => {
  let component: HodheadComponent;
  let fixture: ComponentFixture<HodheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
