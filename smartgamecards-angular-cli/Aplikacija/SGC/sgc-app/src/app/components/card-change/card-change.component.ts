import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TestService } from '../../services/testService/test.service';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ClearCardState, ChangCardDatabase, CardDeleteDatabase } from '../../store/actions/actions';

@Component({
  selector: 'app-card-change',
  templateUrl: './card-change.component.html',
  styleUrls: ['./card-change.component.css']
})
export class CardChangeComponent implements OnInit {

  @Input()
  kartica: Kartica;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store$: Store<State>
  ) { }

  ngOnInit() {

  }

  goBack() {
    this.location.back();
    this.store$.dispatch(new ClearCardState());
  }

  chagneCard() {
    this.store$.dispatch(new ChangCardDatabase(this.kartica));
    console.log("Karitcaaaaaaaaaaaa" , this.kartica);
  }
  deleteCard() {
    this.store$.dispatch(new CardDeleteDatabase(this.kartica))
  }
}
