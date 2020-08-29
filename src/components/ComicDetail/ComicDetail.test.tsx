import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ComicDetail as ComicDetailComponent } from './';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Comic /> unit test', () => {

    it('should render without error', () => {
        const Comic = (props: any) => <ComicDetailComponent {...props} />
        const component = shallow(<Comic />);
        expect(component).toMatchSnapshot();
    });

    it('should render without error', () => {
        const comicProps = { title: 'Test Comic Name' };
        const Comic = (props: any) => <ComicDetailComponent {...props} />
        const component = shallow(<Comic comic={comicProps} />);
        expect(component.html()).toContain('Test Comic Name');
    });
});