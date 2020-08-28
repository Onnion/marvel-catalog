import { ComicsState, ComicsTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: ComicsState = {
    error: false,
    loading: false,
    comics: []
};

const reducer: Reducer<ComicsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ComicsTypes.LOAD:
            return { ...state, loading: true };
        case ComicsTypes.SUCCESS:
            return { ...state, loading: false, comics: action.payload.comics, error: false };

        case ComicsTypes.ERROR:
            return { ...state, loading: false, comics: [], error: true };
        
        default:
            return state;

    }
}

export default reducer;