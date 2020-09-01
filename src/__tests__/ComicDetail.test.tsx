import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ComicDetail as ComicDetailComponent } from '../components/ComicDetail';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ComicDetail /> unit test', () => {

    it('should render without error', () => {
        const ComicDetail = (props: any) => <ComicDetailComponent {...props} />
        const component = shallow(<ComicDetail />);
        expect(component).toMatchSnapshot();
    });

});