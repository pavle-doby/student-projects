import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjePoveziComponent } from './pitanje-povezi.component';

describe('PitanjePoveziComponent', () => {
  let component: PitanjePoveziComponent;
  let fixture: ComponentFixture<PitanjePoveziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjePoveziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjePoveziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
