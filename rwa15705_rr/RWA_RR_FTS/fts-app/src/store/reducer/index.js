import {combineReducers} from 'redux';
import QuoteReducer from './quote.reducer';
import Data from './data';
import DataImages from './dataImages';

const rootReducer = combineReducers({
    quotes: QuoteReducer,
    data : Data,
    dataImages: DataImages
});

export default rootReducer;