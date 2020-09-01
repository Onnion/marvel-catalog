import { action } from 'typesafe-actions';
import { VariantsTypes } from './types';
import { Comic } from '../../../common/types/marvel';

export const load = (comic: Comic) => action(VariantsTypes.LOAD, { comic });

export const sucess = (variants: any[]) => action(VariantsTypes.SUCCESS, { variants });

export const error = () => action(VariantsTypes.ERROR);