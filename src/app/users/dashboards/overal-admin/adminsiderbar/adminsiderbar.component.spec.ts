import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsiderbarComponent } from './adminsiderbar.component';

describe('AdminsiderbarComponent', () => {
  let component: AdminsiderbarComponent;
  let fixture: ComponentFixture<AdminsiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsiderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
