import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { Character } from '../components/Character';
import { mockUseDispatch, mockInitialState, mockUseSelector } from '../common/utils/tests.utils';
import { CharactersTypes } from '../store/ducks/characters/types';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Character /> unit test', () => {
    let characterProps;

    beforeEach(() => {
        characterProps = { id: 1, name: 'Character text', thumbnail: { path: '', extension: '' } };
    })

    it('should render without error', () => {
        const store = mockInitialState();
        const component = shallow(
            <Provider store={store}>
                <Character character={characterProps} />
            </Provider>,
        );
        expect(component).toMatchSnapshot();
    });

    it('should render character name', () => {
        const store = mockInitialState({ characters: { character: characterProps } });
        mockUseSelector(store);

        const component = mount(
            <Provider store={store}>
                <Character character={characterProps} />
            </Provider>,
        );

        const Title = component.find('h1');

        expect(Title.text()).toEqual(characterProps.name);
    });


    it(`should dispatch ${CharactersTypes.SET} when <Card /> click`, () => {
        const store = mockInitialState();

        const mockDispatch = jest.fn();
        mockUseDispatch(mockDispatch);

        const component = mount(<Provider store={store}><Character character={characterProps} /></Provider>);
        const divWrapper = component.find('div').first();

        divWrapper.simulate("click");
        expect(mockDispatch).toHaveBeenCalledWith({ type: CharactersTypes.SET, payload: characterProps });
    });
});