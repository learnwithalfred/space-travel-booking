import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../features/missions/missions';
import store from '../app/store';

describe('Missions', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('container should have first child', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('container should have a table', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.querySelector('table')).toBeTruthy();
  });

  it('table should have a header', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.querySelector('thead')).toBeTruthy();
  });

  it('table should have a body', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.querySelector('tbody')).toBeTruthy();
  });

  it('table should have a row', () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(container.querySelector('tr')).toBeTruthy();
  });
});
