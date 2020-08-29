import { all } from 'redux-saga/effects';
import { default as comicSaga } from './ducks/comics/sagas';
import { default as creatorSaga } from './ducks/creators/sagas';

export default function* rootSaga() {
    return yield all([
        ...comicSaga,
        ...creatorSaga
    ]);
}