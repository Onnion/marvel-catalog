import { CreatorsTypes } from "./types";
import { Reducer } from "redux";
import { CreatorsState } from "./types";

const INITIAL_STATE: CreatorsState = {
    error: false,
    loading: false,
    creators: []
};

const reducer: Reducer<CreatorsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CreatorsTypes.LOAD:
            return { ...state, loading: true };
        case CreatorsTypes.SUCCESS:
            return { ...state, loading: false, creators: action.payload.creators, error: false };

        case CreatorsTypes.ERROR:
            return { ...state, loading: false, creators: [], error: true };

        default:
            return state;

    }
}

export default reducer;