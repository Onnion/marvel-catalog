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

export const search = (caracter: string) => action(ComicsTypes.SEARCH, { caracter });

export const sucessSearch = (comics: Comic[]) => action(ComicsTypes.SUCCESS_SEARCH, { comics });

export const errorSearch = () => action(ComicsTypes.ERROR_SEARCH);

export const loadByCharacter = (id: number) => action(ComicsTypes.LOAD_SEARCH_BY_CHARACTER, { id });

export const sucessByCharacter = (comics: Comic[]) => action(ComicsTypes.SUCCESS_SEARCH_BY_CHARACTER, { comics });

export const errorByCharacter = () => action(ComicsTypes.ERROR_SEARCH_BY_CHARACTER);
