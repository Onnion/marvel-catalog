import { action } from 'typesafe-actions';
import { CharactersTypes } from './types';

export const load = () => action(CharactersTypes.LOAD);

export const sucess = (characters: any[]) => action(CharactersTypes.SUCCESS, { characters });

export const error = () => action(CharactersTypes.ERROR);

export const loadMore = (offset: number) => action(CharactersTypes.LOAD_MORE, { offset });

export const sucessMore = (characters: any[]) => action(CharactersTypes.SUCCESS_MORE, { characters });

export const errorMore = () => action(CharactersTypes.ERROR_MORE);

export const search = (caracter: string) => action(CharactersTypes.SEARCH, { caracter });

export const sucessSearch = (characters: any[]) => action(CharactersTypes.SUCCESS_SEARCH, { characters });

export const errorSearch = () => action(CharactersTypes.ERROR_SEARCH);

export const set = (character: any) => action(CharactersTypes.SET, { character });
