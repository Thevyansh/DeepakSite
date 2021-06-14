import { formatDistanceToNow, toDate } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../firebase/firebase';
import Post from '../Post/Post';
import { loadMore, selectPosts } from '../../store/posts';

const StyledPostGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: calc(
    var(--grid-items-per-row) *
      (var(--grid-item-max-width) + var(--grid-item-margin))
  );
`;

const PostList = () => {
  const dispatch = useDispatch();
  const loader = useRef(null);
  const { hasMore, list: posts, isLoading, firstLoad } = useSelector(
    selectPosts
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting && firstLoad) {
        dispatch(loadMore());
      }
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [dispatch, loader, firstLoad]);

  return (
    <>
      <StyledPostGrid>
        {posts ? posts.map((post) => <Post key={post.id} post={post} />) : null}
        {hasMore && <div ref={loader} />}
      </StyledPostGrid>
    </>
  );
};

export default PostList;
