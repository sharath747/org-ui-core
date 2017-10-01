import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDetectorComponent } from './media-detector.component';

describe('MediaDetectorComponent', () => {
  let component: MediaDetectorComponent;
  let fixture: ComponentFixture<MediaDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
