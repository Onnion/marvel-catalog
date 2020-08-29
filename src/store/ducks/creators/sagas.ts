import { put, call, takeLatest } from 'redux-saga/effects';
import { getCreators } from '../../../services/marvel';
import { error } from './actions';
import { CreatorsTypes } from './types';
import { setCreators } from '../comics/actions';

export function* load({ payload }) {
    try {
        const wrapper = async () => getCreators(payload);
        const creators = yield call(wrapper);

        yield put(setCreators({ creators, id: payload }));

    } catch (err) {
        yield put(error());
    }
}

const sagas = [
    //@ts-ignore
    takeLatest(CreatorsTypes.LOAD, load)
];

export default sagas;