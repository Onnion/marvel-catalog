import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MorePagination as MorePaginationComponent } from '../components/MorePagination';
import { ComicsTypes } from '../store/ducks/comics/types';
import { mockInitialState, mockUseDispatch } from '../common/utils/tests.utils';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<MorePagination /> unit test', () => {

    it('should render without error', () => {
        const MorePagination = (props: any) => <MorePaginationComponent {...props} />
        const component = shallow(<MorePagination />);
        expect(component).toMatchSnapshot();
    });

    it(`should dispatch ${ComicsTypes.LOAD_MORE} when <FabMorePagination /> click`, () => {
        const store = mockInitialState();

        const mockDispatch = jest.fn();
        mockUseDispatch(mockDispatch);

        const component = mount(<Provider store={store}><MorePaginationComponent /></Provider>);
        const divWrapper = component.find('div').first();

        divWrapper.simulate("click");
        expect(mockDispatch).toHaveBeenCalledWith({ type: ComicsTypes.LOAD_MORE, payload: 0 });
    });
});