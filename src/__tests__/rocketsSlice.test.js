import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  getReservedRockets,
} from '../features/rockets/rocketSlice';

describe('Rockets Slice Test', () => {
  it('rockets should be idle on initial state', () => {
    const state = {
      rockets: {
        rockets: [],
        status: 'idle',
        error: null,
        reserved: [],
      },
    };
    expect(getRocketsStatus(state)).toBe('idle');
  });

  it('Rockets array must be empty on when first rendered', () => {
    const state = {
      rockets: {
        rockets: [],
        status: 'idle',
        error: null,
        reserved: [],
      },
    };
    expect(selectAllRockets(state)).toEqual([]);
  });

  it('Rockets Errors must be null when first rendered', () => {
    const state = {
      rockets: {
        rockets: [],
        status: 'idle',
        error: null,
        reserved: [],
      },
    };
    expect(getRocketsError(state)).toBeNull();
  });

  it('Reserved Rockets must be empty when first rendered', () => {
    const state = {
      rockets: {
        rockets: [],
        status: 'idle',
        error: null,
        reserved: [],
      },
    };
    expect(getReservedRockets(state)).toEqual([]);
  });
});
