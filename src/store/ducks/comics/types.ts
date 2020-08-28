import { Comic } from "../../../common/types/marvel";

export enum ComicsTypes {
    LOAD = '@comics/LOAD',
    SUCCESS = '@comics/SUCCESS',
    ERROR = '@comics/ERROR'
}

export interface ComicsState {
    readonly comics: Comic[];
    readonly loading: boolean;
    readonly error: boolean;
}