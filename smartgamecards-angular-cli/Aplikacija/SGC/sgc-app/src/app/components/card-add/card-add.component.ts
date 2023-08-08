import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { AddCard } from '../../store/actions/actions';


@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {

  @Input()
  id_folder: string;
  card: Kartica;
  cardList$: Observable<Kartica[]>;

  constructor(private stor$: Store<State>) {
    // this.card$ = this.stor$.select(state => state.selectedCard);
    this.cardList$ = this.stor$.select( state => state.cards);
   }

  ngOnInit() {
    this.card = new Kartica(-1,"","");
  }

  dodajKarticu(pojam: string, definicija: string, tag: string) {

    this.stor$.dispatch(new AddCard(new Kartica(10,pojam,definicija,"")));
    console.log("Kartica koja se dodaje u state: ", new Kartica(10,pojam,definicija,""));

  }

}
