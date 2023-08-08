import { Component, OnInit, Input } from '@angular/core';
import { Pitanje } from '../../models/pitanja/pitanje';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { PitanjePojamDefinicije } from '../../models/pitanja/pitanjePojamDefinicije';
import { SubmintAnswer } from '../../store/actions/actions';

@Component({
  selector: 'app-pitanje-pojam-definicije',
  templateUrl: './pitanje-pojam-definicije.component.html',
  styleUrls: ['./pitanje-pojam-definicije.component.css']
})
export class PitanjePojamDefinicijeComponent implements OnInit {

  @Input()
  question: PitanjePojamDefinicije;

  defs: string[] = [];
  href: string;
  idTarget: string;
  answer: string;
  defForIf: string;
  count: number;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
    let ranIndex: number[] = this.randomArray(3,3);
    ranIndex.forEach((ranI, i) => {
      this.defs[i] = this.question.nizOdgovora[ranI];
    });
    this.href = "#" + this.question.kartica.id;
    this.idTarget = this.question.kartica.id + "";
    this.answer = this.question.kartica.definicija;
    this.count =0;
  }

  submitAnswer(def: string) {
    if(this.count++ > 0) {
      if(def === this.answer) {
        this.defForIf = this.answer;
      } else {
        this.defForIf = def;
      }
    } else {
      if(def === this.answer) {
        console.log("Submit Answer");
        this.question.kartica.naucena = 1;
        this.store$.dispatch(new SubmintAnswer(this.question.kartica));
        this.defForIf = this.answer;
      } else {
        this.question.kartica.naucena = -1;
        this.store$.dispatch(new SubmintAnswer(this.question.kartica));
        this.defForIf = def;
      }
    }

  }
  randomArray(length: number, numberFromZeroTo: number): number[] {
    let array = []
    while(array.length < length) {
        let randomnumber = Math.floor(Math.random()*numberFromZeroTo) +1;
        if(array.indexOf(randomnumber) > -1) continue;
        array[array.length] = randomnumber ;
    }
    return array.map(x => x-1);
  }

}
