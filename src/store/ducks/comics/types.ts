import { Comic } from "../../../common/types/marvel";

export enum ComicsTypes {
    LOAD = '@comics/LOAD',
    SUCCESS = '@comics/SUCCESS',
    ERROR = '@comics/ERROR',
    SET_CREATORS = '@comics/SET_CREATORS',
    LOAD_MORE = '@comics/LOAD_MORE',
    SUCCESS_MORE = '@comics/SUCCESS_MORE',
    ERROR_MORE = '@comics/ERROR_MORE',
    SEARCH = '@comics/SEARCH',
    SUCCESS_SEARCH = '@comics/SUCCESS_SEARCH',
    ERROR_SEARCH = '@comics/ERROR_SEARCH'
}

export interface ComicsState {
    readonly comics: Comic[];
    readonly loading: boolean;
    readonly error: boolean;
    readonly offset: number;
    readonly loading_more: boolean;
    readonly error_more: boolean;
    readonly limit?: number;
    readonly total?: number;
}