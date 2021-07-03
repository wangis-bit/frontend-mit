import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DploginComponent } from './dplogin.component';

describe('DploginComponent', () => {
  let component: DploginComponent;
  let fixture: ComponentFixture<DploginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DploginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
