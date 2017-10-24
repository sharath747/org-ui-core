import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveNotificationComponent } from './live-notification.component';

describe('LiveNotificationComponent', () => {
  let component: LiveNotificationComponent;
  let fixture: ComponentFixture<LiveNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
