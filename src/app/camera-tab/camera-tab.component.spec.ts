import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTabComponent } from './camera-tab.component';

describe('CameraTabComponent', () => {
  let component: CameraTabComponent;
  let fixture: ComponentFixture<CameraTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
