import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../../models/folder';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { GetCardsFromDataBaseForFolder, FolderDeleteDatabase } from '../../store/actions/actions';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  @Input()
  folder: any;
  @Input()
  active: boolean;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
    this.active = true;
  }

  folderActive() {
    this.active = false;
  }
  showCardList() {
    console.log("this.folder.id: ", this.folder.id , "Dispatch GetCardsFromDataBaseForFolder");
    this.store$.dispatch(new GetCardsFromDataBaseForFolder(this.folder.id));
  }
  deleteFolder() {
    this.store$.dispatch(new FolderDeleteDatabase(this.folder))
  }

}
