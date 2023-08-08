import { Kartica } from "../models/kartica";
import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import selectCardReducer from "./reducers/select-card.reducer";
import getCardsFromDatabaseReducer from "./reducers/cards.reducer";
import foldersReducer from "./reducers/folders.reducer";
import answerReducer from "./reducers/answer.reducer";
import questionsReducer from "./reducers/questions.reducer";


import { Folder } from "../models/folder";
import { Pitanje } from "../models/pitanja/pitanje";
import { Korisnik } from "../models/korisnik";
import userReducer from "./reducers/user.reducer";
import { EntityState } from "../../../node_modules/@ngrx/entity";

import * as fromFolders from "../store/reducers/folders.reducer";


export * from './effects';

export interface State {
    user: Korisnik[],
    questions: Pitanje[],
    answers: Kartica[],
    cards: Kartica[],
    folders: fromFolders.State,
    selectedCard: Kartica
}

export const rootReducer: ActionReducerMap<any> = {
    user: userReducer,
    questions: questionsReducer,
    answers: answerReducer,
    cards: getCardsFromDatabaseReducer,
    selectedCard: selectCardReducer,
    folders: foldersReducer
}

export const selectUser = (state: State) => state.user;
export const selectState = (state: State) => state;

export const selectFoldersEntities = createSelector(
    selectState,
    fromFolders.selectAll
);

export const selectAllFolders = createSelector(
    selectFoldersEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id])
    }
);