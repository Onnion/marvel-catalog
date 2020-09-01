import { put, call, takeLatest } from 'redux-saga/effects';
import { getVariants } from '../../../services/marvel';
import { error } from './actions';
import { VariantsTypes } from './types';
import { setVariants } from '../comics/actions';
import { Comic, Image } from '../../../common/types/marvel';

export function* load({ payload: comic }: { payload: Comic }) {
    try {
        const wrapper = async () => getVariants(comic.variants);
        const variants: Image[] = yield call(wrapper);

        yield put(setVariants({ variants, id: comic.id }));
    } catch (err) {
        yield put(error());
    }
}
const sagas = [
    //@ts-ignore
    takeLatest(VariantsTypes.LOAD, load)
];

export default sagas;