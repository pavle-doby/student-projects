import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ClearCardState } from '../../store/actions/actions';
import { Korisnik } from '../../models/korisnik';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users$: Observable<Korisnik[]>
  user: string;
  constructor(
    private store$: Store<State>
  ) {
    this.users$ = this.store$.select( state => state.user);
   }

  ngOnInit() {
    this.user = "";
    this.users$.subscribe(users => {
      users.forEach(user => {
        this.user = user.ime;
        console.log("User ime koje se pojavljuje: ", user);
      })
    })
  }

  clearCardState() {
    this.store$.dispatch(new ClearCardState());
  }
}
