import { Action } from "@ngrx/store";
import { Kartica } from "../../models/kartica";
import { Pitanje } from "../../models/pitanja/pitanje";
import { START_TRUE_FALSE_TEST, StartTrueFalseTest, START_TRUE_FALSE_TEST_CARDS, StartTrueFalseTestCards, START_ALL, FINIS_TEST, StartPunoPojmovaTestFolder, START_PUNO_POJMOVA_TEST_FOLDER, StartPojamDefinicijeTestPianja, START_POJAM_DEFINICIJE_TEST_PITANJA } from "./../actions/actions";

import { generateCards } from "../../services/cardsGenerator.services";
import { PitanjeTrueFalse } from "../../models/pitanja/pitanjeTrueFalse";
import { PitanjePunoPojmova } from "../../models/pitanja/pitanjePunoPojmova";

const initialState: Pitanje[] = [];

export default function(state: Pitanje[] = initialState, action: Action) {
    switch(action.type) {
        case FINIS_TEST: {
            state = [];
            return state.map(x=>x);
        }
        case START_POJAM_DEFINICIJE_TEST_PITANJA: {
            let questions = (action as StartPojamDefinicijeTestPianja).pitanja;
            state = questions;
            // console.log("START_POJAM_DEFINICIJE_TEST_PITANJA pitanja: ", questions);
            // console.log("START_POJAM_DEFINICIJE_TEST_PITANJA state: ", state);
            return state.map(x=>x);
        }
        case START_PUNO_POJMOVA_TEST_FOLDER: {
            let folder = (action as StartPunoPojmovaTestFolder).folder;
            state.push(new PitanjePunoPojmova(folder));
            // console.log("START_PUNO_POJMOVA_TEST_FOLDER folder: ", folder);
            // console.log("START_PUNO_POJMOVA_TEST_FOLDER state: ", state);
            return state.map(x=>x);
        }
        case START_TRUE_FALSE_TEST_CARDS: {
            let cards = (action as StartTrueFalseTestCards).cards;
            // console.log("START_TRUE_FALSE_TEST_CARDS Cards: ", cards);
            cards.forEach(card => {
                let randNum = Math.floor(Math.random() * 100);
                if(randNum%2) {
                    state.push(new PitanjeTrueFalse(card,card.pojam,card.definicija));
                } else {
                    state.push(new PitanjeTrueFalse(card, cards[randNum%cards.length].pojam, card.definicija));
                }
            });
            return state.map(x=>x);
        }
        default: {
            return state;
        }
    }
}