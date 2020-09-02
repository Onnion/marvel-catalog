import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { App } from '../App';
import { mockInitialState, mockUseDispatch, mockUseEffect } from '../common/utils/tests.utils';
import { ComicsTypes } from '../store/ducks/comics/types';
import { CharactersTypes } from '../store/ducks/characters/types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Character /> unit test', () => {

    it('should render without error', () => {
        const store = mockInitialState();
        const component = shallow(
            <Provider store={store}>
                <App />
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

    it(`should dispatch ${ComicsTypes.LOAD} and ${CharactersTypes.LOAD} when mount`, () => {
        const store = mockInitialState();
        const mockDispatch = jest.fn();
        mockUseDispatch(mockDispatch);
        mockUseEffect();

        const component = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        component.update();

        expect(mockDispatch).toHaveBeenCalledWith({ type: ComicsTypes.LOAD });
        expect(mockDispatch).toHaveBeenCalledWith({ type: CharactersTypes.LOAD });
    });
});