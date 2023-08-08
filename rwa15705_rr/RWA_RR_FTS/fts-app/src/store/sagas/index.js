import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import mySaga from './sagas';
import myAddSaga from './sagaAdd';
import sagaFind from './sagaFind';
import sagaSort from './sagaSort';
import sagaImages from './sagaImages';
import sagaLike from './sagaLike';
import sagaAddImage from "./sagaAddImage";

export default function* root(){
    yield all([
        fork(mySaga),
        fork(myAddSaga),
        fork(sagaFind),
        fork(sagaSort),
        fork(sagaImages),
        fork(sagaLike),
        fork(sagaAddImage)
    ]);
} 