import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSendFeedbackComponent } from './setting-send-feedback.component';

describe('SettingSendFeedbackComponent', () => {
  let component: SettingSendFeedbackComponent;
  let fixture: ComponentFixture<SettingSendFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSendFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSendFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
