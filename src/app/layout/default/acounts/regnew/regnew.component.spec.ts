import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnewComponent } from './regnew.component';

describe('RegnewComponent', () => {
  let component: RegnewComponent;
  let fixture: ComponentFixture<RegnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
