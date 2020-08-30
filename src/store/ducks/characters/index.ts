import { Reducer } from "redux";
import { CharactersTypes, CharactersState } from "./types";

const INITIAL_STATE: CharactersState = {
    error: false,
    loading: false,
    error_more: false,
    loading_more: false,
    characters: [],
    character: null,
    offset: 0,
    limit: 20
};

const setOffset = (state, offset) => offset + state.limit;

const reducer: Reducer<CharactersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CharactersTypes.LOAD:
            return { ...state, loading: true };

        case CharactersTypes.SUCCESS:
            return {
                ...state,
                offset: setOffset(state, state.offset),
                loading: false,
                characters: action.payload.characters,
                error: false
            };

        case CharactersTypes.ERROR:
            return { ...state, loading: false, characters: [], error: true };

        case CharactersTypes.LOAD_MORE:
            return { ...state, loading_more: true };

        case CharactersTypes.SUCCESS_MORE:
            return {
                ...state,
                offset: setOffset(state, state.offset),
                loading_more: false,
                characters: [...state.characters, ...action.payload.characters],
                error_more: false
            };

        case CharactersTypes.ERROR_MORE:
            return { ...state, loading_more: false, characters: [...state.characters], error_more: true };

        case CharactersTypes.SET:
            return { ...state, character: action.payload };

        default:
            return state;

    }
}

export default reducer;