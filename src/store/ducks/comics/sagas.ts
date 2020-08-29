import { put, call, takeLatest } from 'redux-saga/effects';
import { getComics } from '../../../services/marvel';
import { sucess, error, sucessMore, errorMore } from './actions';
import { ComicsTypes } from './types';

export function* load({ payload }) {
    try {
        const wrapper = async () => getComics(payload);
        const [comics, offset] = yield call(wrapper);

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

const sagas = [
    //@ts-ignore
    takeLatest(ComicsTypes.LOAD, load),
    //@ts-ignore
    takeLatest(ComicsTypes.LOAD_MORE, load)
];

export default sagas;