import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddDbComponent } from './card-add-db.component';

describe('CardAddDbComponent', () => {
  let component: CardAddDbComponent;
  let fixture: ComponentFixture<CardAddDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
