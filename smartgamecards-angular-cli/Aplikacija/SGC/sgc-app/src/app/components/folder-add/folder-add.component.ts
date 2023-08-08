import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../../models/folder';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { CreateFolderDatabase } from '../../store/actions/actions';
import { Observable } from 'rxjs';
import { Kartica } from '../../models/kartica';
import { switchMap } from 'rxjs/operators';
import { Korisnik } from '../../models/korisnik';

@Component({
  selector: 'app-folder-add',
  templateUrl: './folder-add.component.html',
  styleUrls: ['./folder-add.component.css']
})
export class FolderAddComponent implements OnInit {

  @Input()
  naslov: string;
  @Input()
  opis: string;
  @Input()
  tag: string;

  cards$: Observable<Kartica[]>;
  cards: Kartica[];
  folder: Folder;

  user$: Observable<Korisnik[]>
  user: Korisnik;

  constructor(
    private store$: Store<State>
  ) {
    this.cards$ = this.store$.select(state => state.cards);
    this.user$ = this.store$.select(state => state.user);
   }

  ngOnInit() {
    this.user$.subscribe(users => {
      users.forEach(user => this.user = user);
    });
    this.cards$.subscribe(cards => this.cards = cards);
  }

  napraviFolder(): void {
    if(this.user === undefined) {
      console.log("USer undefined");
      return;
    }
    const owner = this.user.id_korisnik;
    if(this.naslov !== undefined && this.naslov !== "" && owner !== undefined && owner !== "" ) {
      if(this.cards.length < 3) {
        console.log("NECE DA MOZE, TREBA 3!");
        // this.user = undefined
        return;
      } else {
        this.folder = new Folder(owner,this.naslov,this.opis,this.tag);
        this.folder.nizKartica = this.cards;
        console.log("Napravi FOLDER: ", this.folder);
        this.store$.dispatch(new CreateFolderDatabase(this.folder));
        // this.user = undefined
      }
    }
    console.log("NECE DA MOZE!");
    // this.user = undefined

  }
}
