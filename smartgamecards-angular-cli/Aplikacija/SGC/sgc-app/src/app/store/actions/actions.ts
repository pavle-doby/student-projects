import { Kartica } from "../../models/kartica";

import {Action} from '@ngrx/store';
import { Folder } from "../../models/folder";
import { Verifikacija } from "../../models/verifikacija";
import { Korisnik } from "../../models/korisnik";

export const CARD_SELECT = "CARD_SELECT";
export const CARD_ADD = "CARD_ADD";

export const GET_CARDS_FROM_DATABASE = "GET_CARDS_FROM_DATABASE";
export const GET_CARDS_FROM_DATABASE_FOR_FOLDER = "GET_CARDS_FROM_DATABASE_FOR_FOLDER";
export const GET_CARDS_FROM_DATABASE_SUCCESS = "GET_CARDS_FROM_DATABASE_SUCCESS";


export const GET_FOLDERS_FROM_DATABASE = "GET_FOLDERS_FROM_DATABASE";
export const GET_FOLDERS_FROM_DATABASE_SUCCESS = "GET_FOLDERS_FROM_DATABASE_SUCCESS";

export const CREATE_FOLDER_DATABASE = "CREATE_FOLDER_DATABASE";

export const SUBIMT_PITANJE_DEF_UNOS_POJMA = "SUBIMT_PIT_DEF_UNO_POJMA";
export const SUBIMT_TEST_PITANJE_DEF_UNOS_POJMA = "SUBIMT_TEST_PITANJE_DEF_UNOS_POJMA";

export const START_TRUE_FALSE_TEST = "START_TRUE_FALSE_TEST";
export const START_TRUE_FALSE_TEST_CARDS = "START_TRUE_FALSE_TEST_CARDS";

export const SUBMIT_TEST_END = "SUBMIT_TEST_END";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";

export const CARD_ADD_DATABASE = "CARD_ADD_DATABASE";
export const CARD_ADD_DATABASE_SUCCESS = "CARD_ADD_DATABASE_SUCCESS";

export const CARD_DELETE_DATABASE = "CARD_DELETE_DATABASE";
export const CARD_DELETE_DATABASE_SUCCESS = "CARD_DELETE_DATABASE";

export const FINIS_TEST = "FINIS_TEST";

export const START_ALL = "START_ALL";

export const START_PUNO_POJMOVA_TEST = "START_PUNO_POJMOVA_TEST";
export const START_PUNO_POJMOVA_TEST_FOLDER = "START_PUNO_POJMOVA_TEST_FOLDER";

export const START_POJAM_DEFINICIJE_TEST = "START_POJAM_DEFINICIJE_TEST";
export const START_POJAM_DEFINICIJE_TEST_PITANJA = "START_POJAM_DEFINICIJE_TEST_PITANJA";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGIN_ACTION_SUCCESS = "LOGIN_ACTION_SUCCESS";
export const LOGIN_ACTION_FAIL = "LOGIN_ACTION_FAIL";

export const SIGN_OUT = "SIGN_OUT";

export const GET_FOLDERS_FROM_DATABASE_USER  = "GET_FOLDERS_FROM_DATABASE_USER";
export const GET_FOLDERS_FROM_DATABASE_USER_SUCCESS = "GET_FOLDERS_FROM_DATABASE_USER_SUCCESS";

export const CLEAR_CARD_STATE = "CLEAR_CARD_STATE";
export const CHANGE_CARD_DATABASE = "CHANGE_CARD_DATABASE";
export const CHANGE_CARD_DATABASE_SUCCESS = "CHANGE_CARD_DATABASE_SUCCESS";

export const FOLDER_DELETE_DATABASE = "FOLDER_DELETE_DATABASE";
export const FOLDER_DELETE_DATABASE_SUCCESS = "FOLDER_DELETE_DATABASE_SUCCESS";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const SIGN_UP_EMPTY_ERROR = "SIGN_UP_EMPTY_ERROR";
export const SIGN_UP_PASSWORD_ERROR = "SIGN_UP_PASSWORD_ERROR";


export class SignUp implements Action {
    type: string = SIGN_UP;
    constructor(public user: Korisnik) {}
}
export class SignUpFail implements Action {
    type: string = SIGN_UP_FAIL;
    constructor(public user: Korisnik) {}
}
export class SignUpEmptyError implements Action {
    type: string = SIGN_UP_EMPTY_ERROR;
    constructor() {}
}
export class SignUpPasswordError implements Action {
    type: string = SIGN_UP_PASSWORD_ERROR;
    constructor() {}
}
export class FolderDeleteDatabaseSuccess implements Action {
    type: string = FOLDER_DELETE_DATABASE_SUCCESS;
    constructor(public folders: any[]) {}
}
export class FolderDeleteDatabase implements Action {
    type: string = FOLDER_DELETE_DATABASE;
    constructor(public folder: any) {}
}
export class CardDeleteDatabase implements Action {
    type: string = CARD_DELETE_DATABASE;
    constructor(public card: Kartica) {}
}
export class CardDeleteDatabaseSuccess implements Action {
    type: string = CARD_DELETE_DATABASE_SUCCESS;
    constructor(public cards: Kartica[]) {}
}

export class AddCardDatabase implements Action {
    type: string = CARD_ADD_DATABASE;
    constructor(public card: any) {}
}
export class AddCardDatabaseSuccess implements Action {
    type: string = CARD_ADD_DATABASE_SUCCESS;
    constructor(public cards: Kartica[]) {}
}

export class ClearCardState implements Action {
    type: string = CLEAR_CARD_STATE;
    constructor() {}
}

export class ChangCardDatabase implements Action {
    type: string = CHANGE_CARD_DATABASE;
    constructor(public card: Kartica) {}
}
export class ChangCardDatabaseSuccess implements Action {
    type: string = CHANGE_CARD_DATABASE_SUCCESS;
    constructor(public cards: any[]) {}
}

export class GetFoldersFromDatabaseForUser implements Action {
    type: string = GET_FOLDERS_FROM_DATABASE_USER;
    constructor(public user: Korisnik) {}
}

export class GetFoldersFromDatabaseForUserSuccess implements Action {
    type: string = GET_FOLDERS_FROM_DATABASE_USER_SUCCESS;
    constructor(public folders: Folder[]) {}
}
export class SignOut implements Action {
    type: string = SIGN_OUT;
    constructor() {}
}
export class LoginAction implements Action {
    type: string = LOGIN_ACTION;
    constructor(public login: Verifikacija) {}
}
export class LoginActionSuccess implements Action {
    type: string = LOGIN_ACTION_SUCCESS;
    constructor(public user: Korisnik[]) {}
}
export class LoginActionFail implements Action {
    type: string = LOGIN_ACTION_FAIL;
    constructor(public user: Korisnik[]) {}
}

export class StartPojamDefinicijeTest implements Action {
    type: string = START_POJAM_DEFINICIJE_TEST;
    constructor(public folder: any) {}
}
export class StartPojamDefinicijeTestPianja implements Action {
    type: string = START_POJAM_DEFINICIJE_TEST_PITANJA;
    constructor(public pitanja: any[]) {}
}

export class StartPunoPojmovaTestFolder implements Action {
    type: string = START_PUNO_POJMOVA_TEST_FOLDER;
    constructor(public folder: any) {}
}

export class StartPunoPojmovaTest implements Action {
    type: string = START_PUNO_POJMOVA_TEST;
    constructor(public folder: any) {}
}
export class StartAll implements Action {
    type: string = START_ALL;
    constructor() {}
}

export class FinishTest implements Action {
    type: string = FINIS_TEST;
    constructor() {}
}
export class SubminTestEnd implements Action {
    type: string = SUBMIT_TEST_END;
    constructor() {}
}
export class StartTrueFalseTestCards implements Action {
    type: string = START_TRUE_FALSE_TEST_CARDS;
    constructor(public cards: Kartica[]) {}
}
export class StartTrueFalseTest implements Action {
    type: string = START_TRUE_FALSE_TEST;
    constructor(public id_folder: string) {}
}

export class SubmintAnswer implements Action {
    type: string = SUBMIT_ANSWER;
    constructor(public kartica: Kartica) {}
}

export class SubmitTestPitanjeDefinicijaUnosPojma implements Action {
    type: string = SUBIMT_TEST_PITANJE_DEF_UNOS_POJMA;
    constructor() {}
}

export class SubitmPitanjeDefinicijaUnosPojma implements Action {
    type: string = SUBIMT_PITANJE_DEF_UNOS_POJMA;
    constructor (public kartica: Kartica) {    }
}

export class GetCardsFromDataBaseForFolder implements Action {
    type: string = GET_CARDS_FROM_DATABASE_FOR_FOLDER;
    constructor(public id_folder: string) {}
}
export class CreateFolderDatabase implements Action {
    type: string = CREATE_FOLDER_DATABASE;
    constructor(public folder: Folder) {}
}
export class GetFoldersFromDatabase implements Action {
    type: string = GET_FOLDERS_FROM_DATABASE;
    constructor() {}
}

export class GetFoldersFromDatabaseSuccess implements Action {
    type: string = GET_FOLDERS_FROM_DATABASE_SUCCESS;
    constructor(public folders: Folder[]) {}
}

export class GetCardsFromDataBase implements Action {
    type: string = GET_CARDS_FROM_DATABASE;
    constructor() {}
}
export class GetCardsFromDataBaseSuccess implements Action {
    type: string = GET_CARDS_FROM_DATABASE_SUCCESS;
    constructor(public cards: Kartica[]) {}
}

export class AddCard implements Action {
    type: string = CARD_ADD;
    constructor(public card: Kartica) {}
}

export class SelectCard implements  Action {
    type: string = CARD_SELECT;
    constructor(public card: Kartica) {
        console.log("selectCard card: ", card);
    }
}

