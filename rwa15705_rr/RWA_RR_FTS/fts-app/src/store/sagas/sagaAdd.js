import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA, receiveApiData} from "../action/index";

 import {addQuoteAPI} from "../sagas/api";

 import {QUOTE_ADD_SAGA} from "../action/index";

function* addApiData(action){
    try {
        const data = yield call(addQuoteAPI,action.payload);
        // console.log("addApiData() data:",data); 
        yield put(receiveApiData(data));

    } catch (error) {
        console.log(error);
    }
}

export default function* myAddSaga(){
    yield takeLatest(QUOTE_ADD_SAGA, addApiData);
}