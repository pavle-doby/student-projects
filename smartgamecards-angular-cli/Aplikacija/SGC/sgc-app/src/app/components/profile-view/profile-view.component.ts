import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../models/korisnik';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { GetFoldersFromDatabaseForUser } from '../../store/actions/actions';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user$: Observable<Korisnik[]>;
  user: Korisnik;
  name: string;
  constructor(
    private store$: Store<State>
  ) {
    this.user$ = this.store$.select(state => state.user);
  }

  ngOnInit() {
    this.user$.subscribe((users) => {
      users.forEach((user) => {
        this.user = user;
        this.name = this.user.ime.toUpperCase();
        this.store$.dispatch(new GetFoldersFromDatabaseForUser(this.user));
      })
    });
  }

}
