import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodsDetailsComponent } from './hods-details.component';

describe('HodsDetailsComponent', () => {
  let component: HodsDetailsComponent;
  let fixture: ComponentFixture<HodsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
