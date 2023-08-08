import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SignOut } from '../../store/actions/actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
  }
  signOut() {
    this.store$.dispatch(new SignOut());
  }

}
