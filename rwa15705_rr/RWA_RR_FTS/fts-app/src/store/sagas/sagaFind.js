import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {receiveApiData, findQuote} from "../action/index";

import {findQuoteAPI} from "../sagas/api";

 import {QUOTE_FIND_SAGA} from "../action/index";

 function* findQuoteSaga(action){

    const inputString = action.payload;
    try {

        const data = yield call(findQuoteAPI,inputString);
        yield put(receiveApiData(data));

    } catch (error) {
        console.log(error);
    }
 }

export default function* sagaFind(){
    yield takeLatest(QUOTE_FIND_SAGA, findQuoteSaga);
}