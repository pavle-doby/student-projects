import { Commnet } from "../models/comment.models";
import { Quote } from "../models/quote.models";

import { quoteTypeArray } from "../store/reducer/quote.reducer";

let faker = require('faker');

function getRandomIndex(limit){
    return parseInt(Math.random()*1000000) % limit;
}



export function getRandomQuotes(){
    let db = [];

    for (var i=0; i<25; i++) {
        let radnomNum = getRandomIndex(quoteTypeArray.length);
        let quote = new Quote(i, faker.hacker.phrase(), quoteTypeArray[radnomNum]);
        for(let i=0; i< 2; i++){
            let comment = new Comment(i, faker.hacker.phrase())
            quote.comments.push(comment);
        }
        db.push(quote);
    }
    
    return db;
}

