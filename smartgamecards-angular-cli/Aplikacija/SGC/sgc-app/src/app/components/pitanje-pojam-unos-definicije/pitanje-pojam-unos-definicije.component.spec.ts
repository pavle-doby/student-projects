import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjePojamUnosDefinicijeComponent } from './pitanje-pojam-unos-definicije.component';

describe('PitanjePojamUnosDefinicijeComponent', () => {
  let component: PitanjePojamUnosDefinicijeComponent;
  let fixture: ComponentFixture<PitanjePojamUnosDefinicijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjePojamUnosDefinicijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjePojamUnosDefinicijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
