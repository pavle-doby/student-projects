import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';
// import { generateCards } from '../../services/cardsGenerator.services';
import { TestService } from '../../services/testService/test.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SelectCard, GetCardsFromDataBase, AddCard } from '../../store/actions/actions';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  // nizKartica: Kartica[];
  // selektovanaKartica: Kartica;
  @Input()
  cards: Kartica[];
  cards$: Observable<Kartica[]>;


  constructor(
    private store$: Store<State>
  ) {
    this.cards$ = this.store$.select(state => state.cards);
   }

  ngOnInit() {

  }


}
