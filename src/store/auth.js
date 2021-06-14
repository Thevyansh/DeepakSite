import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase/firebase';
import { errorAdded } from './error';

const initialState = {
  currentUser: {},
  isLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequested: (state) => {
      state.isLoading = true;
    },
    authFailed: (state) => {
      state.isLoading = false;
    },
    authSuccess: (state) => {
      state.isLoading = false;
    },
    currentUserChanged: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    authInitialized: (state, action) => {
      state.currentUser = action.payload;
    },
    signoutRequested: (state) => {
      state.isLoading = true;
    },
    signoutSuccess: (state) => {
      state.isLoading = false;
      state.currentUser = null;
    },
    signoutFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  authInitialized,
  authSuccess,
  currentUserChanged,
  authRequested,
  authFailed,
  signoutRequested,
  signoutSuccess,
  signoutFailed,
} = authSlice.actions;

export const selectUser = (state) => state.auth.currentUser;
export const selectAuth = (state) => state.auth;

export const signupEmail = (email, password) => async (dispatch, getState) => {
  dispatch(authRequested());
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res) {
      return dispatch(authSuccess());
    }
  } catch (error) {
    dispatch(authFailed());
    return dispatch(errorAdded(error.message));
  }
};

export const signInEmail = (email, password) => async (dispatch, getState) => {
  dispatch(authRequested());
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    if (res) {
      return dispatch(authSuccess());
    }
  } catch (error) {
    dispatch(authFailed());
    return dispatch(errorAdded(error.message));
  }
};

export const signout = () => async (dispatch) => {
  dispatch(signoutRequested());
  try {
    dispatch(signoutSuccess());
    return auth.signOut();
  } catch (error) {
    dispatch(signoutFailed());
    return dispatch(errorAdded(error.message));
  }
};

export const resetPassword = (email) => async (dispatch) => {
  dispatch(authRequested());
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (error) {
    return dispatch(errorAdded(error.message));
  }
};
export default authSlice.reducer;
