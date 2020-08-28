import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Home from '.';
import { mockInitialState, mockSelectors } from '../../common/utils/tests.utils';

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

  it('should show <Loader /> while load comics', () => {
    mockSelectors({ loading: true });
    const component = shallow(<Home />);

    expect(component.find('Loader').exists()).toBe(true);
  });

  it('should show <ComicList /> then load comics', () => {
    mockSelectors({ loading: false });
    const component = shallow(<Home />);

    expect(component.find('ComicList').exists()).toBe(true);
  });
});
