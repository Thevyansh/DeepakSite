import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts';
import postReducer from './post';

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
});
