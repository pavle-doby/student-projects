import { Component, OnInit } from '@angular/core';
import { Kartica } from '../../../models/kartica';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../store';
import { SubmitTestPitanjeDefinicijaUnosPojma } from '../../../store/actions/actions';

@Component({
  selector: 'app-test-pitanje-definicija-unos-pojma',
  templateUrl: './test-pitanje-definicija-unos-pojma.component.html',
  styleUrls: ['./test-pitanje-definicija-unos-pojma.component.css']
})
export class TestPitanjeDefinicijaUnosPojmaComponent implements OnInit {

  cards$: Observable<Kartica[]>;
  answers$: Observable<Kartica[]>;
  constructor(
    private store$: Store<State>
  ) {
    this.answers$ = this.store$.select(state => state.answers);
    this.cards$ = this.store$.select(state => state.cards);
   }

  ngOnInit() {

  }
  submitTest() {
    this.store$.dispatch(new SubmitTestPitanjeDefinicijaUnosPojma());
  }
}
