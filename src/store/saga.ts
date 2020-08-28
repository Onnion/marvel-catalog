import { all } from 'redux-saga/effects';
import { default as comicSaga } from './ducks/comics/sagas';

export default function* rootSaga() {
    return yield all([
        ...comicSaga
    ]);
}