import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferedListComponent } from './defered-list.component';

describe('DeferedListComponent', () => {
  let component: DeferedListComponent;
  let fixture: ComponentFixture<DeferedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeferedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeferedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
