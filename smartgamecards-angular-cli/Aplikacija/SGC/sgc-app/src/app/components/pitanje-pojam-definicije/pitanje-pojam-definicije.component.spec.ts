import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjePojamDefinicijeComponent } from './pitanje-pojam-definicije.component';

describe('PitanjePojamDefinicijeComponent', () => {
  let component: PitanjePojamDefinicijeComponent;
  let fixture: ComponentFixture<PitanjePojamDefinicijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjePojamDefinicijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjePojamDefinicijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
