import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPitanjeTrueFalseComponent } from './test-pitanje-true-false.component';

describe('TestPitanjeTrueFalseComponent', () => {
  let component: TestPitanjeTrueFalseComponent;
  let fixture: ComponentFixture<TestPitanjeTrueFalseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPitanjeTrueFalseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPitanjeTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
