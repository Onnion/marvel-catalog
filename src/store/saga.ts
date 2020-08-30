import { all } from 'redux-saga/effects';
import comicSaga from './ducks/comics/sagas';
import creatorSaga from './ducks/creators/sagas';
import charactersSaga from './ducks/characters/sagas';

export default function* rootSaga() {
    return yield all([
        ...comicSaga,
        ...creatorSaga,
        ...charactersSaga
    ]);
}