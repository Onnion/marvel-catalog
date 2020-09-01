import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Comic as ComicComponent } from '../components/Comic';
import { Provider } from 'react-redux';
import { mockInitialState } from '../common/utils/tests.utils';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Comic /> unit test', () => {
    it('should render without error', () => {
        const store = mockInitialState();
        const comicProps = { creators: {}, title: 'Test Comic Name', thumbnail: { path: '', extension: '' } };
        const Comic = (props: any) => <ComicComponent {...props} />
        const component = shallow(<Provider store={store}><Comic comic={comicProps} /></Provider>);
        const { getByText } = render(<Comic />);

        expect(component.props().children.props.comic).toEqual(comicProps);
        expect(getByText('Test Comic Name')).toBeInTheDocument();
    });
});