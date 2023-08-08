import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Kartica } from '../models/kartica';
import { generateCards } from './cardsGenerator.services';
import { Folder } from '../models/folder';
import { GeneratorFolderaService } from "./generatorFodleraService/generator-foldera.service";

import * as socketIo from 'socket.io-client';
import * as myAactons from './../store/actions/actions';
import { Korisnik } from '../models/korisnik';

const SERVER_URL = 'http://localhost:3003';
// const SERVER_URL ='http://a42668de.ngrok.io';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

private socket; // soket

constructor(
  private folderGenerator: GeneratorFolderaService
) {
this.initSocket();
}

initSocket(): void {
    this.socket = socketIo(SERVER_URL);
    console.log("Client connected ond: " + SERVER_URL);

}


sendAction(action) {
  // console.log(`DB service: ${action}`);
  this.socket.emit(action);
}
sendActionWithObject(action, objcet): void {
  // console.log(`DB service: ${action} , object: ` , objcet);
    this.socket.emit(action, objcet);
}
onAction_LoginSuccess(): Observable<Korisnik[]> {
  return new Observable<Korisnik[]>(observer => {
      this.socket.on(myAactons.LOGIN_ACTION_SUCCESS, (data: Korisnik[]) => {
        // console.log(`onAction(${myAactons.LOGIN_ACTION_SUCCESS}) data:`, data);
        return observer.next(data);
      });
  });
}
onAction_LoginFail(): Observable<Korisnik[]> {
  return new Observable<Korisnik[]>(observer => {
      this.socket.on(myAactons.LOGIN_ACTION_FAIL, (data: Korisnik[]) => {
        // console.log(`onAction(${myAactons.LOGIN_ACTION_FAIL}) data:`, data);
        return observer.next(data);
      });
  });
}
onAction_FolderDeleteSuccess(): Observable<Folder[]> {
  return new Observable<Folder[]>(observer => {
      this.socket.on(myAactons.FOLDER_DELETE_DATABASE_SUCCESS, (data: Folder[]) => {
        // console.log(`onAction(${myAactons.GET_FOLDERS_FROM_DATABASE_USER_SUCCESS}) data:`, data);
        return observer.next(data);
      });
  });
}
onAction_GetFoldersFromDatabaseForUserSuccess(): Observable<Folder[]> {
  return new Observable<Folder[]>(observer => {
      this.socket.on(myAactons.GET_FOLDERS_FROM_DATABASE_USER_SUCCESS, (data: Folder[]) => {
        // console.log(`onAction(${myAactons.GET_FOLDERS_FROM_DATABASE_USER_SUCCESS}) data:`, data);
        return observer.next(data);
      });
  });
}
onAction_GetFoldersFromDatabaseSuccess(): Observable<Folder[]> {
    return new Observable<Folder[]>(observer => {
        this.socket.on(myAactons.GET_FOLDERS_FROM_DATABASE_SUCCESS, (data: Folder[]) => {
          // console.log(`onAction(${myAactons.GET_CARDS_FROM_DATABASE_SUCCESS}) data:`, data);
          return observer.next(data);
        });
    });
}
onAction_GetCardsFromDatabaseSuccess(): Observable<Kartica[]> {
  return new Observable<Kartica[]>(observer => {
      this.socket.on(myAactons.GET_CARDS_FROM_DATABASE_SUCCESS, (data: Kartica[]) => {
        // console.log(`onAction(${myAactons.GET_CARDS_FROM_DATABASE_SUCCESS}) data:`, data);
        return observer.next(data);
      });
  });
}
onAction_ChangCardDatabaseSuccess(): Observable<Kartica[]> {
  return new Observable<Kartica[]>(observer => {
      this.socket.on(myAactons.CHANGE_CARD_DATABASE_SUCCESS, (data: Kartica[]) => {
        // console.log(`onAction(${myAactons.CHANGE_CARD_DATABASE_SUCCESS}) data:`, data);
        return observer.next(data);
      });
  });
}

onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event, () => observer.next());
    });
}



  getCards(): Observable<Kartica[]> {
    console.log("DatabaseService getCards()");
    return of(generateCards(10)); // za sad
  }
  getFolders(n: number = 13): Observable<Folder[]> {
    console.log("DatabaseService getFolders()");
    return this.folderGenerator.getNizFoldera(n);
  }

}
