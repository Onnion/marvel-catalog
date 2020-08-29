import { action } from 'typesafe-actions';
import { CreatorsTypes } from './types';

export const load = () => action(CreatorsTypes.LOAD);

export const sucess = (creators: any[]) => action(CreatorsTypes.SUCCESS, { creators });

export const error = () => action(CreatorsTypes.ERROR);
