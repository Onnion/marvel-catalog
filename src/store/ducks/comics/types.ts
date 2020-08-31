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
    ERROR_SEARCH = '@comics/ERROR_SEARCH',
    LOAD_SEARCH_BY_CHARACTER = '@comics/LOAD_SEARCH_BY_CHARACTER',
    SUCCESS_SEARCH_BY_CHARACTER = '@comics/SUCCESS_SEARCH_BY_CHARACTER',
    ERROR_SEARCH_BY_CHARACTER = '@comics/ERROR_SEARCH_BY_CHARACTER',
}

export interface ComicsState {
    readonly comics: Comic[];
    readonly loading: boolean;
    readonly error: boolean;
    readonly offset: number;
    readonly loading_more: boolean;
    readonly error_more: boolean;
    readonly loading_search_by_character: boolean;
    readonly error_search_by_character: boolean;
    readonly limit?: number;
}