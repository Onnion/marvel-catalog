export enum VariantsTypes {
    LOAD = '@variants/LOAD',
    SUCCESS = '@variants/SUCCESS',
    ERROR = '@variants/ERROR',
}

export interface VariantsState {
    readonly loading: boolean;
    readonly error: boolean;
}