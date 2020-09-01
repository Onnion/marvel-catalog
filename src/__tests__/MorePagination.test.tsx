import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MorePagination as MorePaginationComponent } from '../components/MorePagination';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<MorePagination /> unit test', () => {

    it('should render without error', () => {
        const MorePagination = (props: any) => <MorePaginationComponent {...props} />
        const component = shallow(<MorePagination />);
        expect(component).toMatchSnapshot();
    });
});