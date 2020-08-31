import { put, call, takeLatest } from 'redux-saga/effects';
import { getCharacters, searchCharacters } from '../../../services/marvel';
import { sucess, error, sucessMore, errorMore, set, sucessSearch, errorSearch } from './actions';
import { CharactersTypes } from './types';

export function* load({ payload }) {
    try {
        const wrapper = async () => getCharacters(payload);
        const [characters] = yield call(wrapper);

        if (!!payload) {
            yield put(sucessMore(characters));
        } else {
            yield put(sucess(characters));
        }

    } catch (err) {
        if (!!payload) {
            yield put(errorMore());
        } else {
            yield put(error());
        }
    }
}

export function* search({ payload }) {
    try {
        const wrapper = async () => searchCharacters(payload);
        const [characters] = yield call(wrapper);

        yield put(sucessSearch(characters));

    } catch (err) {
        yield put(errorSearch());
    }
}

export function* setCharacter({ payload }) {
    put(set(payload));
}

const sagas = [
    //@ts-ignore
    takeLatest(CharactersTypes.LOAD, load),
    //@ts-ignore
    takeLatest(CharactersTypes.LOAD_MORE, load),
    //@ts-ignore
    takeLatest(CharactersTypes.SET, setCharacter),
    //@ts-ignore
    takeLatest(CharactersTypes.SEARCH, search)
];

export default sagas;