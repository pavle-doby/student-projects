import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import { receiveApiData, sortQuote } from "../action/index";

import { sortQuoteAPI } from "./api";

import { QUOTE_SORT_SAGA } from "../action/index";

function* sortQuoteSaga(action){
    const quoteType = action.payload;
    try {
        const data = yield call(sortQuoteAPI,quoteType);
        yield put(receiveApiData(data));

    } catch (error) {
        console.log(error);
    }
}

export default function* sagaSort(){
    yield takeLatest(QUOTE_SORT_SAGA, sortQuoteSaga);
}