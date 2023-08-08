import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { store } from '@angular/core/src/render3/instructions';
import { Verifikacija } from '../../models/verifikacija';
import { LoginAction } from '../../store/actions/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  username: string;
  @Input()
  password: string;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
  }

  login() {
    this.store$.dispatch(new LoginAction(new Verifikacija(this.username,this.password)));
    this.username = "";
    this.password = "";
  }

}
