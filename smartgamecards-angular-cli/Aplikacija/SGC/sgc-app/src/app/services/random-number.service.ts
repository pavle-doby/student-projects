import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  randomArray(length, numberFromZeroTo): number[] {
    let array = []
    while(array.length < length) {
        let randomnumber = Math.floor(Math.random()*numberFromZeroTo) +1;
        if(array.indexOf(randomnumber) > -1) continue;
        array[array.length] = randomnumber ;
    }
    return array.map(x => x-1);
  }
  randomNumber(poModulu) {
    return Math.floor(Math.random()*10000) % poModulu;
  }

}
