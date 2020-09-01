import { Reducer } from "redux";
import { VariantsTypes, VariantsState } from "./types";

const INITIAL_STATE: VariantsState = {
    error: false,
    loading: false
};

const reducer: Reducer<VariantsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VariantsTypes.LOAD:
            return { ...state, loading: true };

        case VariantsTypes.SUCCESS:
            return { ...state, loading: false, error: false };

        case VariantsTypes.ERROR:
            return { ...state, loading: false, error: true };

        default:
            return state;

    }
}

export default reducer;