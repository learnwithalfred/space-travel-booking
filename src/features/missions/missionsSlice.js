/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get(
      'https://api.spacexdata.com/v3/missions?limit=100',
    );
    return response.data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.status = 'loading';
    }).addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.missions = action.payload;
    }).addCase(fetchMissions.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export { fetchMissions };
export const selectAllMissions = (state) => state.missions.missions;
export const getMissionsStatus = (state) => state.missions.status;
export const getMissionsError = (state) => state.missions.error;
export default missionsSlice.reducer;
