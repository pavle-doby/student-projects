import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Kartica } from '../../../models/kartica';
import { Store } from '@ngrx/store';
import { State } from '../../../store';
import { Pitanje } from '../../../models/pitanja/pitanje';
import { SubminTestEnd } from '../../../store/actions/actions';
import { Test } from '../../../models/test';

@Component({
  selector: 'app-test-pitanje-true-false',
  templateUrl: './test-pitanje-true-false.component.html',
  styleUrls: ['./test-pitanje-true-false.component.css']
})
export class TestPitanjeTrueFalseComponent implements OnInit {

  questions$: Observable<Pitanje[]>
  answers$: Observable<Kartica[]>;
  // predhodniID: number;
  test: Test;

  constructor(
    private store$: Store<State>

  ) {
    this.questions$ = this.store$.select(state => state.questions);
    this.answers$ = this.store$.select(state => state.answers);
  }

  ngOnInit() {
  }

  submitTest() {
    this.store$.dispatch(new SubminTestEnd());
  }

}
