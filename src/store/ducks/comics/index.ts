import { ComicsState, ComicsTypes } from "./types";
import { Reducer } from "redux";
import { Comic } from "../../../common/types/marvel";

const INITIAL_STATE: ComicsState = {
    error: false,
    loading: false,
    error_more: false,
    loading_more: false,
    comics: [],
    offset: 0,
    limit: 20,
    total: 0
};

const setOffset = (state, offset) => offset + state.limit;

const reducer: Reducer<ComicsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ComicsTypes.LOAD:
            return { ...state, loading: true };

        case ComicsTypes.SUCCESS:

            return {
                ...state,
                offset: setOffset(state, state.offset),
                loading: false,
                comics: action.payload.comics,
                error: false
            };

        case ComicsTypes.ERROR:
            return { ...state, loading: false, comics: [], error: true };

        case ComicsTypes.LOAD_MORE:
            return { ...state, loading_more: true };

        case ComicsTypes.SUCCESS_MORE:

            return {
                ...state,
                offset: setOffset(state, state.offset),
                loading_more: false,
                comics: [...state.comics, ...action.payload.comics],
                error_more: false
            };

        case ComicsTypes.ERROR:
            return { ...state, loading_more: false, comics: [...state.comics], error_more: true };


        case ComicsTypes.SET_CREATORS:
            const { id, creators } = action.payload;
            const newComics = state.comics.map(comic => {
                if (comic.id === id) {
                    comic.creators.data = creators;
                }

                return comic;
            });
            return { ...state, loading: false, comics: newComics, error: true };

        default:
            return state;

    }
}

export default reducer;