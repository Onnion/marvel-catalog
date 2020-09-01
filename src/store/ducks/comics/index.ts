import { ComicsState, ComicsTypes } from "./types";
import { Reducer } from "redux";
import { initialState } from "../../../common/utils/tests.utils";
import { Image } from "../../../common/types/marvel";

const setOffset = (state, offset) => offset + state.limit;

const reducer: Reducer<ComicsState> = (state = initialState, action) => {
    switch (action.type) {
        case ComicsTypes.LOAD:
            return { ...state, loading: true };

        case ComicsTypes.SUCCESS:
            return {
                ...state,
                offset: state.limit || 0,
                loading: false,
                comics: action.payload.comics,
                error: false
            };

        case ComicsTypes.ERROR:
            return { ...state, loading: false, comics: [], error: true };

        case ComicsTypes.LOAD_MORE:
            return { ...state, loading: true, loading_more: true };

        case ComicsTypes.SUCCESS_MORE:
            return {
                ...state,
                offset: setOffset(state, state.offset),
                loading: false,
                loading_more: false,
                comics: [...state.comics, ...action.payload.comics],
                error_more: false
            };

        case ComicsTypes.ERROR_MORE:
            return { ...state, loading: false, loading_more: false, comics: [...state.comics], error_more: true };

        case ComicsTypes.LOAD_SEARCH_BY_CHARACTER:
            return { ...state, loading: true };

        case ComicsTypes.SUCCESS_SEARCH_BY_CHARACTER:
            return {
                ...state,
                offset: setOffset(state, state.offset),
                loading: false,
                comics: action.payload.comics,
                error_search_by_character: false
            };

        case ComicsTypes.ERROR_SEARCH_BY_CHARACTER:
            return { ...state, loading: false, comics: [...state.comics], error_search_by_character: true };

        case ComicsTypes.SET_CREATORS:
            const { id, creators } = action.payload;
            const newComics = state.comics.map(comic => {
                if (comic.id === id) {
                    comic.creators.data = creators;
                }

                return comic;
            });
            return { ...state, loading: false, comics: newComics, error: true };


        case ComicsTypes.SET_VARIANTS:
            const { id: idComic, variants } = <{ id: number, variants: Image[] }>action.payload;
            const newComicsVariants = state.comics.map(comic => {
                if (comic.id === idComic) {
                    comic.variantsData = [comic.thumbnail, ...variants,];
                }

                return comic;
            });

            const newComicVariant = newComicsVariants.find(comic => comic.id === idComic);

            return {
                ...state,
                loading: false,
                comic: { ...newComicVariant },
                comics: newComicsVariants,
                error: true
            };

        case ComicsTypes.SET:
            return { ...state, comic: action.payload };

        default:
            return state;

    }
}

export default reducer;