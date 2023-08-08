import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as cardsAction from '../actions/actions';
import { switchMap,map } from 'rxjs/operators';

import * as databaseService from '../../services/database.service';
import { Action } from '@ngrx/store';

@Injectable()
export class CardsEffect {

 constructor(
     private actions$:Actions,
     private dbService:databaseService.DatabaseService) {
     }

     @Effect()
     deleteCard$ = this.actions$.ofType(cardsAction.CARD_DELETE_DATABASE)
     .pipe(
         switchMap((action) => {
             const card = (action as cardsAction.CardDeleteDatabase).card;
             console.log("Delete effects card", card);
             this.dbService.sendActionWithObject(cardsAction.CARD_DELETE_DATABASE, card);
             return this.dbService.onAction_ChangCardDatabaseSuccess()
             .pipe(
                 map((cards) => new cardsAction.ChangCardDatabaseSuccess(cards))
             )
         })
     )

     @Effect()
     addCard$ = this.actions$.ofType(cardsAction.CARD_ADD_DATABASE)
     .pipe(
         switchMap((action) => {
             const card = (action as cardsAction.AddCardDatabase).card;
            //  console.log("effects card", card);
             this.dbService.sendActionWithObject(cardsAction.CARD_ADD_DATABASE, card);
             return this.dbService.onAction_ChangCardDatabaseSuccess()
             .pipe(
                 map((cards) => new cardsAction.ChangCardDatabaseSuccess(cards))
             )
         })
     )
     @Effect()
     changeCardDatabase$ = this.actions$.ofType(cardsAction.CHANGE_CARD_DATABASE)
     .pipe(
         switchMap((action) => {
             const card = (action as cardsAction.ChangCardDatabase).card;
             this.dbService.sendActionWithObject(cardsAction.CHANGE_CARD_DATABASE, card);
             return this.dbService.onAction_ChangCardDatabaseSuccess()
             .pipe(
                 map((cards) => new cardsAction.ChangCardDatabaseSuccess(cards))
             )
         })
     )

     @Effect()
     getCardFotTestTrueFalse$ = this.actions$.ofType(cardsAction.START_TRUE_FALSE_TEST)
     .pipe(
         switchMap((action) => {
             const folder_id = (action as cardsAction.StartTrueFalseTest).id_folder;
             this.dbService.sendActionWithObject(cardsAction.GET_CARDS_FROM_DATABASE_FOR_FOLDER, folder_id);
             return this.dbService.onAction_GetCardsFromDatabaseSuccess()
             .pipe(
                 map((cards) => new cardsAction.StartTrueFalseTestCards(cards))
             )
         })
     )
     @Effect()
     createFolder$ = this.actions$.ofType(cardsAction.GET_CARDS_FROM_DATABASE_FOR_FOLDER)
     .pipe(
         switchMap((action) => {
             const folder_id = (action as cardsAction.GetCardsFromDataBaseForFolder).id_folder;
             console.log(`Effect GetCardsFromDataBaseForFolder ${folder_id}`);
             this.dbService.sendActionWithObject(cardsAction.GET_CARDS_FROM_DATABASE_FOR_FOLDER, folder_id);
             return this.dbService.onAction_GetCardsFromDatabaseSuccess()
             .pipe(
                 map((cards) => new cardsAction.GetCardsFromDataBaseSuccess(cards))
             )
         })
     )
 @Effect()
 getCards$=this.actions$.ofType(cardsAction.GET_CARDS_FROM_DATABASE)
  .pipe(
    switchMap(()=> {
        return this.dbService.getCards()
        .pipe(map(cards=>new cardsAction.GetCardsFromDataBaseSuccess(cards)));
    }));
}