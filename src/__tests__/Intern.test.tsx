import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { Intern } from '../pages/Intern';
import { mockInitialState, mockUseSelector } from '../common/utils/tests.utils';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Intern /> unit test', () => {
    let internProps;

    beforeEach(() => {
        internProps = { id: 1, creators: { data: [] }, title: 'Test Comic Name', thumbnail: { path: '', extension: '' } };
    });

    it('should render without error', () => {
        const store = mockInitialState();
        const component = shallow(
            <Provider store={store}>
                <Intern />
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

    it('should dont have children in CreatorsList when data is empty', () => {
        const store = mockInitialState({ comics: { comic: internProps } });
        mockUseSelector(store);

        const component = mount(
            <Provider store={store}>
                <Router>
                    <Intern />
                </Router>
            </Provider>,
        );

        const CreatorsList = component.find('[data-testid="creatorsList"]').last().children();
        expect(CreatorsList.find('div').length).toEqual(internProps.creators.data.length);
    });
});