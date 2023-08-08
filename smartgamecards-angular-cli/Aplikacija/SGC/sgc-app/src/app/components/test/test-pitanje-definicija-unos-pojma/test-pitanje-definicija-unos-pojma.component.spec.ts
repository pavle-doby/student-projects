import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPitanjeDefinicijaUnosPojmaComponent } from './test-pitanje-definicija-unos-pojma.component';

describe('TestPitanjeDefinicijaUnosPojmaComponent', () => {
  let component: TestPitanjeDefinicijaUnosPojmaComponent;
  let fixture: ComponentFixture<TestPitanjeDefinicijaUnosPojmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPitanjeDefinicijaUnosPojmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPitanjeDefinicijaUnosPojmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
