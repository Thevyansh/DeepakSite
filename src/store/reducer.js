import { combineReducers } from '@reduxjs/toolkit';
import entitiesReducer from './entities';
import errorReducer from './error';
import uiReducer from './ui/ui';
import authReducer from './auth';

export default combineReducers({
  entities: entitiesReducer,
  error: errorReducer,
  ui: uiReducer,
  auth: authReducer,
});
