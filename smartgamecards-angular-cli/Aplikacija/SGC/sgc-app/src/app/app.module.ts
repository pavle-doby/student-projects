import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { FolderAddComponent } from './components/folder-add/folder-add.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { SgcNavbarComponent } from './components/sgc-navbar/sgc-navbar.component';
import { FolderComponent } from './components/folder/folder.component';

import { CardComponent } from './components/card/card.component';

// Bootstrap

import { CarouselModule } from 'ngx-bootstrap';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { PitanjeDefinicijaPojmoviComponent } from './components/pitanje-definicija-pojmovi/pitanje-definicija-pojmovi.component';
import { CardChangeComponent } from './components/card-change/card-change.component';
import { CreateViewComponent } from './components/create-view/create-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { SettingEditProfileComponent } from './components/setting-edit-profile/setting-edit-profile.component';
import { SettingAccountSettingsComponent } from './components/setting-account-settings/setting-account-settings.component';
import { SettingNotificationsComponent } from './components/setting-notifications/setting-notifications.component';
import { SettingSendFeedbackComponent } from './components/setting-send-feedback/setting-send-feedback.component';
import { TestOneComponent } from './components/test-one/test-one.component';
import { PitanjePojamDefinicijeComponent } from './components/pitanje-pojam-definicije/pitanje-pojam-definicije.component';
import { PitanjeTrueFalseComponent } from './components/pitanje-true-false/pitanje-true-false.component';
import { PitanjePoveziComponent } from './components/pitanje-povezi/pitanje-povezi.component';
import { PitanjeDefinicijaUnosPojmaComponent } from './components/pitanje-definicija-unos-pojma/pitanje-definicija-unos-pojma.component';
import { PitanjePunoPojmovaComponent } from './components/pitanje-puno-pojmova/pitanje-puno-pojmova.component';
import { PitanjePojamUnosDefinicijeComponent } from './components/pitanje-pojam-unos-definicije/pitanje-pojam-unos-definicije.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestStartComponent } from './components/test/test-start/test-start.component';
import { TestPitanjeDefinicijaUnosPojmaComponent } from './components/test/test-pitanje-definicija-unos-pojma/test-pitanje-definicija-unos-pojma.component';
import { TestEndComponent } from './components/test/test-end/test-end.component';
import { TestPitanjeTrueFalseComponent } from './components/test/test-pitanje-true-false/test-pitanje-true-false.component';
import { TestPitanjePunoPojmovaComponent } from './components/test/test-pitanje-puno-pojmova/test-pitanje-puno-pojmova.component';
import { TestPitanjePojamDefinicijeComponent } from './components/test/test-pitanje-pojam-definicije/test-pitanje-pojam-definicije.component';
import { TestPitanjeDefinicijaPojmoviComponent } from './components/test/test-pitanje-definicija-pojmovi/test-pitanje-definicija-pojmovi.component';
import { CardAddDbComponent } from './components/card-add-db/card-add-db.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardListViewComponent } from './components/card-list-view/card-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardAddComponent,
    FolderAddComponent,
    FolderListComponent,
    SgcNavbarComponent,
    FolderComponent,
    CardComponent,
    SettingsComponent,
    MessagesComponent,
    PitanjeDefinicijaPojmoviComponent,
    CardChangeComponent,
    CreateViewComponent,
    ProfileViewComponent,
    SettingEditProfileComponent,
    SettingAccountSettingsComponent,
    SettingNotificationsComponent,
    SettingSendFeedbackComponent,
    TestOneComponent,
    PitanjePojamDefinicijeComponent,
    PitanjeTrueFalseComponent,
    PitanjePoveziComponent,
    PitanjeDefinicijaUnosPojmaComponent,
    PitanjePunoPojmovaComponent,
    PitanjePojamUnosDefinicijeComponent,
    HomeViewComponent,
    LoginComponent,
    SignupComponent,
    TestStartComponent,
    TestPitanjeDefinicijaUnosPojmaComponent,
    TestEndComponent,
    TestPitanjeTrueFalseComponent,
    TestPitanjePunoPojmovaComponent,
    TestPitanjePojamDefinicijeComponent,
    TestPitanjeDefinicijaPojmoviComponent,
    CardAddDbComponent,
    NavbarComponent,
    CardListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(effects),
    CarouselModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
