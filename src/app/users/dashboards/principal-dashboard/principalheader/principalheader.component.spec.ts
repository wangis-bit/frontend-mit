import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalheaderComponent } from './principalheader.component';

describe('PrincipalheaderComponent', () => {
  let component: PrincipalheaderComponent;
  let fixture: ComponentFixture<PrincipalheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
