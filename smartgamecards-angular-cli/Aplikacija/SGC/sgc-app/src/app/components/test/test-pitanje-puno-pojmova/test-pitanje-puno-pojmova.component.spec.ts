import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPitanjePunoPojmovaComponent } from './test-pitanje-puno-pojmova.component';

describe('TestPitanjePunoPojmovaComponent', () => {
  let component: TestPitanjePunoPojmovaComponent;
  let fixture: ComponentFixture<TestPitanjePunoPojmovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPitanjePunoPojmovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPitanjePunoPojmovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
