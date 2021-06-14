import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import toastMiddleware from './middleware/toastMiddleware';
import savePost from './middleware/savePost';

export default configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['posts', 'post', 'auth/currentUserChanged'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['posts', 'post', 'auth/currentUserChanged'],
        // Ignore these paths in the state
        ignoredPaths: ['posts', 'post', 'auth'],
      },
      immutableCheck: {
        ignoredPaths: ['auth.currentUser'],
      },
    }),
    toastMiddleware,
    savePost,
  ],
});
