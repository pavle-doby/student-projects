import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../../models/folder';
import { GeneratorFolderaService } from '../../services/generatorFodleraService/generator-foldera.service';
import { Store } from '@ngrx/store';
import { State } from "../../store";
import { Observable } from 'rxjs';
import { GetCardsFromDataBase, GetFoldersFromDatabase } from '../../store/actions/actions';
import * as fromFolders from "../../store/reducers/folders.reducer";
import * as fromStore from "../../store";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  // nizFoldera: Folder[] = [];
  folders$: Observable<any>;
  folderi: Folder[];

  @Input()
  naslov: string;

  constructor(
    private generatorFoldera: GeneratorFolderaService,
    private store$: Store<State>
  ) {
    this.folders$ = this.store$.select(state => this.getFolders(state));
  }

  ngOnInit() {
    // this.store$.dispatch(new GetFoldersFromDatabase());
    this.naslov = "FOLDERI"
  }
  getFolders(state: State) {
    if(state === undefined) {
      return [];
    } else {
      return Object.keys(state.folders.entities).map((id) => state.folders.entities[id]);
    }
  };
}
