import { Component, OnInit, Input } from '@angular/core';
import { Kartica } from '../../models/kartica';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TestService } from "../../services/testService/test.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  kartica: Kartica;

  constructor(
    private route: ActivatedRoute, // cuva informaciju rute koja dolazi do ove komponente, iz nje moze da se izvuce id
    private testService: TestService, // odavde izvlacimo zeljenu karticu
    private location: Location // ovo sluzi za interakicju sa pretrazivacem, preko nje ce da se vratimo na mesto odakle smo dosli ovde
  ) {}

  ngOnInit() {
    // this.getKartica();
  }

  // getKartica() {
  //   const id = this.kartica !== undefined && this.kartica.id >= 0 ?
  //   this.kartica.id : +this.route.snapshot.paramMap.get('id'); // prefiskni operator + konvertuje string u number

  //   this.testService.getKartice()
  //   .subscribe(kartice => this.kartica = kartice[id]);
  // }

  goBack(): void {
    this.location.back();
  }

}
