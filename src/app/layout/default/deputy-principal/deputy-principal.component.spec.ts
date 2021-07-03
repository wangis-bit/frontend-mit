import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyPrincipalComponent } from './deputy-principal.component';

describe('DeputyPrincipalComponent', () => {
  let component: DeputyPrincipalComponent;
  let fixture: ComponentFixture<DeputyPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputyPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
