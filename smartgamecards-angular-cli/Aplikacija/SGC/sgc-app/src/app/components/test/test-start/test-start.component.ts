import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../../../models/folder';
import { Store } from '@ngrx/store';
import { State } from '../../../store';
import { GetCardsFromDataBaseForFolder, StartTrueFalseTest, StartAll, StartPunoPojmovaTest, StartPojamDefinicijeTest } from '../../../store/actions/actions';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {

  @Input()
  folder;
  dataTarget: string;
  idModal: string;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
    if(this.folder !== undefined) {
      this.dataTarget = "#" + this.folder.id;
      this.idModal = this.folder.id;
    }
  }
  startTest() {
    console.log("startTest() folder:" , this.folder);
    this.store$.dispatch(new GetCardsFromDataBaseForFolder(this.folder.id));
    // this.store$.dispatch(new StartAll());
  }
  startPunoPojmovaTest() {
    console.log("startPunoPojmovaTest() folder:" , this.folder);
    this.store$.dispatch(new StartPunoPojmovaTest(this.folder));
  }
  startTrueFalseTest() {
    console.log("StartTrueFalseTest() folder:" , this.folder);
    this.store$.dispatch(new StartTrueFalseTest(this.folder.id))
    // this.store$.dispatch(new StartAll());
  }
  startPojamDefinicijeTest() {
    console.log("startPojamDefinicijeTest() folder:" , this.folder);
    this.store$.dispatch(new StartPojamDefinicijeTest(this.folder));
  }

  startDefinicijaPojmovi() {
    // this.store$.dispatch(new StartDefinicijaPojmoviTest(this.folder));
  }
}
