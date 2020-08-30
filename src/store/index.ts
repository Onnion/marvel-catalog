import { createStore, Store, applyMiddleware } from 'redux';
import reducer from './reducer';
import { ComicsState } from './ducks/comics/types';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './saga';
import { CharactersState } from './ducks/characters/types';

export interface State {
    comics: ComicsState,
    characters: CharactersState,
}

const sagaMiddleWare = createSagaMiddleWare();
const middleWares = applyMiddleware(sagaMiddleWare);

const store: Store<State> = createStore(reducer, middleWares);

sagaMiddleWare.run(rootSaga);

export default store;