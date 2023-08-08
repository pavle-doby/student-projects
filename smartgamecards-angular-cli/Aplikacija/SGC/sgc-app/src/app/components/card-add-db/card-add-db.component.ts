import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { AddCardDatabase } from '../../store/actions/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-add-db',
  templateUrl: './card-add-db.component.html',
  styleUrls: ['./card-add-db.component.css']
})
export class CardAddDbComponent implements OnInit {

  @Input()
  card: any;

  cards$: Observable<any[]>;

  constructor(
    private store$: Store<State>
  ) {
    this.cards$ = this.store$.select(state => state.cards);
  }

  ngOnInit() {
    this.cards$.subscribe(cards => {
      for(let card of cards) {
        this.card = {
          definicija: "",
          id: -1,
          id_folder7: card.id_folder7,
          id_test8: card.id_test8,
          naucena: 0,
          pojam: "",
          posecenost: 0,
          slika: "",
          tezina: 0
        };
        break;
      }
    })
  }
  addCardToDatabase() {
    console.log("addCardToDatabase card: ", this.card);
    this.store$.dispatch(new AddCardDatabase(this.card));
  }

}
