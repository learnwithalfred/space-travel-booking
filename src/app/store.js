import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rocketReducer from '../features/rockets/rocketSlice';
import missionReducer from '../features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
