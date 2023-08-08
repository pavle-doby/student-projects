import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { PitanjePunoPojmova } from '../../models/pitanja/pitanjePunoPojmova';
import { Pitanje } from '../../models/pitanja/pitanje';
import { Folder } from '../../models/folder';
import { SubmintAnswer, SubminTestEnd, FinishTest } from '../../store/actions/actions';

@Component({
  selector: 'app-pitanje-puno-pojmova',
  templateUrl: './pitanje-puno-pojmova.component.html',
  styleUrls: ['./pitanje-puno-pojmova.component.css']
})
export class PitanjePunoPojmovaComponent implements OnInit {

  @Input()
  term:string;

  termList: string[];
  questions$: Observable<Pitanje[]>;
  question: PitanjePunoPojmova;

  folder: Folder;
  field: string;
  cards: Kartica[];
  count: number;
  n: number;
  bool: boolean;
  answer: Kartica;
  me: boolean;

  constructor(
    private store$: Store<State>
  ) {
    this.questions$ = this.store$.select(state => state.questions);
    this.me = true;
   }

  ngOnInit() {
    this.count=0;
    this.termList = [];
    this.answer = new Kartica(0,'answer','answer');
    this.questions$.subscribe((questions) => {
      console.log("Sta dobijam u SUBSCRIBE: ", questions);

      questions.map((question) => {
        if(question instanceof PitanjePunoPojmova) {
          this.question = question;
          console.log("Celo pitanje: ", question);
          if(question.folder !== null) {
            this.folder = question.folder;
            this.cards = question.folder.nizKartica;
            this.n = this.cards.length;
          }
        }

      })
    })
  }
  submitTest() {
    this.store$.dispatch(new SubminTestEnd());
  }

  finish() {
    this.store$.dispatch(new FinishTest());
  }
  next(term: string) {
    if(this.count === this.n)
      return;
    if(term !== undefined && term !== "") {
      let index = this.cards.findIndex((card) => card.pojam.toUpperCase() === term.toUpperCase());
      if(index !== -1) {
        this.termList.push(term.toUpperCase());

        if(++this.count === this.n) {
          this.termList.push("WELL DONE!");
          this.termList.push("YOU KNOW ALL TERMS!");
          return;
        }
      } else {

        this.termList.push("WRONG");
      }
    }

  }

}
