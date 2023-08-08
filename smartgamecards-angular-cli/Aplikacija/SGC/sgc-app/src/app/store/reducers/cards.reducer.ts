import { generateCards } from "../../services/cardsGenerator.services";
import { Kartica } from "../../models/kartica";
import { Action } from "@ngrx/store";
import { GET_CARDS_FROM_DATABASE, CARD_ADD, AddCard, START_ALL, CLEAR_CARD_STATE, CHANGE_CARD_DATABASE_SUCCESS, ChangCardDatabaseSuccess, SIGN_OUT } from "../actions/actions";
import { GET_CARDS_FROM_DATABASE_SUCCESS, GetCardsFromDataBaseSuccess } from "../actions/actions";
import { SUBIMT_PITANJE_DEF_UNOS_POJMA, SubitmPitanjeDefinicijaUnosPojma } from "../actions/actions";

import { CardAddComponent } from "../../components/card-add/card-add.component";


// const initialState: Kartica[] = generateCards(4);
const initialState: Kartica[] = [];


export default function(state: Kartica[] = initialState, action: Action) {
    switch(action.type) {
        case SIGN_OUT: {
            console.log(action.type);
            state = [];
            return state.map(x=>x);
        }
        case CHANGE_CARD_DATABASE_SUCCESS: {
            console.log(`${action.type}`);
            const cards = (action as ChangCardDatabaseSuccess).cards;
            state = cards;
            return state.map(x=>x);
        }
        case CLEAR_CARD_STATE: {
            console.log(`${action.type}`);
            state = [];
            return state.map(x=>x);
        }
        case GET_CARDS_FROM_DATABASE_SUCCESS: {
            console.log("GET_CARDS_FROM_DATABASE_SUCCESS");
            const cards = (action as GetCardsFromDataBaseSuccess).cards;
            state = cards;
            return state.map(x=>x);
        }
        case CARD_ADD: {
            const {card} = (action as AddCard);
            console.log("CARD_ADD card: ", card);
            state.push(card);
            console.log("State: ", state);
            return state.map(x => x);
        }
        default: {
            return state;
        }
    }
}