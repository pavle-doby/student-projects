import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgcSettingsComponent } from './sgc-settings.component';

describe('SgcSettingsComponent', () => {
  let component: SgcSettingsComponent;
  let fixture: ComponentFixture<SgcSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgcSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgcSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
