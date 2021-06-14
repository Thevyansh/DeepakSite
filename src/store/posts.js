import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { db } from '../firebase/firebase';
import { errorAdded } from './error';

let last = null;

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    isLoading: false,
    hasMore: true,
    selectedPost: null,
    firstLoad: false,
  },

  reducers: {
    postsRequested: (posts) => {
      posts.isLoading = true;
    },
    postsRequestFailed: (posts) => {
      posts.isLoading = false;
    },
    postsReceived: (posts, action) => {
      posts.firstLoad = true;
      posts.isLoading = false;
      posts.hasMore = action.payload.hasMore;
      posts.list = posts.list.concat(action.payload.list);
    },

    postAddedById: (posts, action) => {
      posts.selectedPost = action.payload;
      posts.isLoading = false;
    },

    postUpdated: (posts, action) => {
      posts.push(action.payload);
    },
    postCreated: (posts, action) => {
      posts.push(action.payload);
    },
  },
});

export const {
  postsRequested,
  postCreated,
  postUpdated,
  postsReceived,
  postsRequestFailed,
  postAddedById,
  currentPostRemoved,
} = postsSlice.actions;

// ACTION CREATORS
const resGen = (snap) => ({
  hasMore: !(snap.docs.length < 24),
  list: snap.docs.map((post, index) => {
    if (snap.docs.length - 1 === index) last = post;
    return {
      id: post.id,
      ...post.data(),
      createdAt: post.data().createdAt.toMillis(),
      publishDate: post.data().publishDate.toMillis(),
    };
  }),
});

export const firstLoad = () => async (dispatch, getState) => {
  dispatch(postsRequested());
  const postsRef = db.collection('posts');
  try {
    const snap = await postsRef.orderBy('publishDate', 'desc').limit(24).get();

    const res = resGen(snap);

    return dispatch(postsReceived(res));
  } catch (error) {
    return dispatch(errorAdded(error.message));
  }
};

export const loadMore = () => async (dispatch, getState) => {
  dispatch(postsRequested());
  const { hasMore } = getState().entities.posts;
  if (hasMore) {
    try {
      const postsRef = db.collection('posts');
      const snap = await postsRef
        .orderBy('publishDate', 'desc')
        .startAfter(last?.data().publishDate)
        .limit(24)
        .get();

      const res = resGen(snap);

      return dispatch(postsReceived(res));
    } catch (error) {
      return dispatch(errorAdded(error.message));
    }
  }
};

export const loadPostDetails = (id) => async (dispatch, getState) => {
  dispatch(postsRequested());
  const { list } = getState().entities.posts;

  const post = list.find((el) => el.id === id);

  if (post) {
    return dispatch(postAddedById(post));
  }

  try {
    const snap = await db.collection('posts').doc(id).get();
    if (snap.exists) {
      return dispatch(
        postAddedById({
          id: snap.id,
          ...snap.data(),
          createdAt: snap.data().createdAt.toMillis(),
          publishDate: snap.data().publishDate.toMillis(),
        })
      );
    }
  } catch (error) {
    dispatch(errorAdded(error.message));
  }
};

export const selectPosts = (state) => state.entities.posts;

export const selectAllPosts = (state) => state.entities.posts.list;

export const selectPostDetails = (state) => state.entities.posts.selectedPost;
export const selectPostIsLoading = (state) => state.entities.posts.isLoading;

export default postsSlice.reducer;
