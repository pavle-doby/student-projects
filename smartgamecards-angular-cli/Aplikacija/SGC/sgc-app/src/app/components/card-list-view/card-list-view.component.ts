import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Kartica } from '../../models/kartica';
import { Store } from '@ngrx/store';
import { State } from '../../store';

@Component({
  selector: 'app-card-list-view',
  templateUrl: './card-list-view.component.html',
  styleUrls: ['./card-list-view.component.css']
})
export class CardListViewComponent implements OnInit {

  cards$: Observable<Kartica[]>;

  constructor(
    private store$: Store<State>
  ) {
    this.cards$ = this.store$.select(state => state.cards);
   }

  ngOnInit() {
  }

}
