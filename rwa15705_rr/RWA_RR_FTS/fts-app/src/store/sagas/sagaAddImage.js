import { receiveApiDataImages, IMAGE_ADD_SAGA } from "../action";
import{call, put, takeLatest}from "redux-saga/effects";
import { addImageAPI } from "./api";



function* addApiImage(action) {
    try {
        const dataImages = yield call(addImageAPI, action.payload);
        yield put(receiveApiDataImages(dataImages));

    } catch (error) {
        console.log(error);
    }
}

export default function* myAddSagaImage(){
    yield takeLatest(IMAGE_ADD_SAGA, addApiImage);
}