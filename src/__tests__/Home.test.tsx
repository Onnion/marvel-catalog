import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import { mockInitialState, mockSelectors } from '../common/utils/tests.utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Home />', () => {

  it('should render without error', () => {
    const store = mockInitialState();
    const component = shallow(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should render <Header/> child', () => {
    const component = shallow(<Home />);
    expect(component.find('Header').exists()).toBe(true);
  });

  it('should render <CharactersList/> child', () => {
    const component = shallow(<Home />);
    expect(component.find('CharactersList').exists()).toBe(true);
  });

  it('should render <ComicList/> child', () => {
    const component = shallow(<Home />);
    expect(component.find('ComicList').exists()).toBe(true);
  });


  it('should render <MorePagination/> child', () => {
    const component = shallow(<Home />);
    expect(component.find('MorePagination').exists()).toBe(true);
  });
});
