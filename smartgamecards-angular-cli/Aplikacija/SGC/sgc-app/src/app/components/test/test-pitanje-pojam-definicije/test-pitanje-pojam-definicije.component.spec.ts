import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPitanjePojamDefinicijeComponent } from './test-pitanje-pojam-definicije.component';

describe('TestPitanjePojamDefinicijeComponent', () => {
  let component: TestPitanjePojamDefinicijeComponent;
  let fixture: ComponentFixture<TestPitanjePojamDefinicijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPitanjePojamDefinicijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPitanjePojamDefinicijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
