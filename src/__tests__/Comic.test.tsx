import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Comic as ComicComponent } from '../components/Comic';
import { Provider } from 'react-redux';
import { mockInitialState, mockSelectors, mockUseDispatch } from '../common/utils/tests.utils';
import { CreatorsTypes } from '../store/ducks/creators/types';
import * as Redux from 'react-redux';
import { ComicsTypes } from '../store/ducks/comics/types';
import { VariantsTypes } from '../store/ducks/variants/types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockHistoryPush = jest.fn();

jest
    .mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
            push: mockHistoryPush,
        }),
    }));

describe('<Comic /> unit test', () => {
    let comicProps;

    beforeEach(() => {
        comicProps = { id: 1, creators: {}, title: 'Test Comic Name', thumbnail: { path: '', extension: '' } };
    });

    it('should render without error', () => {
        const store = mockInitialState();
        const Comic = (props: any) => <ComicComponent {...props} />
        const component = shallow(
            <Provider store={store}>
                <Comic comic={comicProps} />
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

    it('should receive props', () => {
        const Comic = (props: any) => <ComicComponent {...props} />
        const component = shallow(<Comic comic={comicProps} />);

        expect(component.find({ comic: comicProps })).toHaveLength(1);
    });

    it(`should dispatch ${CreatorsTypes.LOAD} when creators.data is empty`, () => {
        const store = mockInitialState();

        const mockDispatch = jest.fn();
        mockUseDispatch(mockDispatch);

        const component = mount(<Provider store={store}><ComicComponent comic={comicProps} /></Provider>);
        const divWrapper = component.find('div').first();

        divWrapper.simulate("mouseEnter");
        expect(mockDispatch).toHaveBeenCalledWith({ type: CreatorsTypes.LOAD, payload: comicProps.id });
    });

    it(`should not dispatch ${CreatorsTypes.LOAD} when creators.data not empty`, () => {
        comicProps = { ...comicProps, creators: { data: [] } };
        const store = mockInitialState();

        const mockDispatch = jest.fn();
        mockUseDispatch(mockDispatch);

        const component = mount(<Provider store={store}><ComicComponent comic={comicProps} /></Provider>);
        const divWrapper = component.find('div').first();

        divWrapper.simulate("mouseEnter");
        expect(mockDispatch).not.toHaveBeenCalledWith({ type: CreatorsTypes.LOAD, payload: comicProps.id });
    });

    it(`should dispatch ${ComicsTypes.SET}, ${VariantsTypes.LOAD} and navigate on click`, () => {
        const store = mockInitialState();

        const mockDispatch = jest.fn();
        mockUseDispatch(mockDispatch);

        const component = mount(<Provider store={store}><ComicComponent comic={comicProps} /></Provider>);
        const divWrapper = component.find('div').first();

        divWrapper.simulate("click");
        expect(mockDispatch).toHaveBeenCalledWith({ type: ComicsTypes.SET, payload: comicProps });
        expect(mockDispatch).toHaveBeenCalledWith({ type: VariantsTypes.LOAD, payload: comicProps });
        expect(mockHistoryPush).toHaveBeenCalledWith('/detail');
    });
});