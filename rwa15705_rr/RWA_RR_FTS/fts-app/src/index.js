import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Provider from 'react-redux/lib/components/Provider';
import { createStore } from 'redux';
import reducer from './store/reducer';

//Redux - Saga
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware} from 'redux';
import root from './store/sagas';

const sagaMiddlewere = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddlewere)
);
sagaMiddlewere.run(root);
store.runSaga = sagaMiddlewere.run;

ReactDOM.render((
    <Provider store ={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();

