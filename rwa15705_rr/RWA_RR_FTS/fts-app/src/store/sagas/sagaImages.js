import{call,put,takeEvery,takeLatest}from "redux-saga/effects";

import {REQUEST_API_DATA_IMAGES, receiveApiDataImages} from "../action/index";
import { fetchQuoteDataImages } from "./api";
// api

function* getApiDataImages(action){
    try {
        const data = yield call(fetchQuoteDataImages);
        // console.log("getApiDataImages data: ", data);
        yield put(receiveApiDataImages(data));
    } catch (error) {
        console.log(error);
    }
}

export default function* sagaImages(){
    yield takeLatest(REQUEST_API_DATA_IMAGES, getApiDataImages);
}