import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjePunoPojmovaComponent } from './pitanje-puno-pojmova.component';

describe('PitanjePunoPojmovaComponent', () => {
  let component: PitanjePunoPojmovaComponent;
  let fixture: ComponentFixture<PitanjePunoPojmovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjePunoPojmovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjePunoPojmovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
