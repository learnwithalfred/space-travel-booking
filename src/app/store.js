import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../features/rockets/rocketSlice';
import missionReducer from '../features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
