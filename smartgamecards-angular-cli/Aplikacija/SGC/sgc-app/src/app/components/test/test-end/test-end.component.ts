import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Kartica } from '../../../models/kartica';
import { Store } from '@ngrx/store';
import { State } from '../../../store';
import { SubminTestEnd, FinishTest } from '../../../store/actions/actions';

@Component({
  selector: 'app-test-end',
  templateUrl: './test-end.component.html',
  styleUrls: ['./test-end.component.css']
})
export class TestEndComponent implements OnInit {

  answers$: Observable<Kartica[]>;
  constructor(
    private store$: Store<State>
  ) {
    this.answers$ = this.store$.select(state => state.answers);
  }

  ngOnInit() {
  }

  finish() {
    this.store$.dispatch(new FinishTest());
  }
}
