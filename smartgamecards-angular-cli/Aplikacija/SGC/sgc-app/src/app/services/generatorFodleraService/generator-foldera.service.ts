import { Injectable } from '@angular/core';
import { Folder } from '../../models/folder';
import { TestService } from '../testService/test.service';
import { Observable, of } from 'rxjs';

const fakeMax = 100;

@Injectable({
  providedIn: 'root'
})
export class GeneratorFolderaService {

  nizFoldera: Folder[] = [];
  constructor(private testService: TestService) { }

  getNizFoldera(n: number = fakeMax): Observable<Folder[]> {
    for(let i=0; i < n; i++) {
      this.nizFoldera.push(new Folder('id'+i,`Folder ${i}`,`Opis foldera ${i}`));
      this.testService.getKartice()
      .subscribe(kartice => {
        kartice.forEach(kartica => {
          this.nizFoldera[i].dodajKarticu(kartica);
        });
      });
    }
    console.log(this.nizFoldera);
    return of(this.nizFoldera);
  }

}
