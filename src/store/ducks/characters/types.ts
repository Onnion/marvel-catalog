export enum CharactersTypes {
    LOAD = '@characters/LOAD',
    SUCCESS = '@characters/SUCCESS',
    ERROR = '@characters/ERROR',
    LOAD_MORE = '@characters/LOAD_MORE',
    SUCCESS_MORE = '@characters/SUCCESS_MORE',
    ERROR_MORE = '@characters/ERROR_MORE',
    SEARCH = '@characters/SEARCH',
    SUCCESS_SEARCH = '@characters/SUCCESS_SEARCH',
    ERROR_SEARCH = '@characters/ERROR_SEARCH',
    SET = '@characters/SET'
}

export interface CharactersState {
    readonly characters: any[];
    readonly character: any;
    readonly loading: boolean;
    readonly error: boolean;
    readonly offset: number;
    readonly loading_more: boolean;
    readonly error_more: boolean;
    readonly limit?: number;
}