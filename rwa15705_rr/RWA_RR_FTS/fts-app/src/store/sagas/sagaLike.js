import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA, receiveApiData} from "../action/index";

import { likeQuoteAPI } from "../sagas/api"; 

import { QUOTE_LIKE_SAGA } from "../action/index";

function* likeQuoteSagaInSagaLike(action){
    try {
        const data = yield call(likeQuoteAPI,action.payload );

        yield put(receiveApiData(data));
    } catch (error) {
        console.log(error);
    }
}

export default function* sagaLike(){
    yield takeLatest(QUOTE_LIKE_SAGA, likeQuoteSagaInSagaLike);
}