import { action } from 'typesafe-actions';
import { ComicsTypes } from './types';
import { Comic } from '../../../common/types/marvel';

export const load = () => action(ComicsTypes.LOAD);

export const sucess = (comics: Comic[]) => action(ComicsTypes.SUCCESS, { comics });

export const error = () => action(ComicsTypes.ERROR);

export const setCreators = ({ id, creators }) => action(ComicsTypes.SET_CREATORS, { id, creators });

export const loadMore = (offset: number) => action(ComicsTypes.LOAD_MORE, { offset });

export const sucessMore = (comics: Comic[]) => action(ComicsTypes.SUCCESS_MORE, { comics });

export const errorMore = () => action(ComicsTypes.ERROR_MORE);