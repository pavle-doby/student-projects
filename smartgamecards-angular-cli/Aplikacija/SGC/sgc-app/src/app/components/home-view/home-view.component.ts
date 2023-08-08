import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { GetFoldersFromDatabase } from '../../store/actions/actions';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  folders$: Observable<any>;

  constructor(
    private store$: Store<State>
  ) {
    this.folders$ = this.store$.select(state => this.getFolders(state));
   }

  ngOnInit() {
    this.store$.dispatch(new GetFoldersFromDatabase());
  }
  getFolders(state: State) {
    if(state === undefined) {
      console.log("STATE UNDEFINED");
      return [];
    } else {
      return Object.keys(state.folders.entities).map((id) => state.folders.entities[id]);
    }
  };

}
