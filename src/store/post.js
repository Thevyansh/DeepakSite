import { createSlice } from '@reduxjs/toolkit';
import { db, timestamp, ts } from '../firebase/firebase';
import { errorAdded } from './error';

const initialState = {
  isLoading: true,
  publishModal: false,
  isDraft: false,
  lastSaved: 0,
  editorLoading: true,
  data: {
    title: '',
    content: '',
    featuredImage: '',
    categories: ['common'],
    tags: [],
    publishDate: Date.now(),
    private: false,
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postDataChanged: (post) => {
      post.isLoading = true;
    },
    postPublished: (post, action) => {
      post.isLoading = false;
    },

    postPublishModal: (post, action) => {
      post.publishModal = action.payload;
    },
    postDrafted: (post, action) => {
      post.isLoading = true;
      post.isDraft = true;
    },
    postTitleChange: (post, action) => {
      post.data.title = action.payload;
    },
    postImageChanged: (post, action) => {
      post.data.featuredImage = action.payload;
    },
    postCategoriesChanged: (post, action) => {
      post.data.categories = action.payload;
    },
    postTagsChanged: (post, action) => {
      post.data.tags = action.payload;
    },

    postPublishDateChanged: (post, action) => {
      post.data.publishDate = action.payload;
    },
    postLoading: (post, action) => {
      post.isLoading = true;
    },
    postInitialized: (post, action) => {
      post.data.title = action.payload.title;
      post.data.content = action.payload.content;
      post.data.categories = action.payload.categories;
      post.data.tags = action.payload.tags;
      post.data.featuredImage = action.payload.featuredImage;
      post.isLoading = false;
      post.editorLoading = false;
    },
    postContentChanged: (post, action) => {
      post.data.content = action.payload;
    },
    postLocalSaved: (post) => {
      post.lastSaved = Date.now();
    },

    resetPost: (post) => {
      post.data = {
        title: '',
        content: '',
        featuredImage: '',
        categories: [],
        tags: [],
        createdAt: '',
        private: false,
      };
    },
  },
});

export const {
  postDataChanged,
  postTitleChange,
  postImageChanged,
  postCategoriesChanged,
  postTagsChanged,
  postPublishModal,
  postDrafted,
  postPublished,
  postInitialized,
  postLocalSaved,
  postContentChanged,
  resetPost,
  postPublishDateChanged,
} = postSlice.actions;

// ACTION CREATORS

export const getPostLocal = () => (dispatch) => {
  const postData = window.localStorage.getItem('post');

  if (postData) {
    return dispatch(postInitialized(JSON.parse(postData)));
  }
  return dispatch(postInitialized(initialState));
};

export const savePostLocal = () => (dispatch, getState) => {
  const postData = getState().entities.post.data;
  window.localStorage.setItem('post', JSON.stringify(postData));
  dispatch(postLocalSaved());
};

export const createDraft = () => async (dispatch, getState) => {
  const postData = getState().entities.post.data;

  try {
    const postRef = await db.collection('drafts').add({
      ...postData,
      createdAt: timestamp(),
      publishDate: ts.fromMillis(postData.publishDate),
    });
    dispatch(postDrafted());
  } catch (e) {
    dispatch(errorAdded({ message: e.message }));
  }
};

export const createPost = () => async (dispatch, getState) => {
  const postData = getState().entities.post.data;
  try {
    const postRef = await db.collection('posts').add({
      ...postData,
      createdAt: timestamp(),
      publishDate: ts.fromMillis(postData.publishDate),
    });
    dispatch(postPublished());
  } catch (e) {
    dispatch(errorAdded({ message: e.message }));
  }
};

export const reset = () => (dispatch) => {
  window.localStorage.removeItem('post');
  dispatch(resetPost());
};

export const selectPost = (state) => state.entities.post;
export const selectPostData = (state) => state.entities.post.data;
export const selectPublishModal = (state) => state.entities.post.publishModal;
export const selectPostLoading = (state) => state.entities.post.isLoading;
export const selectEditorLoading = (state) => state.entities.post.editorLoading;

export default postSlice.reducer;
