import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsidebarComponent } from './regsidebar.component';

describe('RegsidebarComponent', () => {
  let component: RegsidebarComponent;
  let fixture: ComponentFixture<RegsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
