import React from 'react';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../store/saga';
import configureMockStore from 'redux-mock-store';
import { ComicsState } from '../../store/ducks/comics/types';
import * as Redux from 'react-redux';

export const initialState: ComicsState = {
    error: false,
    loading: false,
    error_more: false,
    loading_more: false,
    comics: [],
    comic: undefined,
    offset: 0,
    limit: 20,
    loading_search_by_character: false,
    error_search_by_character: false
};

export const mockInitialState = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const store = configureMockStore(middleware)({
        comics: {
            ...initialState
        },
    });

    sagaMiddleware.run(rootSaga);

    return store;
}

export const mockUseEffect = () => {
    jest
        .spyOn(React, 'useEffect')
        .mockImplementationOnce(efect => efect());
};

export const mockSelectors = (storeValues: any) => {
    const mockStore = configureMockStore()({
        comics: {
            ...initialState,
            ...storeValues
        },
    });

    jest
        .spyOn(Redux, 'useSelector')
        .mockImplementation((state: any) => state(mockStore.getState()));

    jest
        .spyOn(Redux, 'useDispatch')
        .mockImplementation(() => mockStore.dispatch);
};