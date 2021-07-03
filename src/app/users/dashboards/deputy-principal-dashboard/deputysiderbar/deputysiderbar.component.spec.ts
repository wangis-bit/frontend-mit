import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputysiderbarComponent } from './deputysiderbar.component';

describe('DeputysiderbarComponent', () => {
  let component: DeputysiderbarComponent;
  let fixture: ComponentFixture<DeputysiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputysiderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputysiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
