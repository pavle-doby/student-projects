import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA, receiveApiData} from "../action/index";
import { fetchQuoteData } from "./api";


function* getApiData(action){
    // console.log("getApiData() action:", action.type);

    try{
        const data = yield call(fetchQuoteData);
        // console.log("getApiData() data:",data); 
        yield put(receiveApiData(data)); 
    }
    catch(error){
        console.log(error);
    }
}

export default function* mySaga(){
    yield takeLatest(REQUEST_API_DATA, getApiData);
}