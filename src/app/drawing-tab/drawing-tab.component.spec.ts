import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingTabComponent } from './drawing-tab.component';

describe('DrawingTabComponent', () => {
  let component: DrawingTabComponent;
  let fixture: ComponentFixture<DrawingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
