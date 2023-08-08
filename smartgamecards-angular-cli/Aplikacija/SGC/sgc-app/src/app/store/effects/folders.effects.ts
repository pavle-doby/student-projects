import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap,map } from 'rxjs/operators';

import * as databaseService from '../../services/database.service';
import * as myActions from '../actions/actions';
import { Folder } from '../../models/folder';


@Injectable()
export class FoldersEffect {
    constructor(
        private action$: Actions,
        private dbService: databaseService.DatabaseService
    ) {
    }

    @Effect()
    folderDelete$ = this.action$.ofType(myActions.FOLDER_DELETE_DATABASE)
    .pipe(
        switchMap((action) => {
            const folder = (action as myActions.FolderDeleteDatabase).folder;
            this.dbService.sendActionWithObject(myActions.FOLDER_DELETE_DATABASE,folder);
            return this.dbService.onAction_FolderDeleteSuccess()
            .pipe(
                map(folders => new myActions.FolderDeleteDatabaseSuccess(folders))
            );
        })
    );

    @Effect()
    getFoldersForUser$ = this.action$.ofType(myActions.GET_FOLDERS_FROM_DATABASE_USER)
    .pipe(
        switchMap((action) => {
            const user = (action as myActions.GetFoldersFromDatabaseForUser).user;
            this.dbService.sendActionWithObject(myActions.GET_FOLDERS_FROM_DATABASE_USER,user);
            return this.dbService.onAction_GetFoldersFromDatabaseForUserSuccess()
            .pipe(
                map(folders => new myActions.GetFoldersFromDatabaseForUserSuccess(folders))// da se izmeni..
            );
        })
    );

    @Effect()
    signUpUser$ = this.action$.ofType(myActions.SIGN_UP)
    .pipe(
        switchMap((action) => {
            const userSignUp = (action as myActions.SignUp).user;
            this.dbService.sendActionWithObject(myActions.SIGN_UP, userSignUp);
            return this.dbService.onAction_LoginSuccess()
            .pipe(
                map((user) => new myActions.LoginActionSuccess(user))
            )
        })
    );
    @Effect()
    loginUser$ = this.action$.ofType(myActions.LOGIN_ACTION)
    .pipe(
        switchMap((action) => {
            const login = (action as myActions.LoginAction).login;
            this.dbService.sendActionWithObject(myActions.LOGIN_ACTION, login);
            return this.dbService.onAction_LoginSuccess()
            .pipe(
                map((user) => new myActions.LoginActionSuccess(user))
            )
        })
    );
    @Effect()
    loginUserFail$ = this.action$.ofType(myActions.LOGIN_ACTION)
    .pipe(
        switchMap((action) => {
            return this.dbService.onAction_LoginFail()
            .pipe(
                map((user) => {
                    console.log("onAction_LoginFail()");
                    return new myActions.LoginActionFail(user);
                })
            )
        })
    );

    @Effect()
    createFolder$ = this.action$.ofType(myActions.CREATE_FOLDER_DATABASE)
    .pipe(
        switchMap((action) => {
            const folder = (action as myActions.CreateFolderDatabase).folder;
            this.dbService.sendActionWithObject(myActions.CREATE_FOLDER_DATABASE, folder);
            return this.dbService.onAction_GetFoldersFromDatabaseSuccess()
            .pipe(
                map((folders) => new myActions.GetFoldersFromDatabaseSuccess(folders))
            )
        })
    )
    @Effect()
    getFolders$ = this.action$.ofType(myActions.GET_FOLDERS_FROM_DATABASE)
    .pipe(
        switchMap(() => {
            // this.dbService.initSocket();
            this.dbService.sendAction(myActions.GET_FOLDERS_FROM_DATABASE);
            return this.dbService.onAction_GetFoldersFromDatabaseSuccess()
            .pipe(
                map(folders => new myActions.GetFoldersFromDatabaseSuccess(folders))
            );
        })
    )
}