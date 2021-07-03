import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyPrincipalDashboardComponent } from './deputy-principal-dashboard.component';

describe('DeputyPrincipalDashboardComponent', () => {
  let component: DeputyPrincipalDashboardComponent;
  let fixture: ComponentFixture<DeputyPrincipalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputyPrincipalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyPrincipalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
