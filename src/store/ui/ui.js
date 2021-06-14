import { combineReducers } from '@reduxjs/toolkit';
import glassReducer from './glass';
import themeReducer from './theme';

export default combineReducers({
  glass: glassReducer,
  theme: themeReducer,
});
