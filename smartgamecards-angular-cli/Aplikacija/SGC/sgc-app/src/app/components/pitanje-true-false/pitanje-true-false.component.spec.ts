import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjeTrueFalseComponent } from './pitanje-true-false.component';

describe('PitanjeTrueFalseComponent', () => {
  let component: PitanjeTrueFalseComponent;
  let fixture: ComponentFixture<PitanjeTrueFalseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjeTrueFalseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjeTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
