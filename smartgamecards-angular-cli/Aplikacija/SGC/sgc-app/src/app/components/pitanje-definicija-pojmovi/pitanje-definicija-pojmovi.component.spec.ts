import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitanjeDefinicijaPojmoviComponent } from './pitanje-definicija-pojmovi.component';

describe('PitanjeDefinicijaPojmoviComponent', () => {
  let component: PitanjeDefinicijaPojmoviComponent;
  let fixture: ComponentFixture<PitanjeDefinicijaPojmoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitanjeDefinicijaPojmoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitanjeDefinicijaPojmoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
