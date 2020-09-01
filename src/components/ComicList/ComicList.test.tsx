import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import ComicList from '.';
import { mockSelectors, mockInitialState } from '../../common/utils/tests.utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ComicList /> unit test', () => {

    it('should render without error', () => {
        const store = mockInitialState();
        const component = shallow(
            <Provider store={store}>
                <ComicList />
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

    it('should show <Comic /> while load comics', () => {
        mockSelectors({ comics: [] });
        const component = shallow(<ComicList />);

        expect(component.find('Comic').exists()).toBe(false);
    });

    it('should show <Comic /> while load comics', () => {
        mockSelectors({ comics: [{ title: 'teste' }] });
        const component = shallow(<ComicList />);

        expect(component.find('Comic').exists()).toBe(true);
    });


});