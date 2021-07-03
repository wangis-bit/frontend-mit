import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarloginComponent } from './registrarlogin.component';

describe('RegistrarloginComponent', () => {
  let component: RegistrarloginComponent;
  let fixture: ComponentFixture<RegistrarloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
