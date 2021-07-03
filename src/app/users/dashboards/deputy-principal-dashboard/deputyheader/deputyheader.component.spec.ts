import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyheaderComponent } from './deputyheader.component';

describe('DeputyheaderComponent', () => {
  let component: DeputyheaderComponent;
  let fixture: ComponentFixture<DeputyheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputyheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
