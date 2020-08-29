export enum CreatorsTypes {
    LOAD = '@creators/LOAD',
    SUCCESS = '@creators/SUCCESS',
    ERROR = '@creators/ERROR',
}

export interface CreatorsState {
    readonly creators: any[];
    readonly loading: boolean;
    readonly error: boolean;
}