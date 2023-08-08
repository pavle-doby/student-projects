import { Injectable } from '@angular/core';

import { generateCards } from '../cardsGenerator.services';
import { Kartica } from '../../models/kartica';

import { Observable, of } from 'rxjs';
import { MessagesService } from '../messageService/messages.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  kartice: Kartica[] = [];

  changeCard(id: number, pojam: string, definicija: string): void {
    if(this.kartice !== undefined && this.kartice[id] !== undefined) {
      this.kartice[id].pojam = pojam;
      this.kartice[id].definicija = definicija;
    }
  }

  // pravi propery koji je singlton :D
  constructor(private messagesService: MessagesService) { }

  getKartice(): Observable<Kartica[]> {
    this.messagesService.add('TestService: fetched cards:');
    if(this.kartice !== undefined && this.kartice.length > 0) {
      this.kartice.forEach((kartica, i) => {
        const messageString = 'TestService kartica['+ i + ']: '+kartica.pojam;
        this.messagesService.add(messageString);
      });
    } else {
      this.kartice = generateCards(100);
      this.kartice.forEach((kartica, i) => {
        const messageString = 'TestService kartica['+ i + ']: '+kartica.pojam;
        this.messagesService.add(messageString);
      });
    }
    return of(this.kartice);
  }

  sendMessage(message: string): void {
    this.messagesService.add(message);
  }
}
