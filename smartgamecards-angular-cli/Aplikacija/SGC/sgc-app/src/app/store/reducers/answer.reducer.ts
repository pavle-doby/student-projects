import { SUBIMT_PITANJE_DEF_UNOS_POJMA, SubitmPitanjeDefinicijaUnosPojma, SUBMIT_TEST_END, START_TRUE_FALSE_TEST, START_ALL, GET_CARDS_FROM_DATABASE_SUCCESS, GetCardsFromDataBaseSuccess, SIGN_OUT } from "./../actions/actions";
import { SUBIMT_TEST_PITANJE_DEF_UNOS_POJMA, SubmitTestPitanjeDefinicijaUnosPojma } from "./../actions/actions";
import { SUBMIT_ANSWER, SubmintAnswer, FINIS_TEST } from "./../actions/actions";

import { Action } from "@ngrx/store";
import { Kartica } from "../../models/kartica";

const initialState: Kartica[] = [];

export default function(state: Kartica[] = initialState, action: Action) {
    switch(action.type) {
        case SIGN_OUT: {
            console.log(action.type);
            state = [];
            return state.map(x=>x);
        }
        case SUBMIT_ANSWER: {
            const kartica = (action as SubmintAnswer).kartica;
            // console.log("SUBMIT_ANSWER kartica: ", kartica);
            state.push(kartica);
            return state.map(x=>x);
        }
        case SUBMIT_TEST_END: {
            let countRight = 0;
            let countWrong = 0;
            state.forEach((card) => {
                if(card.naucena === 1)
                    countRight++;
                else if(card.naucena === -1)
                    countWrong++;
            });
            state = [];
            state.push(new Kartica(0,"submit",'submit'));
            state[0].naucena = countRight * 100 / (countRight + countWrong)
            state[0].posecenost = 1;
            state[0].tezina = 100 - state[0].naucena;
            // console.log("SUBMIT_TEST_END kartica[0]: ", state[0]);
            return state.map(x=>x);
        }
        case SUBIMT_PITANJE_DEF_UNOS_POJMA: {
            const kartica = (action as SubitmPitanjeDefinicijaUnosPojma).kartica;
            // console.log("SUBIMT_PITANJE_DEF_UNOS_POJMA kartica: ", kartica);
            state.push(kartica);
            return state.map(x=>x);
        }
        case SUBIMT_TEST_PITANJE_DEF_UNOS_POJMA: {
            let countRight = 0;
            let countWrong = 0;
            state.forEach((card) => {
                if(card.naucena === 1)
                    countRight++;
                else if(card.naucena === -1)
                    countWrong++;
            });
            state = [];
            state.push(new Kartica(0,"submit",'submit'));
            state[0].naucena = countRight * 100 / (countRight + countWrong)
            state[0].posecenost = 1;
            state[0].tezina = 100 - state[0].naucena;
            // console.log("SUBIMT_TEST_PITANJE_DEF_UNOS_POJMA kartica[0]: ", state[0]);
            return state.map(x=>x);
        }
        default: {
            return state;
        }
    }
}