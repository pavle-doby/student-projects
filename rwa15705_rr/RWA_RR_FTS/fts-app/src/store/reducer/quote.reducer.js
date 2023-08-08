import { getRandomQuotes } from "../../services/randomQuotesGenerator";
import { QUOTE_SORT, QUOTE_ADD, QUOTE_FIND, QUOTE_COMMENT } from '../action';
import { Quote } from "../../models/quote.models";

export const quoteTypeArray = ['male stvari','price','ispovesti','postao sam','mudorsti','motivacija', 'lepe slike'];

const initialState = {
    quotesWhole: [],
    quotesFiltered: [],
    quoteType: quoteTypeArray
}

initialState.quotesWhole = initialState.quotesFiltered = getRandomQuotes();

export default function(state = initialState, action){
    switch(action.type){
        case QUOTE_SORT: {
            const quoteType = action.payload;
            return {
                ...state,
                quotesWhole: state.quotesWhole,
                quotesFiltered: state.quotesWhole.filter( quote => {return quote.type === quoteType}),
                quoteType: state.quoteType
            }
        }
        case QUOTE_ADD: {
            let quote = action.payload;
            quote.id = state.quotesWhole.length;

            if( quote.text === "" || quote.text === undefined || quote.text === null ||
                state.quotesWhole.map(quote => quote.text).includes(quote.text) ){
                //console.log("Nece da moze!"); // mozda neki alert... :D 
                return state;
                    
            }
            return {
                ...state,
                quotesWhole: state.quotesWhole.unshift(quote),
                quotesFiltered: state.quotesWhole,
                quoteType: state.quoteType
            }
        }
        case QUOTE_FIND: {
            console.log("Reducer:" + action.type);
            return {
                ...state,
                quotesWhole: state.quotesWhole,
                quotesFiltered: state.quotesWhole.filter( quote => {
                        const quoteText = quote.text.toUpperCase();
                        const inputString = action.payload.toUpperCase();
        
                        return quoteText.search(inputString) !== -1;
                    }),
                quoteType: state.quoteType
            }
        }
        case QUOTE_COMMENT: {
            console.log("quote.reducer.js - action: ",action);
        }
        default:{
            return state;
        }
    }
}

