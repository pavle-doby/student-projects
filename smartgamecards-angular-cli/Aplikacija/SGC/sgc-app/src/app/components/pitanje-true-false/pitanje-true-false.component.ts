import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { PitanjeTrueFalse } from '../../models/pitanja/pitanjeTrueFalse';
import { SubmintAnswer } from '../../store/actions/actions';

@Component({
  selector: 'app-pitanje-true-false',
  templateUrl: './pitanje-true-false.component.html',
  styleUrls: ['./pitanje-true-false.component.css']
})
export class PitanjeTrueFalseComponent implements OnInit {

  @Input()
  kartica:Kartica;
  @Input()
  pitanje: PitanjeTrueFalse;
  count:number;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
    this.count = 0;
  }

   submitAnswer(trueFalse: boolean) {
     if(this.count > 0)
        return;
     if(this.pitanje.proveriOdgovor(trueFalse)) {
      this.pitanje.kartica.naucena = 1;
      this.store$.dispatch(new SubmintAnswer(this.pitanje.kartica));
     } else {
       this.pitanje.kartica.naucena = -1;
      this.store$.dispatch(new SubmintAnswer(this.pitanje.kartica));
     }
     this.count++;
   }


}
