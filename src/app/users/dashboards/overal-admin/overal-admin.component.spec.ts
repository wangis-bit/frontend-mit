import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OveralAdminComponent } from './overal-admin.component';

describe('OveralAdminComponent', () => {
  let component: OveralAdminComponent;
  let fixture: ComponentFixture<OveralAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OveralAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OveralAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
