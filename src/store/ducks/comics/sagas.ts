import { put, call, takeLatest } from 'redux-saga/effects';
import { getComics, getComicsByCharacter } from '../../../services/marvel';
import { sucess, error, sucessMore, errorMore, sucessByCharacter, errorByCharacter, set } from './actions';
import { ComicsTypes } from './types';

export function* load({ payload }) {
    try {
        const wrapper = async () => getComics(payload);
        const [comics] = yield call(wrapper);

        if (!!payload) {
            yield put(sucessMore(comics));
        } else {
            yield put(sucess(comics));
        }

    } catch (err) {
        if (!!payload) {
            yield put(errorMore());
        } else {
            yield put(error());
        }
    }
}

export function* loadByCharacter({ payload }) {
    try {
        const wrapper = async () => getComicsByCharacter(payload);
        const [comics] = yield call(wrapper);

        if (!!payload) {
            yield put(sucessByCharacter(comics));
        }
    } catch (err) {
        yield put(errorByCharacter());
    }
}

export function* setComic({ payload }) {
    put(set(payload));
}

const sagas = [
    //@ts-ignore
    takeLatest(ComicsTypes.LOAD, load),
    //@ts-ignore
    takeLatest(ComicsTypes.LOAD_MORE, load),
    //@ts-ignore
    takeLatest(ComicsTypes.LOAD_SEARCH_BY_CHARACTER, loadByCharacter),
    //@ts-ignore
    takeLatest(ComicsTypes.SET, setComic),
];

export default sagas;