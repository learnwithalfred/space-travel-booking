import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../features/rockets/rocketSlice';
import missionReducer from '../features/missions/missionsSlice';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    theme: themeReducer,
  },
});

export default store;
