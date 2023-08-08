import { Verifikacija } from "../../models/verifikacija";
import { Korisnik } from "../../models/korisnik";
import { Action } from "@ngrx/store";
import { LOGIN_ACTION, LoginAction, LOGIN_ACTION_SUCCESS, LoginActionSuccess, LOGIN_ACTION_FAIL, SIGN_OUT, SIGN_UP_FAIL, SIGN_UP_EMPTY_ERROR, SIGN_UP_PASSWORD_ERROR } from "../actions/actions";
import { Kartica } from "../../models/kartica";

const initialState: Korisnik[] = [];
const errorObj = [
    { slika: 'error',
    id_korisnik: 'error',
    ocena: -1,
    ime: 'error',
    prezime: 'error',
    zanimanje: 'error',
    id_planer6: 'error',
    email7: 'error',
    id_igra8: 'error',
    sifra: 'error' }
];
let errorUser = new Korisnik('error','error','error');

export default function(state: Korisnik[] = initialState, action: Action) {
    switch(action.type) {
        case SIGN_UP_PASSWORD_ERROR: {
            console.log(action.type);
            errorUser.prezime = "passwords do not match";
            state = [];
            state.push(errorUser);
            return state.map(x=>x);
        }
        case SIGN_UP_EMPTY_ERROR: {
            console.log(action.type);
            errorUser.prezime = "Fill in all fields";
            state = [];
            state.push(errorUser);
            return state.map(x=>x);
        }
        case SIGN_OUT: {
            console.log(action.type);
            state = [];
            state.push(new Korisnik("-1","Profile","Profile"));
            return state.map(x=>x);
        }
        case LOGIN_ACTION_FAIL: {
            state = [];
            console.log(action.type);
            const user = (action as LoginActionSuccess).user[0];
            state.push(user);
            console.log(action.type + "state: ", state);
            return state.map(x=>x);
        }
        case LOGIN_ACTION_SUCCESS: {
            state = [];
            console.log(action.type);
            const user = (action as LoginActionSuccess).user[0];
            state.push(user);
            console.log(action.type + "state: ", state);
            return state.map(x=>x);
        }
        default: {
            return state;
        }
    }
}