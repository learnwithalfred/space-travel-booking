import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rocketReducer from '../features/rockets/rocketSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    rockets: rocketReducer,
  },
});

export default store;
