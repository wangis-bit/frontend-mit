import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegheadComponent } from './reghead.component';

describe('RegheadComponent', () => {
  let component: RegheadComponent;
  let fixture: ComponentFixture<RegheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
