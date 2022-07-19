import { getMissionsStatus, selectAllMissions, joinMission } from '../features/missions/missionsSlice';

describe('fetchMissions', () => {
  it('getMissionsStatus selector', () => {
    const state = {
      missions: {
        missions: [],
        status: 'idle',
        error: null,
      },
    };
    expect(getMissionsStatus(state)).toBe('idle');
  });

  it('selectAllMissions selector', () => {
    const state = {
      missions: {
        missions: [],
        status: 'idle',
        error: null,
      },
    };
    expect(selectAllMissions(state)).toEqual([]);
  });

  it('joinMission action', () => {
    const action = joinMission(1);
    expect(action).toEqual({
      type: 'missions/joinMission',
      payload: 1,
    });
  });
});
