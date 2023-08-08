import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../store';
import { Observable } from 'rxjs';
import { Pitanje } from '../../../models/pitanja/pitanje';
import { SubminTestEnd } from '../../../store/actions/actions';

@Component({
  selector: 'app-test-pitanje-pojam-definicije',
  templateUrl: './test-pitanje-pojam-definicije.component.html',
  styleUrls: ['./test-pitanje-pojam-definicije.component.css']
})
export class TestPitanjePojamDefinicijeComponent implements OnInit {

  questions$: Observable<Pitanje[]>
  constructor(
    private store$: Store<State>
  ) {
    this.questions$ = this.store$.select(state => state.questions);
   }

  ngOnInit() {
  }

  submitTest() {
    this.store$.dispatch(new SubminTestEnd());
  }

}
