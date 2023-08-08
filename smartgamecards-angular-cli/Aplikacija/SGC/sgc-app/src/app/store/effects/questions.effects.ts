import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as questionActions from '../actions/actions';
import { switchMap,map } from 'rxjs/operators';

import * as databaseService from '../../services/database.service';
import * as randomSer from '../../services/random-number.service';

import { Action } from '@ngrx/store';
import { Folder } from '../../models/folder';
import { Pitanje } from '../../models/pitanja/pitanje';
import { PitanjePojamDefinicije } from '../../models/pitanja/pitanjePojamDefinicije';

@Injectable()
export class QuestionsEffect {

 constructor(
     private actions$:Actions,
     private dbService:databaseService.DatabaseService,
     private randomService: randomSer.RandomNumberService
    ) {
     }
     @Effect()
     getQuestionsForTestPojamDefinicije$ = this.actions$.ofType(questionActions.START_POJAM_DEFINICIJE_TEST)
     .pipe(
         switchMap((action) => {
             let folder = (action as questionActions.StartPojamDefinicijeTest).folder;
             this.dbService.sendActionWithObject(questionActions.GET_CARDS_FROM_DATABASE_FOR_FOLDER, folder.id);
             return this.dbService.onAction_GetCardsFromDatabaseSuccess()
             .pipe(
                 map((cards) => {
                    let questions: Pitanje[] = [];
                    let defs: string[] = [];
                    cards.forEach((card,i) => {
                        defs = [];
                        let random = this.randomService.randomNumber(cards.length);
                        let random1 = this.randomService.randomNumber(cards.length);
                        while(random === i) {
                            random = this.randomService.randomNumber(cards.length);
                        }
                        while(random1 === random || random1 === i) {
                            random1 = this.randomService.randomNumber(cards.length);
                        }
                        defs.push(card.definicija);
                        defs.push(cards[random].definicija);
                        defs.push(cards[random1].definicija);

                        questions.push(new Pitanje(card,null,defs));
                    });
                    return new questionActions.StartPojamDefinicijeTestPianja(questions);
                 })
             )
         })
     )

     @Effect()
     getCardForPunoPojmovaTest$ = this.actions$.ofType(questionActions.START_PUNO_POJMOVA_TEST)
     .pipe(
         switchMap((action) => {
             let folder = (action as questionActions.StartPunoPojmovaTest).folder;
             this.dbService.sendActionWithObject(questionActions.GET_CARDS_FROM_DATABASE_FOR_FOLDER, folder.id);
             return this.dbService.onAction_GetCardsFromDatabaseSuccess()
             .pipe(
                 map((cards) => {
                    folder.nizKartica = cards;
                    return new questionActions.StartPunoPojmovaTestFolder(folder);
                 })
             )
         })
     )

}