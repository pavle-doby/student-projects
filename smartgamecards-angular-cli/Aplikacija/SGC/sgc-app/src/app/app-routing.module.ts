import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from "../app/components/card-list/card-list.component";

import { RouterModule, Routes } from "@angular/router";

import { MessagesComponent } from './components/messages/messages.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { CreateViewComponent } from './components/create-view/create-view.component';
import { CardComponent } from './components/card/card.component';
import { CardChangeComponent } from './components/card-change/card-change.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import {TestOneComponent} from './components/test-one/test-one.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { PitanjeDefinicijaUnosPojmaComponent } from './components/pitanje-definicija-unos-pojma/pitanje-definicija-unos-pojma.component';
import { TestPitanjeDefinicijaUnosPojmaComponent } from './components/test/test-pitanje-definicija-unos-pojma/test-pitanje-definicija-unos-pojma.component';
import { TestEndComponent } from './components/test/test-end/test-end.component';
import { TestPitanjeTrueFalseComponent } from './components/test/test-pitanje-true-false/test-pitanje-true-false.component';
import { TestPitanjePunoPojmovaComponent } from './components/test/test-pitanje-puno-pojmova/test-pitanje-puno-pojmova.component';
import { TestPitanjePojamDefinicijeComponent } from './components/test/test-pitanje-pojam-definicije/test-pitanje-pojam-definicije.component';
import { TestPitanjeDefinicijaPojmoviComponent } from './components/test/test-pitanje-definicija-pojmovi/test-pitanje-definicija-pojmovi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeViewComponent
  },
  {
    path: "messages",
    component: MessagesComponent
  },
  {
    path: "profile",
    component: ProfileViewComponent
  },
  {
    path: "create",
    component: CreateViewComponent
  },
  {
    path: 'card/:id',
    component: CardChangeComponent
  },
  {
    path:"test",
    component:TestOneComponent
  },
  {
    path:"testDefincijaUnosPojma",
    component: TestPitanjeDefinicijaUnosPojmaComponent
  },
  {
    path: "test-end",
    component: TestEndComponent
  },
  {
    path: "test-true-false",
    component: TestPitanjeTrueFalseComponent
  },
  {
    path: "test-pitanje-puno-pojmova",
    component: TestPitanjePunoPojmovaComponent
  },
  {
    path: "test-pitanje-pojam-definicije",
    component: TestPitanjePojamDefinicijeComponent
  },
  {
    path: "test-pitanje-definicija-pojmovi",
    component: TestPitanjeDefinicijaPojmoviComponent
  },
  {
    path: "card-list",
    component: CardListComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
