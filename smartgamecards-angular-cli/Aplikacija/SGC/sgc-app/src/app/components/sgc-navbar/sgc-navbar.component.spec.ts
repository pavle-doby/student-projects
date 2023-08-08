import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgcNavbarComponent } from './sgc-navbar.component';

describe('SgcNavbarComponent', () => {
  let component: SgcNavbarComponent;
  let fixture: ComponentFixture<SgcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
