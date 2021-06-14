import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
  isLoading: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChanged: (state, action) => {
      state.theme = action.payload;
    },
    themeInitialized: (state, action) => {
      state.isLoading = false;
      state.theme = action.payload;
    },
  },
});

export const { themeChanged, themeInitialized } = themeSlice.actions;

export const selectTheme = (state) => state.ui.theme;

// Action Creators

export const toggleTheme = () => (dispatch, getState) => {
  const { theme } = getState().ui.theme;

  if (theme === 'light') {
    window.localStorage.setItem('theme', 'dark');
    return dispatch(themeChanged('dark'));
  }

  window.localStorage.setItem('theme', 'light');
  return dispatch(themeChanged('light'));
};

export const initializeTheme = () => (dispatch) => {
  const theme = window.localStorage.getItem('theme');

  if (theme) {
    window.localStorage.setItem('theme', theme);
    return dispatch(themeInitialized(theme));
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    window.localStorage.setItem('theme', 'dark');
    return dispatch(themeInitialized('dark'));
  }

  window.localStorage.setItem('theme', 'light');
  return dispatch(themeInitialized('light'));
};

export default themeSlice.reducer;
