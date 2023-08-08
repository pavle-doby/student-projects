import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPitanjeDefinicijaPojmoviComponent } from './test-pitanje-definicija-pojmovi.component';

describe('TestPitanjeDefinicijaPojmoviComponent', () => {
  let component: TestPitanjeDefinicijaPojmoviComponent;
  let fixture: ComponentFixture<TestPitanjeDefinicijaPojmoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPitanjeDefinicijaPojmoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPitanjeDefinicijaPojmoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
