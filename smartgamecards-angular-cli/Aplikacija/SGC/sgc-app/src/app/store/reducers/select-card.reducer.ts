import { Action } from "@ngrx/store";
import { Kartica } from "../../models/kartica";
import { SelectCard, CARD_SELECT, CARD_ADD } from "../actions/actions";

export default function (state: Kartica = null, action: Action) {
    switch (action.type) {
        case CARD_SELECT:
            {
                const {card} = (action as SelectCard);
                console.log("CARD_SELECT card: ", card);
                return card;
            }
        default: {
            return state;
        }
    }
}