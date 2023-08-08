import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAccountSettingsComponent } from './setting-account-settings.component';

describe('SettingAccountSettingsComponent', () => {
  let component: SettingAccountSettingsComponent;
  let fixture: ComponentFixture<SettingAccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
