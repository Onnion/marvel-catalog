import { action } from 'typesafe-actions';
import { ComicsTypes } from './types';
import { Comic } from '../../../common/types/marvel';

export const load = () => action(ComicsTypes.LOAD);

export const sucess = (comics: Comic[]) => action(ComicsTypes.SUCCESS, { comics });

export const error = () => action(ComicsTypes.ERROR);