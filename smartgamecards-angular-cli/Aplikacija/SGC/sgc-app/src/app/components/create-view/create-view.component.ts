import { Component, OnInit } from '@angular/core';
import { Folder } from '../../models/folder';

@Component({
  selector: 'app-create-view',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.css']
})
export class CreateViewComponent implements OnInit {

  folder: Folder[];
  constructor() { }

  ngOnInit() {
  }

}
