import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SubitmPitanjeDefinicijaUnosPojma } from '../../store/actions/actions';
import { Kartica } from '../../models/kartica';

@Component({
  selector: 'app-pitanje-definicija-unos-pojma',
  templateUrl: './pitanje-definicija-unos-pojma.component.html',
  styleUrls: ['./pitanje-definicija-unos-pojma.component.css']
})
export class PitanjeDefinicijaUnosPojmaComponent implements OnInit {

  @Input()
  kartica:Kartica;
  @Input()
  definicija: string;
  @Input()
  odgovor: string;

  count: number;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
    this.count = 0;
  }

  sendAnswer(odgovor: string) {
    if(odgovor === undefined || odgovor === "")
      return;
    if(this.count++ > 0)
      return;
    if(odgovor.toLowerCase() === this.kartica.pojam.toLowerCase()) {
      this.kartica.naucena = 1;
      console.log("Kartica koja se salje: ", this.kartica);
      this.store$.dispatch(new SubitmPitanjeDefinicijaUnosPojma(this.kartica));
    } else {
      this.kartica.naucena = -1;
      console.log("Kartica koja se salje: ", this.kartica);
      this.store$.dispatch(new SubitmPitanjeDefinicijaUnosPojma(this.kartica));
    }
  }

}
