import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { ComicCreator as ComicCreatorComponent } from '.';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ComicCreator /> unit test', () => {
    it('should render without error', () => {
        const Comic = (props: any) => <ComicCreatorComponent {...props} />
        const component = shallow(<Comic />);
        expect(component).toMatchSnapshot();
    });
});