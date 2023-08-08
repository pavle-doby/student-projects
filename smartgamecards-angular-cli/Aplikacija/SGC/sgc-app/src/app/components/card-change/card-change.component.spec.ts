import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChangeComponent } from './card-change.component';

describe('CardChangeComponent', () => {
  let component: CardChangeComponent;
  let fixture: ComponentFixture<CardChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
