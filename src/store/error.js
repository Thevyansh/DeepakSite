import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasError: false,
  message: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    errorAdded: (error, action) => {
      error.message = action.payload;
      error.hasError = true;
    },
    errorRemoved: (error) => initialState,
  },
});

export const { errorAdded, errorRemoved } = errorSlice.actions;

// ACTION CREATORS

export const changePostData = (data) => (dispatch, getState) => {
  console.log(data);
};

export const selectError = (state) => state.error;

export default errorSlice.reducer;
