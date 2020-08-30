import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { CharactersList } from './';
import { mockSelectors, mockInitialState } from '../../common/utils/tests.utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<CharactersList /> unit test', () => {

    it('should render without error', () => {
        const store = mockInitialState();
        const component = shallow(
            <Provider store={store}>
                <CharactersList />
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });
});