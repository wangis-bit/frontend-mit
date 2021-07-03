import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsidebarComponent } from './principalsidebar.component';

describe('PrincipalsidebarComponent', () => {
  let component: PrincipalsidebarComponent;
  let fixture: ComponentFixture<PrincipalsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
