import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGlass: false,
};

const glassSlice = createSlice({
  name: 'glass',
  initialState,
  reducers: {
    glassToggled: (state) => {
      state.isGlass = !state.isGlass;
    },
    glassInitialized: (state, action) => {
      state.isGlass = action.payload;
    },
  },
});

export const { glassToggled, glassInitialized } = glassSlice.actions;

export const initializeGlass = () => (dispatch) => {
  const cachedGlass = window.localStorage.getItem('isGlass');
  if (cachedGlass === 'true') return dispatch(glassInitialized(true));
  dispatch(glassInitialized(false));
};
export const toggleGlass = () => (dispatch, getState) => {
  const glass = getState().ui.glass.isGlass;
  window.localStorage.setItem('isGlass', !glass);
  dispatch(glassToggled());
};

export const selectGlass = (state) => state.ui.glass.isGlass;

export default glassSlice.reducer;
