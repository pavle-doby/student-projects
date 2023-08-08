import { Component, OnInit } from '@angular/core';
import { Pitanje } from '../../models/pitanja/pitanje';

@Component({
  selector: 'app-pitanje-definicija-pojmovi',
  templateUrl: './pitanje-definicija-pojmovi.component.html',
  styleUrls: ['./pitanje-definicija-pojmovi.component.css']
})
export class PitanjeDefinicijaPojmoviComponent implements OnInit {

  pitanje: Pitanje;
  constructor() { }

  ngOnInit() {
  }

}
