import { Folder } from "../../models/folder";
import { Action } from "@ngrx/store";
import { GET_FOLDERS_FROM_DATABASE_SUCCESS, GetFoldersFromDatabaseSuccess, START_ALL, LOGIN_ACTION_SUCCESS, LoginActionSuccess, GET_FOLDERS_FROM_DATABASE_USER_SUCCESS, GetFoldersFromDatabaseForUserSuccess, SIGN_OUT, FolderDeleteDatabaseSuccess, FOLDER_DELETE_DATABASE_SUCCESS } from "../actions/actions";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector } from '@ngrx/store';

// const initialState: Folder[] = [];


export const folderAdapter: EntityAdapter<Folder> = createEntityAdapter<Folder>();
export interface State extends EntityState<Folder> {};
const defaultState = {
    ids: ['-1'],
    entities: {
        '-1': {
            id: '-1',
            ocena: 0,
            ime: 'default',
            opis: 'def',
            slika: 'slika',
            tag: 'tag',
            id_igre6: '',
            id_korisnik: 'default',
            ukupan_broj_poena: 0
        }
    }
}
// const initialState: State = folderAdapter.getInitialState(defaultState);
const initialState: State = folderAdapter.getInitialState();




// export default function(state: Folder[] = initialState, action: Action) {
export default function(state: State = initialState, action: Action) {
    switch(action.type) {
        case FOLDER_DELETE_DATABASE_SUCCESS: {
            console.log(action.type);
            const folderList = (action as FolderDeleteDatabaseSuccess).folders;
            return folderAdapter.addAll(folderList, state);
            // console.log("State:", state );
            // return state.map(x=>x);
        }
        case SIGN_OUT: {
            console.log(action.type);
            return folderAdapter.removeAll(state);
            // state = [];
            // return state.map(x=>x);
        }
        case GET_FOLDERS_FROM_DATABASE_USER_SUCCESS: {
            console.log(action.type);
            const folderList = (action as GetFoldersFromDatabaseForUserSuccess).folders;
            folderAdapter.removeAll(state);
            return folderAdapter.addAll(folderList, state);
        }
        case GET_FOLDERS_FROM_DATABASE_SUCCESS: {
            console.log(action.type);
            const folderList = (action as GetFoldersFromDatabaseSuccess).folders;
            folderAdapter.removeAll(state);
            return folderAdapter.addAll(folderList,state);
        }
        default: {
            console.log("DEFAULT FOLDER STATE");
            return state;
        }
    }
}
// Create the default selectors

export const getFolderState = createFeatureSelector<State>('folder');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = folderAdapter.getSelectors(getFolderState);
