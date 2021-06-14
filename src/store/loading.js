import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'error',
  initialState: {
    loading: false,
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { loading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading;

export default loadingSlice.reducer;
