import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../features/rockets/rockets';
import store from '../app/store';

describe('Rockets should render correctly', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('container should have first child', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('table should have a h2 header', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container.querySelector('h2')).toBeTruthy();
  });
});
