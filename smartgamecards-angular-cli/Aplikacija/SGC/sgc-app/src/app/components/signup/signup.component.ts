import { Component, OnInit, Input } from '@angular/core';
import { Korisnik } from '../../models/korisnik';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SignUp, SignUpEmptyError, SignUpPasswordError } from '../../store/actions/actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  user: Korisnik;
  @Input()
  username: string;
  @Input()
  passwd2: string;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
    this.user = new Korisnik(-1, "", "");
  }

  signUp() {
    if(this.user.sifra === this.passwd2 ) {
      if(this.user.ime !== undefined && this.user.ime !== ""
      && this.user.prezime !== undefined && this.user.prezime !== ""
      && this.username !== undefined && this.username !== "" ) {
        this.user.zanimanje = this.username;
        this.store$.dispatch(new SignUp(this.user))
        console.log("Sign up usera: ", this.user);
        this.user.ime = "";
        this.user.prezime = "";
        this.username = "";
        this.user.sifra = "";
        this.passwd2 = "";
      } else {
        this.store$.dispatch(new SignUpEmptyError())
      console.log("Sign up SignUpEmptyError: ", this.user);
      this.user.ime = "";
      this.user.prezime = "";
      this.username = "";
      this.user.sifra = "";
      this.passwd2 = "";

      }
    } else {
    this.store$.dispatch(new SignUpPasswordError())
    console.log("Sign up SignUpPasswordError: ", this.user);
    this.user.ime = "";
    this.user.prezime = "";
    this.username = "";
    this.user.sifra = "";
    this.passwd2 = "";
    }
  }

}
