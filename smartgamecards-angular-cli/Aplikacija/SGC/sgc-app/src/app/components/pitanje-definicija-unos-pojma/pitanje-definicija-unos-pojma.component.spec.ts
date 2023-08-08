import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjeDefinicijaUnosPojmaComponent } from './pitanje-definicija-unos-pojma.component';

describe('PitanjeDefinicijaUnosPojmaComponent', () => {
  let component: PitanjeDefinicijaUnosPojmaComponent;
  let fixture: ComponentFixture<PitanjeDefinicijaUnosPojmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjeDefinicijaUnosPojmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjeDefinicijaUnosPojmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
