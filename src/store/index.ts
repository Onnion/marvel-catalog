import { createStore, Store, applyMiddleware } from 'redux';
import reducer from './reducer';
import { ComicsState } from './ducks/comics/types';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './saga';

export interface State {
    comics: ComicsState
}

const sagaMiddleWare = createSagaMiddleWare();
const middleWares = applyMiddleware(sagaMiddleWare);

const store: Store<State> = createStore(reducer, middleWares);

sagaMiddleWare.run(rootSaga);

export default store;