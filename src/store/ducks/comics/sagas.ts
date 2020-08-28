import { put, call, takeLatest } from 'redux-saga/effects';
import { getComics } from '../../../services/marvel';
import { sucess, error } from './actions';
import { ComicsTypes } from './types';

export function* load() {
    try {
        const comics = yield call(getComics);

        yield put(sucess(comics));
    } catch (err) {
        yield put(error());
    }
}

const sagas = [
    takeLatest(ComicsTypes.LOAD, load)
];

export default sagas;