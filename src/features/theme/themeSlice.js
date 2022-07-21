/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bgLight: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.bgLight = action.payload;
    },
  },
});
export const getThemeColor = (state) => state.theme.bgLight;
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
